import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-b from-cream-light via-cream to-cream-dark/30 relative overflow-hidden"
    >
      {/* Decorative gold vector circles in background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-maroon/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maroon/5 border border-maroon/10 text-maroon text-sm font-semibold tracking-wide font-serif"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              बोलती पुस्तके
            </motion.div>

            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#927334] font-serif text-xl sm:text-2xl italic font-bold tracking-wide mt-2 block"
            >
              "जेव्हा पुस्तके बोलू लागतात.."
            </motion.h2>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-maroon leading-tight"
            >
              मराठी साहित्याचा <br className="hidden sm:inline" />
              <span className="text-charcoal-dark font-extrabold relative">
                निनादणारा सूर
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-gold/30 -z-10 rounded" />
              </span>, <br className="hidden sm:inline" />
              आता प्रत्येक घरात...
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-charcoal-light text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              कथा आणि कादंबऱ्यांच्या ऑडिओबुकच्या माध्यमातून एक सोनेरी प्रवास. महाराष्ट्राचा समृद्ध आणि गौरवशाली साहित्यिक वारसा जपणारा प्रत्येक मराठी मनाचा हक्काचा डिजिटल कट्टा.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <a
                href="https://www.youtube.com/@bolati_pustake?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-maroon hover:bg-maroon-light text-cream font-medium px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-gold/20"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500 fill-red-500 bg-white rounded-full p-0.5">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>युट्युबवर ऐका</span>
              </a>
              <a
                href="#about"
                className="bg-transparent hover:bg-gold/10 text-maroon hover:text-maroon-dark font-medium px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 border-2 border-maroon/20 hover:border-maroon"
              >
                <span>आमच्याविषयी</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Premium Image Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Outer glowing frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gold via-maroon/40 to-gold rounded-[2.5rem] opacity-30 blur-lg animate-pulse" />
              
              {/* Frame Container */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-cream-light p-3 rounded-[2.2rem] shadow-2xl border-2 border-gold/40 overflow-hidden"
              >
                <img
                  src="/hero_illustration.png"
                  alt="बोलती पुस्तके ऑडिओबुक्स"
                  className="w-full h-auto rounded-[1.8rem] border border-gold/20 object-cover aspect-[4/5]"
                />
                
                {/* Floating Sound Waves overlay element */}
                <div className="absolute bottom-6 right-6 bg-maroon/90 backdrop-blur-sm text-cream px-4 py-2 rounded-xl flex items-center gap-2 border border-gold/30 shadow-lg">
                  <div className="flex gap-[3px] items-end h-3">
                    <span className="w-[3px] bg-gold h-2 animate-[pulse_1s_infinite]" />
                    <span className="w-[3px] bg-gold h-3 animate-[pulse_1.2s_infinite_0.2s]" />
                    <span className="w-[3px] bg-gold h-1 animate-[pulse_0.8s_infinite_0.4s]" />
                    <span className="w-[3px] bg-gold h-2.5 animate-[pulse_1.1s_infinite_0.1s]" />
                  </div>
                  <span className="text-xs font-serif tracking-wider font-semibold">अभिवाचन सुरू आहे...</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
