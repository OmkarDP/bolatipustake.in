import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Quote, Headphones } from 'lucide-react';

export default function Literature() {
  const primaryWorks = [
    {
      title: 'उचल्या',
      author: 'लक्ष्मण गायकवाड',
      category: 'आत्मचरित्र',
      desc: 'उपेक्षित, भटक्या आणि विमुक्त समाजाचे जळजळीत सामाजिक वास्तव मांडणारे आणि त्यांच्या वेदनेला वाचा फोडणारे एक अत्यंत प्रभावी, पुरस्कारप्राप्त आत्मचरित्र.',
      tag: 'अस्सल समाजचित्रण',
      link: 'https://youtube.com/playlist?list=PL0tGux3TCZnZbmMlL2fvGeLxN4fWQaVI1&si=PQL-nSUhyCr9vyCz'
    },
    {
      title: 'आक्करमाशी',
      author: 'शरणकुमार लिंबाळे',
      category: 'आत्मचरित्र',
      desc: 'दलित साहित्यातील एक महत्त्वाचा मैलाचा दगड. तीव्र सामाजिक जाणिवा, तीव्र मानवी संघर्ष आणि अस्तित्वाची लढाई मांडणारी दिशादर्शक गाथा.',
      tag: 'संघर्षाची धारदार गाथा',
      link: 'https://youtube.com/playlist?list=PL0tGux3TCZnZpVYYJxivT8gaOj1lUkKTf&si=JmPaqf2DgV3RaHxd'
    },
    {
      title: 'आयदान',
      author: 'उर्मिला पवार',
      category: 'आत्मचरित्र',
      desc: 'दलित स्त्रीचे भावविश्व, तिची सहनशीलता आणि पुरुषप्रधान व जातिप्रधान व्यवस्थेविरुद्ध तिने दिलेला लढा रेखाटणारा एक संवेदनशील जीवनप्रवास.',
      tag: 'स्त्री जाणिवांचा प्रवास',
      link: 'https://youtube.com/playlist?list=PL0tGux3TCZnZIY1ZmlS3fVR6hjQfrzd4Q&si=oV4rOAT6yisUmu3y'
    }
  ];

  const authors = [
    {
      name: 'जयवंत दळवी',
      role: 'अजरामर कादंबरीकार व नाटककार',
      desc: 'मानवी स्वभाव, नात्यांमधील गुंतागुंत आणि सामाजिक व्यंगांवर उपरोधिक शैलीत लिहिणारे मराठीतील दिग्गज साहित्यिक.'
    },
    {
      name: 'ह. मो. मराठे',
      role: 'प्रतिभावंत लेखक व ज्येष्ठ संपादक',
      desc: 'मराठी कथा आणि कादंबरी विश्वात स्वतःची वेगळी शैली निर्माण करणारे, वाचकांच्या मनावर अधिराज्य गाजवणारे लेखक.'
    }
  ];

  return (
    <section id="literature" className="py-12 md:py-16 bg-cream-light relative">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cream to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-serif italic text-lg font-medium block">साहित्य संग्रह</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon">
            आमचे प्रमुख साहित्य आणि लेखक
          </h2>
          <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
            महाराष्ट्राचे विचारविश्व समृद्ध करणाऱ्या काही सुप्रसिद्ध आत्मकथा आणि ज्येष्ठ कथाकारांचे साहित्य
          </p>
          <div className="h-[2px] w-24 bg-gold mx-auto mt-2" />
        </div>

        {/* Featured Books Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {primaryWorks.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream rounded-[2rem] border border-gold/15 shadow-md overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group hover:border-gold"
            >
              <div className="p-6 sm:p-8">
                {/* Book header details */}
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-maroon/5 text-maroon text-xs font-serif font-bold px-3 py-1 rounded-full border border-maroon/10">
                    {work.category}
                  </span>
                  <span className="text-[10px] text-gold font-bold uppercase tracking-widest font-sans">
                    {work.tag}
                  </span>
                </div>

                {/* Book styling layout */}
                <div className="flex gap-4 items-center mb-6">
                  <div className="w-12 h-16 bg-gradient-to-br from-maroon to-maroon-dark rounded shadow-md flex items-center justify-center shrink-0 border-l-[3px] border-gold">
                    <BookOpen className="w-5 h-5 text-cream" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal-dark group-hover:text-maroon transition-colors duration-200">
                      {work.title}
                    </h3>
                    <p className="text-sm font-sans font-bold text-gold-dark mt-0.5">
                      लेखक: {work.author}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {work.desc}
                </p>
              </div>

              {/* Status bar */}
              <div className="bg-cream-dark/20 border-t border-gold/10 px-6 sm:px-8 py-4 flex justify-between items-center text-xs">
                <span className="text-charcoal-light flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                  पूर्ण अभिवाचन उपलब्ध
                </span>
                <a 
                  href={work.link}  
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-maroon hover:text-maroon-dark font-serif font-bold text-sm sm:text-base flex items-center gap-1.5 transition-colors duration-200"
                >
                  <Headphones className="w-4 h-4 shrink-0 text-maroon" />
                  <span>ऐका</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Authors Section */}
        <div className="bg-cream p-6 sm:p-12 rounded-[2.5rem] border border-gold/20 shadow-md">
          <div className="max-w-2xl mb-10">
            <h3 className="font-serif text-2xl font-bold text-maroon mb-2">
              ज्येष्ठ व अभिजात साहित्यिक
            </h3>
            <p className="text-charcoal-light text-sm">
              आमच्या वाहिनीवर इतर अनेक दिग्गज लेखकांचे दर्जेदार साहित्य ऐकायला मिळेल:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {authors.map((author, index) => (
              <motion.div
                key={author.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-cream-light rounded-2xl border border-gold/10 relative"
              >
                <Quote className="absolute top-4 right-4 w-10 h-10 text-gold/15 rotate-180" />
                <h4 className="font-serif text-xl font-bold text-charcoal-dark">
                  {author.name}
                </h4>
                <span className="text-xs text-gold font-bold block mb-3 font-serif italic">
                  {author.role}
                </span>
                <p className="text-charcoal-light text-sm leading-relaxed font-sans">
                  {author.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
