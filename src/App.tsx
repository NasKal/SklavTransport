import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Statistics from './components/Statistics';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TopBar from './components/TopBar';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <Hero />
      <Statistics />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;