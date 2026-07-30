import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.journey'), href: '#journey' },
    { name: t('nav.literature'), href: '#literature' },
    { name: t('nav.mission'), href: '#mission' },
    { name: t('nav.contact'), href: '#contact' },
    { name: t('nav.sitemap'), href: '#sitemap' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cream-light/95 backdrop-blur-md shadow-md py-2 md:py-3 border-b border-gold/20' 
          : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <img 
              src="/logo.png" 
              alt="Bolati Pustake - बोलती पुस्तके Logo" 
              className="w-10 h-10 object-contain rounded-xl shadow-sm border border-gold/10 group-hover:border-gold/30 transition-all duration-300 bg-cream p-0.5" 
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold text-maroon leading-tight tracking-wide">
                 बोलती पुस्तके
              </span>
              <span className="text-[10px] sm:text-xs text-gold font-medium uppercase tracking-widest leading-none">
                {t('nav.tagline')}
              </span>
            </div>
          </a>

          {/* Desktop Navigation & Compact Language Toggle */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-medium text-charcoal hover:text-maroon transition-colors duration-200 text-sm lg:text-base relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:height-[2px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Compact Top Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center p-0.5 rounded-full bg-cream border border-gold/40 shadow-sm hover:border-maroon/40 transition-all duration-300 cursor-pointer"
              title={lang === 'mr' ? 'Switch to English' : 'मराठीमध्ये बदला'}
              aria-label="Toggle Language"
            >
              <span className={`px-2 py-0.5 rounded-full text-xs font-serif transition-all duration-300 ${lang === 'mr' ? 'bg-maroon text-cream font-bold shadow-xs' : 'text-charcoal-light hover:text-maroon'}`}>
                म
              </span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-sans transition-all duration-300 ${lang === 'en' ? 'bg-maroon text-cream font-bold shadow-xs' : 'text-charcoal-light hover:text-maroon'}`}>
                EN
              </span>
            </button>

            <a
              href="#contact"
              className="bg-maroon hover:bg-maroon-light text-cream px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-sm border border-gold/10 hover:shadow-md"
            >
              {t('nav.cta')}
            </a>
          </div>

          {/* Mobile Right Bar: Language Toggle + Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center p-0.5 rounded-full bg-cream border border-gold/40 shadow-sm transition-all duration-300 cursor-pointer"
              title={lang === 'mr' ? 'Switch to English' : 'मराठीमध्ये बदला'}
              aria-label="Toggle Language"
            >
              <span className={`px-2 py-0.5 rounded-full text-xs font-serif transition-all duration-300 ${lang === 'mr' ? 'bg-maroon text-cream font-bold shadow-xs' : 'text-charcoal-light'}`}>
                म
              </span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-sans transition-all duration-300 ${lang === 'en' ? 'bg-maroon text-cream font-bold shadow-xs' : 'text-charcoal-light'}`}>
                EN
              </span>
            </button>

            <button
              onClick={toggleMenu}
              className="text-charcoal hover:text-maroon focus:outline-none p-2 rounded-lg"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cream border-b border-gold/20 shadow-inner overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-lg text-base font-medium text-charcoal hover:bg-gold/10 hover:text-maroon transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 px-3 space-y-3">
                <a
                  href="https://www.youtube.com/@bolati_pustake?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-maroon hover:bg-maroon-light text-cream py-2.5 rounded-full font-medium text-sm transition-all duration-300 border border-gold/15"
                >
                  {t('nav.channel1')}
                </a>
                <a
                  href="https://www.youtube.com/@bolti_pustake?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-transparent hover:bg-gold/15 text-maroon hover:text-maroon-dark py-2.5 rounded-full font-medium text-sm transition-all duration-300 border border-maroon/30 hover:border-maroon"
                >
                  {t('nav.channel2')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
