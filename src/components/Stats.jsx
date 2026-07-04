import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Mic, Heart, PenTool } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      num: '३००+',
      label: 'मराठी कादंबऱ्यांचे अभिवाचन',
      desc: 'प्रदीर्घ आणि सुप्रसिद्ध कादंबऱ्या श्रोत्यांसाठी ऑडिओ स्वरूपात.',
      icon: <BookOpen className="w-8 h-8 text-gold" />
    },
    {
      num: '५०००+',
      label: 'कथांचे दर्जेदार वाचन',
      desc: 'लघुकथा, सामाजिक कथा आणि ललित लेख यांचा समावेश.',
      icon: <Mic className="w-8 h-8 text-gold" />
    },
    {
      num: 'लाखो',
      label: 'सदाबहार रसिक श्रोते',
      desc: 'जगभरातील मराठी मनांना साहित्याशी जोडणारे अथांग व्यासपीठ.',
      icon: <Heart className="w-8 h-8 text-gold" />
    },
    {
      num: 'अनेक',
      label: 'प्रतिष्ठित लेखक व प्रकाशक',
      desc: 'अभिजात आणि ज्येष्ठ लेखकांपासून ते नवोदित साहित्यिकांपर्यंत.',
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

              {/* Number in Devanagari */}
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
      </div>
    </section>
  );
}
