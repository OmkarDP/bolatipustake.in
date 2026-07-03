import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircleHeart, Users } from 'lucide-react';

export default function About() {
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
    <section id="about" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Decorative divider ornament */}
        <div className="ornamental-line">
          <span className="ornamental-symbol">❦</span>
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
              <span className="text-gold font-serif italic text-lg font-medium block">आमची कहाणी</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon">
                साहित्याचा नवा प्रकाश
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-charcoal-light leading-relaxed text-base sm:text-lg">
              कोरोनाच्या लॉकडाऊनच्या कठीण आणि एकाकी काळात **बोलती पुस्तके** या YouTube वाहिनीची सुरुवात झाली. हा केवळ एक तांत्रिक उपक्रम नाही, तर मराठी साहित्यप्रेमींना आणि मातृभाषेचा वारसा जपणाऱ्यांना जोडणारा एक नितांत भावनिक पूल आहे.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-charcoal-light leading-relaxed text-base">
              घरातील कोंडलेल्या वातावरणात साहित्याचा गारवा घेऊन आम्ही आलो आणि पाहता पाहता हजारो मराठी मनांना आमचा आवाज आपलासा वाटू लागला. आज विविध वयोगटांतील आणि स्तरांतील लोक आमच्याशी जोडले गेले आहेत.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 bg-cream-light rounded-2xl border border-gold/10">
                <Users className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-maroon text-sm">सर्वसमावेशक समाज</h4>
                  <p className="text-xs text-charcoal-light mt-1">शेतकरी, गृहिणी, जवान आणि विद्यार्थ्यांचे हक्काचे विचारपीठ.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream-light rounded-2xl border border-gold/10">
                <MessageCircleHeart className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-maroon text-sm">भावनिक बांधिलकी</h4>
                  <p className="text-xs text-charcoal-light mt-1">अभिवाचनातून निर्माण होणारे श्रोते आणि लेखकांमधील अतूट नाते.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key Inspiration Quote (The Turning Point) */}
          <div className="lg:col-span-6">
            <motion.div 
              variants={itemVariants}
              className="bg-cream-light p-6 sm:p-10 rounded-[2.5rem] shadow-xl border-l-4 border-maroon relative overflow-hidden"
            >
              {/* Artistic quotation mark icon */}
              <span className="absolute -top-6 -right-6 text-[10rem] font-serif text-gold/10 leading-none pointer-events-none select-none">
                “
              </span>
              
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-serif font-semibold">
                  <Star className="w-3.5 h-3.5 fill-gold" />
                  प्रेरणादायी क्षण
                </div>
                
                <blockquote className="font-serif text-xl sm:text-2xl text-charcoal-dark italic leading-relaxed font-medium">
                  “अभिवाचन खूप सुंदर आहे! तुमच्या या प्रयत्नांमुळे आमच्यासारख्या अंध आणि वाचू न शकणाऱ्या लोकांसाठी मराठी साहित्याचा सुवर्ण खजिना कायमचा खुला झाला आहे...”
                </blockquote>
                
                <div className="border-t border-gold/20 pt-4">
                  <p className="text-sm font-sans font-bold text-maroon">
                    — अंध आणि वाचक मित्रमैत्रिणींचे पहिले फोन कॉल्स
                  </p>
                  <p className="text-xs text-charcoal-light mt-1">
                    ज्या क्षणाने आमच्या प्रवासाची खऱ्या अर्थाने दिशा निश्चित केली.
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
