import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, Award, ArrowUpRight } from 'lucide-react';

export default function Journey() {
  const steps = [
    {
      year: '२०२०',
      title: 'चळवळीची सुरुवात (लॉकडाऊन)',
      description: 'कोरोना टाळेबंदीच्या कठीण दिवसांमध्ये नैराश्यावर मात करण्यासाठी आणि मराठी साहित्याचा गोडवा घराघरांमध्ये पोहोचवण्यासाठी YouTube चॅनलची स्थापना करण्यात आली.',
      icon: <Calendar className="w-5 h-5 text-cream" />,
      color: 'bg-maroon'
    },
    {
      year: '२०२१',
      title: 'प्रेरणादायी वळण',
      description: 'काही अशिक्षित आणि दृष्टिहीन बांधवांनी आवर्जून फोन करून अभिवाचनाचे कौतुक केले. “तुमच्या आवाजामुळे साहित्याचा खजिना खुला झाला” या शब्दांनी आम्हाला आमचे जीवनध्येय दिले.',
      icon: <Heart className="w-5 h-5 text-cream" />,
      color: 'bg-gold'
    },
    {
      year: '२०२२ - २०२३',
      title: 'सर्वसमावेशक विस्तार',
      description: 'शेतकरी, गृहिणी, कार्यालयात जाणारे कर्मचारी, देशाचे रक्षण करणारे वीर जवान अशा सर्व थरांतील रसिक श्रोते जोडले गेले. ३०० पेक्षा अधिक कादंबऱ्यांचे अभिवाचन वाहिनीवर उपलब्ध झाले.',
      icon: <Award className="w-5 h-5 text-cream" />,
      color: 'bg-maroon'
    },
    {
      year: '२०२४ - २०२६ (स्वप्न)',
      title: 'स्वतंत्र ऑडिओबुक ॲप',
      description: 'लेखक आणि प्रकाशकांच्या अधिकारांचा व रॉयल्टीचा सन्मान ठेवून, व्यावसायिक पातळीवर एक अद्ययावत मराठी ऑडिओबुक डिजिटल ॲप विकसित करण्याचा संकल्प.',
      icon: <ArrowUpRight className="w-5 h-5 text-cream" />,
      color: 'bg-gold'
    }
  ];

  return (
    <section id="journey" className="py-24 bg-cream-light relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cream to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-serif italic text-lg font-medium block">कालक्रम</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon">
            आमचा प्रवास आणि ध्यास
          </h2>
          <div className="h-[2px] w-24 bg-gold mx-auto mt-2" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gold/30 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={step.year} 
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Point */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md border-2 border-cream ${step.color}`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Spacer Column for desktop layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="bg-cream p-6 sm:p-8 rounded-3xl shadow-md border border-gold/10 relative hover:shadow-lg transition-all duration-300 group"
                    >
                      {/* Decorative small arrow for card */}
                      <div className={`hidden md:block absolute top-8 w-3 h-3 bg-cream border-t border-l border-gold/10 rotate-45 ${
                        isEven ? 'right-full -mr-1.5' : 'left-full -ml-1.5 rotate-[225deg]'
                      }`} />

                      <span className="font-serif text-2xl font-bold text-gold block mb-1">
                        {step.year}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-maroon mb-3 group-hover:text-maroon-light transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
