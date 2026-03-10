import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionWrapper from './SectionWrapper';
import Button from './Button';
import SocialIcons from './SocialIcons';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitStatus('submitting');
      try {
        await emailjs.send(
          'service_qdjnqj2',      
          'template_yubw07m',     
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date().toLocaleString('en-IN', { 
              timeZone: 'Asia/Kolkata',
              dateStyle: 'medium',
              timeStyle: 'short'
            }),
          },
          'hmEAITUgfzZIKoQF2'
        );
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } catch (error) {
        console.error('EmailJS Error:', error);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    }
  };

  const inputClasses = "w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 text-white transition-all outline-none placeholder:text-white/20";
  const labelClasses = "block text-white/40 text-xs font-space font-bold uppercase tracking-wider mb-2 ml-1";

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto py-10">
        {/* Contact Form */}
        <div className="glass-card p-8 md:p-10 border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-violet-600 opacity-30 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-2xl font-space font-bold text-white mb-8">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={labelClasses}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.name ? 'border-red-500/50' : ''}`}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.email ? 'border-red-500/50' : ''}`}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className={labelClasses}>Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                className={`${inputClasses} resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                required
              ></textarea>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Button type="submit" variant="primary" className="w-full" disabled={submitStatus === 'submitting'}>
                {submitStatus === 'submitting' ? 'Transmitting...' : 'Send Message'}
              </Button>
              {submitStatus === 'success' && (
                <p className="text-cyan-400 text-sm animate-pulse">Message dispatched successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm">Transmission failed. Please retry.</p>
              )}
            </div>
          </form>
        </div>

        {/* Info & Socials */}
        <div className="flex flex-col gap-8">
          <div className="glass-card p-8 border-white/10 flex-grow">
            <h3 className="text-2xl font-space font-bold text-white mb-8">Direct Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group/item">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover/item:bg-cyan-500 group-hover/item:text-midnight transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-space font-bold text-white/30 uppercase tracking-widest mb-1">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg text-white/70 hover:text-cyan-400 transition-colors">{CONTACT_INFO.email}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group/item">
                <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 group-hover/item:bg-violet-500 group-hover/item:text-midnight transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-space font-bold text-white/30 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg text-white/70">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/5">
              <h3 className="text-xl font-space font-bold text-white mb-6 text-center lg:text-left">Social Nexus</h3>
              <SocialIcons links={SOCIAL_LINKS} className="justify-center lg:justify-start" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;