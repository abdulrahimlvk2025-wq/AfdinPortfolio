import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Back to top button */}
      <div className="bg-[#F4A000] hover:bg-[#e09100] transition-colors">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center">
            <button
              onClick={scrollToTop}
              className="p-4 transition-colors duration-200"
            >
              <ArrowUp className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-2xl font-semibold tracking-tight">
                <span className="text-[#F4A000]">AFDIN</span>
                <span className="text-gray-400 font-light ml-1">PORTFOLIO</span>
              </div>
              <div className="text-sm text-gray-500 font-medium mt-1">LIMITED</div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              Premier asset management company offering global financial solutions 
              tailored to individuals, institutions, and corporations. Building wealth 
              with integrity and innovation since 2017.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#F4A000]/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-[#F4A000]" />
                </div>
                <span className="text-gray-400">info@afdinportfolio.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#0F9D58]/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-[#0F9D58]" />
                </div>
                <span className="text-gray-400">+234 123 456 7890</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#F4A000]/10 rounded-lg flex items-center justify-center mt-0.5">
                  <MapPin className="h-4 w-4 text-[#F4A000]" />
                </div>
                <span className="text-gray-400">
                  123 Business District, Victoria Island, Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-8">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Track Record', id: 'track-record' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-8">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Asset Management</li>
              <li className="text-gray-400 text-sm">Private Equity</li>
              <li className="text-gray-400 text-sm">Risk Management</li>
              <li className="text-gray-400 text-sm">Real Estate</li>
              <li className="text-gray-400 text-sm">Wealth Advisory</li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <button className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#F4A000] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#F4A000] transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © 2025 AFDIN PORTFOLIO LIMITED. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-500 hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-500 hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-500 hover:text-white transition-colors duration-200">
                Investment Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;