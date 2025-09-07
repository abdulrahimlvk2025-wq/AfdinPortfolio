import React from 'react';
import { ArrowRight, Play, TrendingUp, Shield, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-white flex items-center overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#F4A000]/5 to-[#0F9D58]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#0F9D58]/5 to-[#F4A000]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-[#F4A000]/10 rounded-full text-[#F4A000] text-sm font-medium mb-8">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trusted by 500+ clients worldwide
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight">
              Your Partner to
              <span className="block text-[#F4A000] mt-2">Financial Success</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
              Bespoke asset management and wealth solutions backed by 65+ years of global expertise and $10B+ in managed assets.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
              <button
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#F4A000] text-white font-semibold rounded-2xl hover:bg-[#e09100] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Schedule Consultation
                <Play className="ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900 mb-1">65+</div>
                <div className="text-sm text-gray-500 font-medium">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900 mb-1">$10B+</div>
                <div className="text-sm text-gray-500 font-medium">Assets Managed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
                <div className="text-sm text-gray-500 font-medium">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-500 font-medium">Satisfied Clients</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main dashboard mockup */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#F4A000] rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Portfolio Overview</div>
                      <div className="text-xs text-gray-500">Real-time insights</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">$2.4M</div>
                    <div className="text-sm text-[#0F9D58] font-medium">+12.5% YTD</div>
                  </div>
                </div>
                
                {/* Chart representation */}
                <div className="h-32 bg-gradient-to-r from-[#F4A000]/10 to-[#0F9D58]/10 rounded-2xl mb-6 flex items-end justify-between px-4 pb-4">
                  <div className="w-4 bg-[#F4A000] rounded-t-sm" style={{height: '60%'}}></div>
                  <div className="w-4 bg-[#F4A000] rounded-t-sm" style={{height: '80%'}}></div>
                  <div className="w-4 bg-[#0F9D58] rounded-t-sm" style={{height: '90%'}}></div>
                  <div className="w-4 bg-[#0F9D58] rounded-t-sm" style={{height: '75%'}}></div>
                  <div className="w-4 bg-[#F4A000] rounded-t-sm" style={{height: '95%'}}></div>
                </div>
                
                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Shield className="w-5 h-5 text-[#0F9D58] mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Low Risk</div>
                    <div className="text-xs text-gray-500">Protected</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <TrendingUp className="w-5 h-5 text-[#F4A000] mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Growth</div>
                    <div className="text-xs text-gray-500">Optimized</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Users className="w-5 h-5 text-[#0F9D58] mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Advisory</div>
                    <div className="text-xs text-gray-500">24/7 Support</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#0F9D58] rounded-full"></div>
                  <div className="text-sm font-medium text-gray-900">Active</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Monthly Return</div>
                <div className="text-lg font-bold text-[#F4A000]">+8.2%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;