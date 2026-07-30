import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircleHeart, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-12 md:py-16 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Decorative divider ornament with Framer Motion Book Opening */}
        <div className="ornamental-line">
          <div className="w-16 h-16 -my-4 mx-2 flex items-center justify-center shrink-0 text-gold">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-8 h-8"
            >
              {/* Central Spine */}
              <line x1="12" y1="5" x2="12" y2="19" className="stroke-gold" />
              
              {/* Left Page (morphing path) */}
              <motion.path 
                d="M12 5C9.5 5 5 7.5 5 19C7.5 19 12 17 12 17"
                animate={{ 
                  d: [
                    "M12 5C12 5 12 5 12 19C12 19 12 17 12 17", // Closed
                    "M12 5C9.5 5 5 7.5 5 19C7.5 19 12 17 12 17", // Open
                  ]
                }}
                transition={{ 
                  duration: 2.2, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  ease: "easeInOut" 
                }}
                className="stroke-gold fill-maroon/5"
              />
              
              {/* Right Page (morphing path) */}
              <motion.path 
                d="M12 5C14.5 5 19 7.5 19 19C16.5 19 12 17 12 17"
                animate={{ 
                  d: [
                    "M12 5C12 5 12 5 12 19C12 19 12 17 12 17", // Closed
                    "M12 5C14.5 5 19 7.5 19 19C16.5 19 12 17 12 17", // Open
                  ]
                }}
                transition={{ 
                  duration: 2.2, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  ease: "easeInOut",
                  delay: 0.1
                }}
                className="stroke-gold fill-maroon/5"
              />
            </svg>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Heading and Background Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="text-gold font-serif italic text-lg font-medium block">{t('about.storyTag')}</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon">
                {t('about.title')}
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-charcoal-light leading-relaxed text-base sm:text-lg">
              {t('about.p1')}
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-charcoal-light leading-relaxed text-base">
              {t('about.p2')}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 bg-cream-light rounded-2xl border border-gold/10">
                <Users className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-maroon text-sm">{t('about.inclusiveTitle')}</h4>
                  <p className="text-xs text-charcoal-light mt-1">{t('about.inclusiveDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream-light rounded-2xl border border-gold/10">
                <MessageCircleHeart className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-maroon text-sm">{t('about.emotionalTitle')}</h4>
                  <p className="text-xs text-charcoal-light mt-1">{t('about.emotionalDesc')}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Portrait and Inspiration Quote */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Framed Portrait */}
            <motion.div 
              variants={itemVariants}
              className="relative bg-cream-light p-4 rounded-[2.5rem] border border-gold/25 shadow-xl max-w-sm mx-auto lg:ml-auto lg:mr-0"
            >
              {/* Traditional Vintage Frame Inner dashed border */}
              <div className="absolute inset-2 border border-dashed border-gold/40 rounded-[2rem] pointer-events-none" />
              
              <div className="relative rounded-[1.8rem] overflow-hidden aspect-[4/5] border border-gold/15 bg-maroon/5 shadow-inner">
                <img 
                  src="/portrait.png" 
                  alt="दशरथ पाटील - संस्थापक व अभिवाचक" 
                  className="w-full h-full object-cover transition-all duration-700 transform hover:scale-105 hover:rotate-1"
                />
                
                {/* Shading overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Founder Info Overlay */}
                <div className="absolute bottom-5 left-5 right-5 text-cream space-y-1">
                  <h4 className="font-serif text-2xl font-bold drop-shadow-md">{t('about.founderName')}</h4>
                  <p className="text-xs text-gold font-serif italic tracking-wide uppercase drop-shadow-sm">
                    {t('about.founderRole')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Inspiration Quote */}
            <motion.div 
              variants={itemVariants}
              className="bg-cream-light p-6 sm:p-8 rounded-[2.5rem] shadow-lg border-l-4 border-maroon relative overflow-hidden"
            >
              {/* Artistic quotation mark icon */}
              <span className="absolute -top-6 -right-6 text-[10rem] font-serif text-gold/10 leading-none pointer-events-none select-none">
                “
              </span>
              
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-serif font-semibold">
                  <Star className="w-3.5 h-3.5 fill-gold" />
                  {t('about.inspirationTag')}
                </div>
                
                <blockquote className="font-serif text-lg sm:text-xl text-charcoal-dark italic leading-relaxed font-medium">
                  {t('about.quote')}
                </blockquote>
                
                <div className="border-t border-gold/20 pt-4">
                  <p className="text-sm font-sans font-bold text-maroon">
                    {t('about.quoteAuthor')}
                  </p>
                  <p className="text-xs text-charcoal-light mt-1">
                    {t('about.quoteSub')}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
