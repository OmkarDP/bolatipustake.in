import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SupportCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-8 md:py-12 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Maroon banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="maroon-gradient-bg text-cream rounded-[3rem] p-8 sm:p-16 border-2 border-gold relative overflow-hidden shadow-2xl"
        >
          {/* Subtle gold circles in banner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full filter blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-cream/5 rounded-full filter blur-2xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            
            {/* Cultural Heart Handshake Icon */}
            <div className="w-16 h-16 bg-cream/10 rounded-2xl flex items-center justify-center text-gold mx-auto border border-cream/20 shadow-inner">
              <HeartHandshake className="w-9 h-9" />
            </div>

            {/* Poetry Call-out */}
            <div className="space-y-4 font-serif">
              <p className="text-xl sm:text-3xl font-extrabold text-gold tracking-wide italic leading-relaxed">
                {t('supportCTA.quote1')}
              </p>
              <p className="text-xl sm:text-3xl font-extrabold text-gold tracking-wide italic leading-relaxed">
                {t('supportCTA.quote2')}
              </p>
            </div>

            {/* Narrative Appeal */}
            <p className="text-cream/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t('supportCTA.desc')}
            </p>

            {/* Subscribe CTA Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 max-w-3xl mx-auto">
              {/* Channel 1: बोलती पुस्तके */}
              <div className="bg-cream/5 backdrop-blur-sm p-6 rounded-3xl border border-cream/15 flex flex-col justify-between items-center text-center hover:border-gold/30 transition-colors duration-300">
                <div>
                  <h4 className="font-serif text-xl font-bold text-gold mb-2">{t('supportCTA.ch1Title')}</h4>
                  <p className="text-cream/80 text-xs sm:text-sm mb-6 leading-relaxed">
                    {t('supportCTA.ch1Desc')}
                  </p>
                </div>
                <a
                  href="https://www.youtube.com/@bolati_pustake?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-cream hover:bg-cream-light text-maroon hover:text-maroon-dark font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md border border-gold text-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-600 fill-red-600">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>{t('supportCTA.subBtn')}</span>
                </a>
              </div>

              {/* Channel 2: साहित्यरत्न */}
              <div className="bg-cream/5 backdrop-blur-sm p-6 rounded-3xl border border-cream/15 flex flex-col justify-between items-center text-center hover:border-gold/30 transition-colors duration-300">
                <div>
                  <h4 className="font-serif text-xl font-bold text-gold mb-2">{t('supportCTA.ch2Title')}</h4>
                  <p className="text-cream/80 text-xs sm:text-sm mb-6 leading-relaxed">
                    {t('supportCTA.ch2Desc')}
                  </p>
                </div>
                <a
                  href="https://www.youtube.com/@bolti_pustake?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-transparent hover:bg-cream/10 text-cream font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm border border-cream/30 hover:border-cream text-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500 fill-red-500 bg-white rounded-full p-0.5">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>{t('supportCTA.subBtn')}</span>
                </a>
              </div>
            </div>
            
            <p className="text-xs text-cream/70 italic pt-6">
              {t('supportCTA.freeNote')}
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
