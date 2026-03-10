import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 ease-in-out py-6 px-4">
      <div className={`max-w-4xl mx-auto transition-all duration-500 rounded-full px-6 py-3 flex justify-between items-center ${
        isScrolled ? 'glass-navbar shadow-2xl border-white/10' : 'bg-transparent border-transparent'
      }`}>
        {/* Logo */}
        <a
          onClick={() => handleScrollToSection('home')}
          className="text-xl font-space font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="Home"
        >
          Sam.dev
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              onClick={() => handleScrollToSection(link.href)}
              className={`text-sm font-medium transition-all duration-300 cursor-pointer hover:text-cyan-400 ${
                activeSection === link.href ? 'text-cyan-400' : 'text-white/60'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white/80 focus:outline-none" aria-label="Toggle menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden mt-4 mx-auto max-w-[90%] glass-navbar rounded-2xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col items-center space-y-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                onClick={() => handleScrollToSection(link.href)}
                className={`text-lg font-medium transition-colors ${
                  activeSection === link.href ? 'text-cyan-400' : 'text-white/60'
                }`}
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