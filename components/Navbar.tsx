import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // State to manage active link

  // Handle scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'));
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
      setActiveSection(id); // Set active section on click
    }
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  const navClasses = `fixed w-full z-50 transition-all duration-300 ease-in-out py-4 px-4 md:px-8 lg:px-12 ${
    isScrolled ? 'bg-gray-800 bg-opacity-90 shadow-lg' : 'bg-transparent'
  }`;

  return (
    <nav
      className={navClasses}
      // Removed Framer Motion initial and animate props
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo/Name - Uses vanilla JS for smooth transition to home */}
        <a
          onClick={() => handleScrollToSection('home')}
          className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors cursor-pointer"
          aria-label="Home"
        >
          Sam.dev
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              onClick={() => handleScrollToSection(link.href)}
              className={`hover:text-green-400 transition-colors duration-300 font-medium text-lg cursor-pointer navbar-link ${activeSection === link.href ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-100 focus:outline-none" aria-label="Toggle navigation menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {/* Removed AnimatePresence and motion.div */}
      {isOpen && (
          <div
            className="md:hidden bg-gray-800 bg-opacity-95 absolute top-full left-0 w-full shadow-lg pb-4"
          >
            <div className="flex flex-col items-center space-y-4 pt-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  onClick={() => handleScrollToSection(link.href)}
                  className={`hover:text-green-400 transition-colors duration-300 font-medium text-lg cursor-pointer navbar-link ${activeSection === link.href ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;