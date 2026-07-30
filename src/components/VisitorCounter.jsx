import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function VisitorCounter({ variant = 'default' }) {
  const [displayCount, setDisplayCount] = useState(0);
  const [activeReaders, setActiveReaders] = useState(12);
  const { lang, t } = useLanguage();

  // Initialize and get visitor count
  useEffect(() => {
    // Determine base visitor count or fetch from localStorage
    const STORAGE_KEY = 'bolati_pustake_visitor_count';
    const baseCount = 287419; // Elegant starting base number of visits
    let count = baseCount;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        count = parseInt(stored, 10);
        if (isNaN(count)) count = baseCount;
      }
      
      // Increment visitor count by 1 for the current session
      count += 1;
      localStorage.setItem(STORAGE_KEY, count.toString());
    } catch (e) {
      console.warn('LocalStorage not available, falling back to static count', e);
    }

    // Micro-animation: Count up from count - 30 to count on load
    const startValue = Math.max(0, count - 30);
    const controls = animate(startValue, count, {
      duration: 2.0,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplayCount(Math.floor(latest));
      },
    });

    // Simulate occasional live reading increases (every 10 seconds)
    const interval = setInterval(() => {
      // Randomly add 1 or 2 new visitors to simulate active browsing
      if (Math.random() > 0.4) {
        setDisplayCount((prev) => {
          const nextVal = prev + Math.floor(Math.random() * 2) + 1;
          try {
            localStorage.setItem(STORAGE_KEY, nextVal.toString());
          } catch (e) {}
          return nextVal;
        });
      }
      // Also update simulated active readers slightly
      setActiveReaders(prev => {
        const diff = Math.floor(Math.random() * 5) - 2; // -2 to +2
        return Math.max(5, Math.min(35, prev + diff));
      });
    }, 10000);

    return () => {
      controls.stop();
      clearInterval(interval);
    };
  }, []);

  // Format integer to Indian style commas (e.g. 2,87,419) and optional Devanagari digits for Marathi
  const formatNumber = (num) => {
    const str = num.toString();
    let lastThree = str.substring(str.length - 3);
    const otherBits = str.substring(0, str.length - 3);
    if (otherBits !== '') {
      lastThree = ',' + lastThree;
    }
    const formatted = otherBits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    if (lang === 'en') return formatted;

    const devanagariDigits = {
      '0': '०', '1': '१', '2': '२', '3': '३', '4': '४',
      '5': '५', '6': '६', '7': '७', '8': '८', '9': '९',
      ',': ','
    };

    return formatted.split('').map(char => devanagariDigits[char] || char).join('');
  };

  const formattedCount = formatNumber(displayCount);
  const formattedActive = formatNumber(activeReaders);

  // Variant 1: Compact/Footer badge (glassmorphic capsule design)
  if (variant === 'compact') {
    return (
      <div className="flex flex-col items-center sm:items-end gap-1.5 text-cream/70">
        <div className="flex items-center gap-2 bg-cream/5 border border-gold-light/20 px-3.5 py-1.5 rounded-full shadow-inner hover:border-gold-light/40 transition-all duration-300">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <span className="text-[11px] font-sans tracking-wide">
            {t('visitorCounter.badgeText')} <strong className="font-serif text-gold-light text-sm font-semibold ml-1">{formattedCount}</strong>
          </span>
        </div>
        <p className="text-[9px] text-cream/40 italic">
          {t('visitorCounter.activeText').replace('{count}', formattedActive)}
        </p>
      </div>
    );
  }

  // Variant 2: Card/Stats component integration (Bold and beautiful)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-cream-light p-6 sm:p-8 rounded-3xl border border-gold/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group hover:border-maroon/20 relative overflow-hidden"
    >
      {/* Subtle decorative background glow */}
      <div className="absolute -right-12 -top-12 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-maroon/5 transition-all duration-500"></div>

      {/* Pulsing indicator & Live badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
        <span className="text-[9px] font-medium text-emerald-700 uppercase tracking-wider">{t('visitorCounter.liveBadge')}</span>
      </div>

      {/* Icon container */}
      <div className="p-4 bg-cream rounded-2xl border border-gold/15 group-hover:bg-gold/10 transition-colors duration-300 mb-5 text-maroon">
        <Users className="w-8 h-8 text-gold-light" />
      </div>

      {/* Number with custom letterspacing & Devanagari/English styling */}
      <div className="mb-2">
        <span className="font-serif text-4xl sm:text-5xl font-extrabold text-maroon block tracking-tight">
          {formattedCount}
        </span>
      </div>

      {/* Label and description */}
      <h3 className="font-serif text-lg font-bold text-charcoal-dark mb-1.5">
        {t('visitorCounter.cardTitle')}
      </h3>
      <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed mb-3">
        {t('visitorCounter.cardDesc')}
      </p>

      {/* Sub-stat showing active readers */}
      <div className="text-[11px] text-maroon bg-maroon/5 border border-maroon/10 rounded-lg py-1 px-3 mt-1 font-sans">
        {t('visitorCounter.activeBadge').replace('{count}', formattedActive)}
      </div>
    </motion.div>
  );
}
