import React, { useState, useEffect } from 'react';
import { Truck, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href !== '#') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Truck className="h-8 w-8 text-[#248BE5] mr-2" />
          <span className="text-xl font-bold">ΣΚΛΑΒΕΝΙΤΗΣ</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#" onClick={handleNavClick} className="text-[#248BE5] font-medium">ΑΡΧΙΚΗ</a>
          <a href="#services" onClick={handleNavClick} className="text-gray-700 hover:text-[#248BE5] transition-colors">ΥΠΗΡΕΣΙΕΣ</a>
          <a href="#about" onClick={handleNavClick} className="text-gray-700 hover:text-[#248BE5] transition-colors">ΣΧΕΤΙΚΑ</a>
          <a href="#contact" onClick={handleNavClick} className="text-gray-700 hover:text-[#248BE5] transition-colors">ΕΠΙΚΟΙΝΩΝΙΑ</a>

        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <a href="#" onClick={handleNavClick} className="text-[#248BE5] font-medium py-2 border-b border-gray-100">Αρχική</a>
            <a href="#services" onClick={handleNavClick} className="text-gray-700 py-2 border-b border-gray-100">Υπηρεσίες</a>
            <a href="#about" onClick={handleNavClick} className="text-gray-700 py-2 border-b border-gray-100">Σχετικά</a>
            <a href="#contact" onClick={handleNavClick} className="text-gray-700 py-2 border-b border-gray-100">Επικοινωνία</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
