import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionWrapper from './SectionWrapper';
import Button from './Button';
import SocialIcons from './SocialIcons';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
    // Clear error for the field as user types
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
        // Send email using EmailJS
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
        setFormData({ name: '', email: '', message: '' }); // Clear form
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } catch (error) {
        console.error('EmailJS Error:', error);
        setSubmitStatus('error');
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    }
  };


  const inputClasses = "w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50 text-gray-100 transition-colors duration-200";
  const labelClasses = "block text-gray-300 text-sm font-bold mb-2";

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        {/* Contact Form */}
        <div
          className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700"
          // Removed Framer Motion initial, whileInView, viewport, transition props
        >
          <h3 className="text-3xl font-bold text-blue-400 mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={labelClasses}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${inputClasses} ${errors.name ? 'border-red-500' : ''}`}
                required
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${inputClasses} ${errors.email ? 'border-red-500' : ''}`}
                required
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className={labelClasses}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`${inputClasses} resize-y ${errors.message ? 'border-red-500' : ''}`}
                required
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" variant="primary" disabled={submitStatus === 'submitting'}>
              {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </Button>
            {submitStatus === 'success' && (
              <p className="text-green-400 mt-4 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 mt-4 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>

        {/* Alternative Contact Info */}
        <div
          className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700"
          // Removed Framer Motion initial, whileInView, viewport, transition props
        >
          <h3 className="text-3xl font-bold text-green-400 mb-6">My Details</h3>
          <div className="space-y-4 text-lg">
            <p className="flex items-center text-gray-300">
              <FaEnvelope className="mr-3 text-blue-400" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-green-400 transition-colors">{CONTACT_INFO.email}</a>
            </p>
            <p className="flex items-center text-gray-300">
              <FaMapMarkerAlt className="mr-3 text-blue-400" />
              {CONTACT_INFO.location}
            </p>
          </div>
          <h3 className="text-2xl font-bold text-blue-400 mt-8 mb-4">Connect With Me</h3>
          <SocialIcons links={SOCIAL_LINKS} iconSize="2.5em" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;