import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // If the screen is smaller than 768px, it’s mobile
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);

  handleResize(); // run it once at the start

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  };
}, []);

const mobileOffset = 300; // bigger number = scroll more before moving on mobile
const desktopOffset = 10; // smaller number = scroll earlier on desktop

const adjustedScrollY = Math.max(0, scrollY - (isMobile ? mobileOffset : desktopOffset));

  const truckAnimation = useSpring({
  transform: `
    translateX(${-adjustedScrollY * 0.5}px)
    translateY(${adjustedScrollY * 0.4}px)
    scale(${1 + adjustedScrollY * 0.0003})
  `,
  opacity: 1 - adjustedScrollY * 0.0015,
  config: { tension: 170, friction: 26 }
});



  const circle1 = useSpring({
  from: { y: 0 },
  to: { y: 40 },
  config: { duration: 2000 },
  loop: { reverse: true }
});


  const circle2 = useSpring({
  from: { y: 0 },
  to: { y: 60 },
  config: { duration: 2000 },
  loop: { reverse: true }
  });

  const circle3 = useSpring({
    from: { transform: 'translate(0px, 0px)' },
    to: { transform: 'translate(-20px, 20px)' },
    config: { duration: 3000 },
    loop: { reverse: true }
  });

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative z-30">
      <animated.div 
        style={circle1}
        className="absolute w-64 h-64 rounded-full bg-blue-100 opacity-30 top-20 left-20 z-10"
      />
      <animated.div 
        style={circle2}
        className="absolute w-48 h-48 rounded-full bg-blue-50 opacity-40 bottom-20 left-1/3 z-10"
      />
      <animated.div 
        style={circle3}
        className="absolute w-56 h-56 rounded-full bg-blue-100 opacity-20 top-1/3 right-20 -z-10"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Σκλαβενίτης{' '}<br></br>
              <span className="text-gray-800">Η λύση</span> για τις{' '}
              <span className="text-[#248BE5]">επιχειρηματικές</span> σας ανάγκες
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Η Σκλαβενίτης Μεταφορική είναι μία από τις κορυφαίες εταιρείες logistics στην Ελλάδα. 
              Προσφέρουμε έξυπνες λύσεις εφοδιαστικής αλυσίδας, τεχνολογία και προσωπική εξυπηρέτηση 
              που συνδέουν την επιχείρησή σας με τις αγορές σε όλη την Ελλάδα και την Ευρώπη.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-block border-2 border-[#248BE5] text-[#248BE5] px-6 py-3 text-center font-medium hover:bg-blue-50 transition-colors"
              >
                ΕΠΙΚΟΙΝΩΝΙΑ
              </a>
              <a href="#services" className="inline-block bg-[#248BE5] text-white px-6 py-3 text-center font-medium hover:bg-[#0F4C81] transition-colors">
                ΥΠΗΡΕΣΙΕΣ
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative overflow-visible relative z-20">
            <div className="bg-blue-100 absolute top-0 right-0 w-4/5 h-4/5 -z-10 rounded-tl-3xl"></div>
            <animated.div style={truckAnimation} className="relative z-30">
              <img 
                src="https://raw.githubusercontent.com/NasKal/SklavTransport/refs/heads/assets/truck-sklav.svg" 
                alt="Εικόνα φορτηγού μεταφορών" 
                className="w-full h-auto"
              />
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
