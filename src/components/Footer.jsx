import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-maroon-dark text-cream border-t-2 border-gold/40 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2 group w-fit">
            <img 
              src="/logo.png" 
              alt="बोलती पुस्तके लोगो" 
              className="w-10 h-10 object-contain rounded-xl shadow-sm border border-gold/15 group-hover:border-gold/30 transition-all duration-300 bg-cream p-0.5" 
            />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-cream leading-tight tracking-wide">
                  बोलती पुस्तके
                </span>
                <span className="text-[10px] text-gold-light font-medium uppercase tracking-widest leading-none">
                  {t('nav.tagline')}
                </span>
              </div>
            </a>
            <p className="text-cream/80 text-sm max-w-sm leading-relaxed font-sans">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://www.youtube.com/@bolati_pustake?sub_confirmation=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream hover:text-maroon flex items-center justify-center text-cream transition-all duration-300 border border-cream/20"
                title="बोलती पुस्तके युट्युब चॅनेल"
                aria-label="बोलती पुस्तके YouTube Channel"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@bolti_pustake?sub_confirmation=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream hover:text-maroon flex items-center justify-center text-cream transition-all duration-300 border border-cream/20"
                title="साहित्यरत्न युट्युब चॅनेल"
                aria-label="साहित्यरत्न YouTube Channel"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="mailto:mailtodashy@gmail.com"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream hover:text-maroon flex items-center justify-center text-cream transition-all duration-300 border border-cream/20"
                aria-label="Email Us"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919960120521?text=नमस्कार,%20मी%20बोलती%20पुस्तके%20चा%20श्रोता%20आहे." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream hover:text-maroon flex items-center justify-center text-cream transition-all duration-300 border border-cream/20"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-gold border-b border-gold/20 pb-2">
              {t('footer.navTitle')}
            </h3>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <a href="#home" className="hover:text-gold transition-colors duration-200">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors duration-200">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-gold transition-colors duration-200">
                  {t('nav.journey')}
                </a>
              </li>
              <li>
                <a href="#literature" className="hover:text-gold transition-colors duration-200">
                  {t('nav.literature')}
                </a>
              </li>
              <li>
                <a href="#sitemap" className="hover:text-gold transition-colors duration-200">
                  {t('nav.sitemap')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Policy */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-gold border-b border-gold/20 pb-2">
              {t('footer.policyTitle')}
            </h3>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <a href="#privacy" className="hover:text-gold transition-colors duration-200">
                  {t('footer.privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-gold transition-colors duration-200">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors duration-200">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cream/60 text-center gap-4">
          <p>
            &copy; {currentYear} Bolati Pustake (बोलती पुस्तके | bolatipustake.in). {t('footer.rights')}
          </p>
          <p className="font-serif italic text-gold-light">
            {t('footer.founderFooter')}
          </p>
        </div>
      </div>
    </footer>
  );
}
