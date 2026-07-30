import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Heart, Landmark, Accessibility } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhyUs() {
  const { t } = useLanguage();

  const rawFeatures = t('whyUs.features') || [];
  const icons = [
    <Headphones className="w-6 h-6 text-maroon" />,
    <Heart className="w-6 h-6 text-maroon" />,
    <Landmark className="w-6 h-6 text-maroon" />,
    <Accessibility className="w-6 h-6 text-maroon" />
  ];

  const features = rawFeatures.map((f, idx) => ({
    ...f,
    icon: icons[idx % icons.length]
  }));

  return (
    <section className="py-12 md:py-16 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-serif italic text-lg font-medium block">{t('whyUs.tag')}</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon">
            {t('whyUs.title')}
          </h2>
          <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
            {t('whyUs.subtitle')}
          </p>
          <div className="h-[2px] w-24 bg-gold mx-auto mt-2" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 p-6 sm:p-8 bg-cream-light rounded-3xl border border-gold/15 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gold/30"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-maroon/5 flex items-center justify-center shrink-0 border border-maroon/10">
                {feature.icon}
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-dark">
                  {feature.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
