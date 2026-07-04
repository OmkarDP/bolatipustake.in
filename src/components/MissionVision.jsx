import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <section id="mission" className="py-12 md:py-16 bg-cream-light relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-maroon/5 rounded-full filter blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-60 h-60 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-serif italic text-lg font-medium block">उद्दिष्ट्ये</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon">
            ध्येय आणि संकल्पना
          </h2>
          <div className="h-[2px] w-24 bg-gold mx-auto mt-2" />
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cream p-6 sm:p-12 rounded-[2.5rem] shadow-md border-t-4 border-maroon hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-maroon/10 rounded-2xl flex items-center justify-center text-maroon mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-maroon mb-4">
                आमचे ध्येय (Mission)
              </h3>
              <p className="text-charcoal-light leading-relaxed text-base sm:text-lg">
                दर्जेदार मराठी साहित्याची आणि बोलीभाषेची गोडी तरुण पिढीमध्ये रुजवणे. काळाच्या ओघात विस्मरणात चाललेला हा अभिजात ठेवा डिजिटल ऑडिओबुक्सच्या स्वरूपात जागतिक पातळीवर प्रत्येक मराठी घरापर्यंत सहज आणि विनामूल्य उपलब्ध करून देणे.
              </p>
            </div>
            <div className="border-t border-gold/20 pt-6 mt-8 flex items-center gap-2 text-xs font-serif text-gold font-bold">
              <span>भाषा समृद्धी हाच आमचा ध्यास</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cream p-6 sm:p-12 rounded-[2.5rem] shadow-md border-t-4 border-gold hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gold-dark mb-4">
                आमचे स्वप्न (Vision)
              </h3>
              <p className="text-charcoal-light leading-relaxed text-base sm:text-lg">
                लेखक, प्रकाशक आणि श्रोते यांना जोडणारी एक अद्ययावत मराठी ऑडिओबुक डिजिटल परिसंस्था (App) उभी करणे. याद्वारे लेखकांच्या हक्कांचे व रॉयल्टीचे सन्मानपूर्वक संरक्षण करून मराठी साहित्याला व्यावसायिकदृष्ट्या सक्षम करणे.
              </p>
            </div>
            <div className="border-t border-gold/20 pt-6 mt-8 flex items-center gap-2 text-xs font-serif text-maroon font-bold">
              <span>डिजिटल युगात मराठी साहित्याचा गौरव</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
