import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "../lib/utils.tsx";
import { Menu, X } from 'lucide-react';
import { useTranslation } from "react-i18next";

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
  const location = useLocation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

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
          <span className="text-gradient">Gabriele Zito</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'font-medium text-sm transition-all duration-200 a-underline',
                location.pathname + location.hash === item.href
                  ? 'text-accent'
                  : 'text-foreground/80 hover:text-foreground'
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Language Switcher */}
        <div className="flex space-x-2 ml-4">
          <button
            className={cn(
              "px-3 py-1 rounded-md text-sm font-medium transition-all duration-200",
              i18n.language === "en"
                ? "bg-accent text-white"
                : "hover:bg-muted text-foreground/80"
            )}
            onClick={() => i18n.changeLanguage("en")}
          >
            🇬🇧 EN
          </button>
          <button
            className={cn(
              "px-3 py-1 rounded-md text-sm font-medium transition-all duration-200",
              i18n.language === "it"
                ? "bg-accent text-white"
                : "hover:bg-muted text-foreground/80"
            )}
            onClick={() => i18n.changeLanguage("it")}
          >
            🇮🇹 IT
          </button>
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

      {/* Mobile menu */ }
  {
    mobileMenuOpen && (
      <div className="md:hidden absolute top-full left-0 right-0 glass-panel animate-slide-down p-4">
        <div className="flex flex-col space-y-4 py-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'px-3 py-2 rounded-md font-medium transition-colors duration-200',
                location.pathname + location.hash === item.href
                  ? 'text-accent bg-accent/10'
                  : 'text-foreground/80 hover:text-foreground hover:bg-muted'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    )
  }
    </nav >
  );
};

export default Navbar;