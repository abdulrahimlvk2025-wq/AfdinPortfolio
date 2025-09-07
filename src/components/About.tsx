import React from 'react';
import { Award, Globe, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-gray-600 text-sm font-medium mb-6 shadow-sm">
            <CheckCircle className="w-4 h-4 mr-2 text-[#0F9D58]" />
            Trusted since 2017
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            AFDIN PORTFOLIO LIMITED
            <span className="block text-3xl lg:text-4xl text-gray-600 font-normal mt-2">at a Glance</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              AFDIN is a premier asset management company offering global financial solutions 
              tailored to individuals, institutions, and corporations. Registered in Nigeria 
              since 2017, we are committed to preserving and growing wealth with integrity and innovation.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Our team combines decades of experience with cutting-edge technology to deliver 
              personalized investment strategies that align with your financial goals and risk tolerance.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F4A000]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F4A000] transition-colors duration-300">
              <Award className="h-7 w-7 text-[#F4A000] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Excellence</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Delivering exceptional results through expertise and dedication</p>
          </div>

          <div className="text-center group bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#0F9D58]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0F9D58] transition-colors duration-300">
              <Globe className="h-7 w-7 text-[#0F9D58] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Reach</h3>
            <p className="text-gray-600 text-sm leading-relaxed">International perspective with local market expertise</p>
          </div>

          <div className="text-center group bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#F4A000]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F4A000] transition-colors duration-300">
              <Shield className="h-7 w-7 text-[#F4A000] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Integrity</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Transparent practices and ethical investment strategies</p>
          </div>

          <div className="text-center group bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-[#0F9D58]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0F9D58] transition-colors duration-300">
              <TrendingUp className="h-7 w-7 text-[#0F9D58] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Cutting-edge solutions for modern investment challenges</p>
          </div>
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl hover:bg-gray-800 transition-colors duration-200">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;