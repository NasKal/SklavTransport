import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ 
  children, 
  delay = 0,
  direction = 'up' 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const getTransform = (dir: string) => {
    switch (dir) {
      case 'up': return 'translateY(20px)';
      case 'down': return 'translateY(-20px)';
      case 'left': return 'translateX(20px)';
      case 'right': return 'translateX(-20px)';
      default: return 'translateY(20px)';
    }
  };

  const props = useSpring({
    from: {
      opacity: 0,
      transform: getTransform(direction)
    },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translate(0px)' : getTransform(direction)
    },
    delay,
    config: { tension: 280, friction: 60 }
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

export default FadeInSection;