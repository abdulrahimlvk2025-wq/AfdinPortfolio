import React from 'react';
import { TrendingUp, Building, Shield, Home, Target, BarChart3, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Asset Management & Investment Consulting",
      description: "Comprehensive portfolio management and strategic investment advice tailored to your financial objectives.",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Private Equity & Alternative Finance",
      description: "Access to exclusive investment opportunities and alternative financing solutions for growth capital.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Management",
      description: "Advanced risk assessment and mitigation strategies to protect and preserve your wealth.",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Real Estate Asset Management",
      description: "Professional management and optimization of real estate investment portfolios across markets.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Asset Planning & Optimization",
      description: "Strategic asset allocation and optimization to maximize returns while minimizing tax exposure.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Wealth Advisory Services",
      description: "Personalized wealth management strategies for high-net-worth individuals and families.",
    },
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive financial solutions designed to meet your unique investment needs 
            and help you achieve your financial goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 group-hover:bg-[#F4A000] transition-colors duration-300 shadow-sm">
                <div className="text-[#F4A000] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-[#F4A000] text-sm font-medium group-hover:text-[#e09100] transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 bg-[#F4A000] text-white font-semibold rounded-2xl hover:bg-[#e09100] transition-all duration-200 shadow-lg hover:shadow-xl">
            <span>See Full Services</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;