import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message. We will get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-gray-600 text-sm font-medium mb-6 shadow-sm">
            <MessageCircle className="w-4 h-4 mr-2 text-[#F4A000]" />
            Let's connect
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to secure your financial future? Contact our team of experts 
            to discuss your investment goals and discover how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F4A000]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-[#F4A000]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <a href="mailto:info@afdinportfolio.com" className="text-gray-600 hover:text-[#F4A000] transition-colors">
                      info@afdinportfolio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0F9D58]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#0F9D58]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <a href="tel:+2341234567890" className="text-gray-600 hover:text-[#0F9D58] transition-colors">
                      +234 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F4A000]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#F4A000]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Office</h4>
                    <p className="text-gray-600">
                      123 Business District<br />
                      Victoria Island, Lagos<br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0F9D58]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-[#0F9D58]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                    <a href="https://wa.me/2341234567890" className="text-gray-600 hover:text-[#0F9D58] transition-colors">
                      Chat with us instantly
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F4A000] to-[#0F9D58] p-8 rounded-3xl text-white">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold">Schedule a Consultation</h3>
              </div>
              <p className="mb-6 opacity-90 leading-relaxed">
                Book a personalized consultation with our financial experts 
                to discuss your investment strategy.
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors">
                Book Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send us a Message
            </h3>

            {submitMessage && (
              <div className="bg-[#0F9D58]/10 border border-[#0F9D58]/20 rounded-2xl p-4 mb-6">
                <p className="text-[#0F9D58] font-medium">{submitMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#F4A000] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#F4A000] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-3">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#F4A000] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="investment">Investment Consultation</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Customer Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#F4A000] focus:border-transparent transition-all duration-200 resize-none bg-gray-50 focus:bg-white"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F4A000] text-white px-6 py-4 rounded-2xl font-semibold hover:bg-[#e09100] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;