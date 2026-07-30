import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, 
  Home, 
  User, 
  BarChart3, 
  Compass, 
  Target, 
  Award, 
  BookOpen, 
  HandHeart, 
  Phone, 
  FileText, 
  ArrowRight,
  Code,
  Smartphone,
  Eye,
  Server
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Sitemap() {
  const [activeTab, setActiveTab] = useState('visual');
  const { t } = useLanguage();

  const sectionsData = t('sitemap.sections') || {};

  const mainSections = [
    {
      id: 'home',
      name: sectionsData.home?.name || 'मुख्यपृष्ठ',
      icon: <Home className="w-5 h-5" />,
      desc: sectionsData.home?.desc || '',
      details: sectionsData.home?.details || ''
    },
    {
      id: 'about',
      name: sectionsData.about?.name || 'आमच्याविषयी',
      icon: <User className="w-5 h-5" />,
      desc: sectionsData.about?.desc || '',
      details: sectionsData.about?.details || ''
    },
    {
      id: 'stats',
      name: sectionsData.stats?.name || 'आकडेवारी',
      icon: <BarChart3 className="w-5 h-5" />,
      desc: sectionsData.stats?.desc || '',
      details: sectionsData.stats?.details || ''
    },
    {
      id: 'journey',
      name: sectionsData.journey?.name || 'आमचा प्रवास',
      icon: <Compass className="w-5 h-5" />,
      desc: sectionsData.journey?.desc || '',
      details: sectionsData.journey?.details || ''
    },
    {
      id: 'mission',
      name: sectionsData.mission?.name || 'ध्येय आणि उद्दिष्टे',
      icon: <Target className="w-5 h-5" />,
      desc: sectionsData.mission?.desc || '',
      details: sectionsData.mission?.details || ''
    },
    {
      id: 'why-us',
      name: sectionsData.whyUs?.name || 'खासियत',
      icon: <Award className="w-5 h-5" />,
      desc: sectionsData.whyUs?.desc || '',
      details: sectionsData.whyUs?.details || ''
    },
    {
      id: 'literature',
      name: sectionsData.literature?.name || 'साहित्य संग्रह',
      icon: <BookOpen className="w-5 h-5" />,
      desc: sectionsData.literature?.desc || '',
      details: sectionsData.literature?.details || ''
    },
    {
      id: 'support',
      name: sectionsData.support?.name || 'सहभागी व्हा',
      icon: <HandHeart className="w-5 h-5" />,
      desc: sectionsData.support?.desc || '',
      details: sectionsData.support?.details || ''
    },
    {
      id: 'contact',
      name: sectionsData.contact?.name || 'संपर्क',
      icon: <Phone className="w-5 h-5" />,
      desc: sectionsData.contact?.desc || '',
      details: sectionsData.contact?.details || ''
    }
  ];

  const policySectionsRaw = t('sitemap.policies') || [];
  const policySections = policySectionsRaw.map((p, idx) => ({
    id: idx === 0 ? 'privacy' : 'terms',
    name: p.name,
    icon: <FileText className="w-4 h-4" />,
    desc: p.desc
  }));

  const techFeaturesRaw = t('sitemap.techFeatures') || [];
  const techIcons = [
    <Code className="w-6 h-6 text-maroon" />,
    <Smartphone className="w-6 h-6 text-maroon" />,
    <Eye className="w-6 h-6 text-maroon" />,
    <Server className="w-6 h-6 text-maroon" />
  ];
  const techFeatures = techFeaturesRaw.map((tf, idx) => ({
    title: tf.title,
    desc: tf.desc,
    icon: techIcons[idx % techIcons.length]
  }));

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sitemap" className="py-16 md:py-24 bg-cream-light relative overflow-hidden border-t border-gold/20">
      {/* Background traditional elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-maroon/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Decorative divider */}
        <div className="ornamental-line">
          <div className="ornamental-symbol">❈</div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-gold font-serif italic text-lg font-medium block">{t('sitemap.tag')}</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon">
            {t('sitemap.title')}
          </h2>
          <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
            {t('sitemap.subtitle')}
          </p>
          
          {/* Custom Tabs */}
          <div className="inline-flex p-1 bg-cream rounded-full border border-gold/30 mt-4 shadow-inner">
            <button
              onClick={() => setActiveTab('visual')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'visual'
                  ? 'bg-maroon text-cream shadow-md'
                  : 'text-charcoal hover:text-maroon'
              }`}
            >
              <span className="flex items-center gap-2">
                <Network className="w-4 h-4" />
                {t('sitemap.tabVisual')}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'technical'
                  ? 'bg-maroon text-cream shadow-md'
                  : 'text-charcoal hover:text-maroon'
              }`}
            >
              <span className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                {t('sitemap.tabTech')}
              </span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'visual' ? (
            <motion.div
              key="visual-sitemap"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Visual Grid representing Sitemap */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainSections.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    onClick={() => handleScrollTo(item.id)}
                    className="group cursor-pointer bg-cream p-6 rounded-2xl border border-gold/20 shadow-sm hover:shadow-lg hover:border-gold transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-maroon/5 group-hover:bg-maroon group-hover:text-cream text-maroon flex items-center justify-center border border-maroon/10 transition-all duration-300">
                          {item.icon}
                        </div>
                        <h3 className="font-serif text-lg font-bold text-charcoal-dark group-hover:text-maroon transition-colors duration-200">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-gold font-medium text-xs mb-2">
                        {item.desc}
                      </p>
                      <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-1 text-xs font-semibold text-maroon group-hover:text-gold transition-colors duration-200 mt-4 pt-4 border-t border-gold/10">
                      {t('sitemap.visitLink')} <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Policy Section within the map */}
              <div className="bg-cream/50 border border-gold/15 p-6 rounded-3xl mt-8">
                <h4 className="font-serif text-lg font-bold text-maroon mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gold" />
                  {t('sitemap.policyTitle')}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {policySections.map((policy) => (
                    <div
                      key={policy.id}
                      className="p-4 bg-cream rounded-xl border border-gold/10 flex items-start gap-3 hover:border-gold/30 transition-all duration-200"
                    >
                      <div className="p-2 rounded-lg bg-gold/10 text-gold mt-0.5">
                        {policy.icon}
                      </div>
                      <div>
                        <h5 className="font-serif font-bold text-charcoal-dark text-sm sm:text-base">
                          {policy.name}
                        </h5>
                        <p className="text-xs text-charcoal-light mt-1">
                          {policy.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tech-sitemap"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {techFeatures.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-cream p-6 sm:p-8 rounded-3xl border border-gold/15 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gold/30 flex gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-maroon/5 flex items-center justify-center shrink-0 border border-maroon/10">
                    {tech.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-dark">
                      {tech.title}
                    </h3>
                    <p className="text-charcoal-light text-sm leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Tech Spec Box */}
              <div className="md:col-span-2 bg-maroon text-cream p-8 rounded-3xl border border-gold/30 space-y-4">
                <h4 className="font-serif text-xl font-bold text-gold-light">
                  {t('sitemap.techSpecsTitle')}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs sm:text-sm">
                  <div className="border-r border-gold/25 pr-4">
                    <span className="text-gold-light block font-semibold mb-1">Framework</span>
                    <span>React 19 & Vite 8</span>
                  </div>
                  <div className="border-r border-gold/25 pr-4">
                    <span className="text-gold-light block font-semibold mb-1">Styling</span>
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="border-r border-gold/25 pr-4">
                    <span className="text-gold-light block font-semibold mb-1">Animations</span>
                    <span>Framer Motion</span>
                  </div>
                  <div>
                    <span className="text-gold-light block font-semibold mb-1">Icons</span>
                    <span>Lucide React</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
