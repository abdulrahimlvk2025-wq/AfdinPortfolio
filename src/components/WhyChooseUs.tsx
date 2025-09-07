import React from 'react';
import { Users, Award, Globe, Zap, MessageCircle, TrendingUp, Star } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Tailored Solutions",
      description: "Customized investment strategies designed specifically for your unique financial situation and goals.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "65+ Years of Combined Experience",
      description: "Our leadership team brings decades of proven expertise in global financial markets.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "$300B+ Sold Assets",
      description: "Demonstrated track record of successful asset transactions across diverse markets.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Cutting-Edge Financial Tech",
      description: "Advanced technology platforms for portfolio management, risk analysis, and performance tracking.",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Transparent Communication",
      description: "Regular updates, detailed reporting, and open dialogue throughout your investment journey.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Risk-Optimized Strategies",
      description: "Sophisticated risk management approaches to protect capital while maximizing growth potential.",
    },
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-gray-600 text-sm font-medium mb-6 shadow-sm">
            <Star className="w-4 h-4 mr-2 text-[#F4A000]" />
            Why choose us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Why Choose AFDIN PORTFOLIO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence and proven track record make us the trusted 
            partner for your financial success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 group bg-white hover:bg-gray-50 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#0F9D58]/10 rounded-2xl mx-auto mb-6 group-hover:bg-[#0F9D58] transition-colors duration-300">
                <div className="text-[#0F9D58] group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;