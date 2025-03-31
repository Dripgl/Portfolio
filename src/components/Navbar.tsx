import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from "../lib/utils.tsx";
import { Menu, X } from 'lucide-react';
import { motion } from "framer-motion";
import "../style/Navbar.css";

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Funzione per lo scroll smooth
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const section = document.querySelector(target) as HTMLElement;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // Offset per la navbar
        behavior: "smooth",
      });
      setActiveSection(target.replace("#", "")); // Setta la sezione attiva
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10 py-4',
        isScrolled ? 'glass-panel' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-xl md:text-2xl font-display font-semibold tracking-tight relative"
        >
          <span className="text-gradient nameNav">Gabriele Zito</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 relative">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={cn(
                'relative font-medium text-sm transition-all duration-200 nameNav',
                activeSection === item.href.replace("#", "")
                  ? 'text-accent'
                  : 'text-foreground/80 hover:text-foreground'
              )}
            >
              {item.name}
              {activeSection === item.href.replace("#", "") && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-accent"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} className="animate-fade-in" />
          ) : (
            <Menu size={24} className="animate-fade-in" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel animate-slide-down p-4">
          <div className="flex flex-col space-y-4 py-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={cn(
                  'px-3 py-2 rounded-md font-medium transition-colors duration-200',
                  activeSection === item.href.replace("#", "")
                    ? 'text-accent bg-accent/10'
                    : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
