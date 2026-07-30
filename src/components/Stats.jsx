import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Mic, Heart, PenTool } from 'lucide-react';
import VisitorCounter from './VisitorCounter';
import { useLanguage } from '../context/LanguageContext';

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    {
      num: t('stats.stat1Num'),
      label: t('stats.stat1Label'),
      desc: t('stats.stat1Desc'),
      icon: <BookOpen className="w-8 h-8 text-gold" />
    },
    {
      num: t('stats.stat2Num'),
      label: t('stats.stat2Label'),
      desc: t('stats.stat2Desc'),
      icon: <Mic className="w-8 h-8 text-gold" />
    },
    {
      num: t('stats.stat3Num'),
      label: t('stats.stat3Label'),
      desc: t('stats.stat3Desc'),
      icon: <Heart className="w-8 h-8 text-gold" />
    },
    {
      num: t('stats.stat4Num'),
      label: t('stats.stat4Label'),
      desc: t('stats.stat4Desc'),
      icon: <PenTool className="w-8 h-8 text-gold" />
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream-light p-6 sm:p-8 rounded-3xl border border-gold/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group hover:border-maroon/20"
            >
              {/* Icon container */}
              <div className="p-4 bg-cream rounded-2xl border border-gold/10 group-hover:bg-gold/10 transition-colors duration-300 mb-5">
                {stat.icon}
              </div>

              {/* Number */}
              <span className="font-serif text-4xl sm:text-5xl font-extrabold text-maroon block mb-2 tracking-tight">
                {stat.num}
              </span>

              {/* Label and description */}
              <h3 className="font-serif text-lg font-bold text-charcoal-dark mb-2">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Website Visitor Count Section */}
        <div className="mt-12 max-w-md mx-auto">
          <VisitorCounter />
        </div>
      </div>
    </section>
  );
}
