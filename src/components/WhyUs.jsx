import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Heart, Landmark, Accessibility } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      title: 'अस्सल व भावपूर्ण अभिवाचन',
      description: 'दशरथ पाटील यांच्या भारदस्त, स्पष्ट आणि भावनाप्रधान आवाजात प्रत्येक व्यक्तिरेखा जिवंत होते, ज्यामुळे श्रोते थेट कथेशी जोडले जातात.',
      icon: <Headphones className="w-6 h-6 text-maroon" />
    },
    {
      title: 'ग्रामीण व बोलीभाषेचा आदर',
      description: 'अस्सल मातीतील मराठी आणि ग्रामीण बोली भाषेतील साहित्य ऐकवण्यावर आमचा विशेष भर असतो, ज्याला श्रोत्यांचा उदंड प्रतिसाद मिळतो.',
      icon: <Heart className="w-6 h-6 text-maroon" />
    },
    {
      title: 'सांस्कृतिक वारशाचे जतन',
      description: 'काळाच्या ओघात विस्मरणात गेलेल्या जुन्या दर्जेदार कथा आणि दुर्मिळ कादंबऱ्या ऑडिओ स्वरूपात आणून आम्ही भाषेचा ऐतिहासिक ठेवा जपतो.',
      icon: <Landmark className="w-6 h-6 text-maroon" />
    },
    {
      title: 'दृष्टिहीन बांधवांसाठी उपयुक्त',
      description: 'वाचण्याची क्षमता नसलेल्या आणि अंध साहित्यप्रेमी मित्रांना समृद्ध मराठी साहित्य सहज ऐकता यावे यासाठी आमचे व्यासपीठ पूर्णपणे समर्पित आहे.',
      icon: <Accessibility className="w-6 h-6 text-maroon" />
    }
  ];

  return (
    <section className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-serif italic text-lg font-medium block">खासियत</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon">
            बोलती पुस्तके का निवडावीत?
          </h2>
          <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
            साहित्याची गोडी वाढवणारे आणि प्रत्येकाला सामावून घेणारे आमचे प्रमुख गुणविशेष.
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
