import React, { useState } from 'react';
import { Mail, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('https://automation.mysamvedana.org/webhook/bolati-pustake-web', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-serif italic text-lg font-medium block">{t('contact.tag')}</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon">
            {t('contact.title')}
          </h2>
          <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
            {t('contact.subtitle')}
          </p>
          <div className="h-[2px] w-24 bg-gold mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-maroon mb-6">
              {t('contact.infoTitle')}
            </h3>

            {/* Email */}
            <a 
              href="mailto:mailtodashy@gmail.com"
              className="flex gap-4 p-6 bg-cream-light rounded-2xl border border-gold/10 shadow-sm hover:border-maroon/20 hover:shadow-md transition-all duration-300 block"
            >
              <div className="w-10 h-10 rounded-xl bg-maroon/5 flex items-center justify-center text-maroon shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-charcoal-dark text-sm">{t('contact.emailLabel')}</h4>
                <p className="text-xs sm:text-sm text-charcoal-light font-sans mt-1">
                  mailtodashy@gmail.com
                </p>
              </div>
            </a>

            {/* Phone / Whatsapp */}
            <a 
              href="https://wa.me/919960120521?text=नमस्कार,%20मी%20बोलती%20पुस्तके%20चा%20श्रोता%20आहे." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex gap-4 p-6 bg-cream-light rounded-2xl border border-gold/10 shadow-sm hover:border-maroon/20 hover:shadow-md transition-all duration-300 block"
            >
              <div className="w-10 h-10 rounded-xl bg-maroon/5 flex items-center justify-center text-maroon shrink-0">
                <MessageCircle className="w-5 h-5 text-green-600 fill-green-100" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-charcoal-dark text-sm">{t('contact.phoneLabel')}</h4>
                <p className="text-xs sm:text-sm text-charcoal-light font-sans mt-1 font-bold">
                  +९१ ९९६०१२०५२१
                </p>
                <span className="text-[10px] text-gold font-bold">{t('contact.clickToChat')}</span>
              </div>
            </a>

            {/* Contact Person Details */}
            <div className="p-6 bg-maroon/5 rounded-2xl border border-maroon/10">
              <h4 className="font-serif font-bold text-maroon text-base">दशरथ पाटील</h4>
              <p className="text-xs text-charcoal-light italic font-serif">
                {t('contact.founderRole')}
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-cream-light p-6 sm:p-10 rounded-[2.5rem] border border-gold/15 shadow-md">
              <h3 className="font-serif text-2xl font-bold text-charcoal-dark mb-6">
                {t('contact.formTitle')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-serif font-bold text-charcoal-dark">
                      {t('contact.nameLabel')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.namePlaceholder')}
                      className="w-full bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-maroon transition-colors"
                    />
                  </div>
                  
                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-serif font-bold text-charcoal-dark">
                      {t('contact.phoneInputLabel')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.phonePlaceholder')}
                      className="w-full bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-maroon transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-serif font-bold text-charcoal-dark">
                      {t('contact.emailInputLabel')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.emailPlaceholder')}
                      className="w-full bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-maroon transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-serif font-bold text-charcoal-dark">
                      {t('contact.subjectLabel')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.subjectPlaceholder')}
                      className="w-full bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-maroon transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-serif font-bold text-charcoal-dark">
                    {t('contact.messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-maroon transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-maroon hover:bg-maroon-light disabled:bg-maroon/60 text-cream font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md border border-gold/15 cursor-pointer"
                >
                  {loading ? (
                    <span>{t('contact.sending')}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t('contact.sendBtn')}</span>
                    </>
                  )}
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-50 text-green-800 text-xs font-semibold text-center rounded-xl border border-green-200"
                  >
                    {t('contact.successMsg')}
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-50 text-red-800 text-xs font-semibold text-center rounded-xl border border-red-200"
                  >
                    {t('contact.errorMsg')}
                  </motion.div>
                )}
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
