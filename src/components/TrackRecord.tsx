import React, { useState, useEffect } from 'react';
import { CheckCircle, Globe, Home, DollarSign, TrendingUp, BarChart } from 'lucide-react';

const TrackRecord: React.FC = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    states: 0,
    clients: 0,
    holdingAssets: 0,
    soldAssets: 0,
  });

  const finalValues = {
    projects: 100,
    states: 10,
    clients: 500,
    holdingAssets: 10,
    soldAssets: 300,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map((key) => {
      const finalValue = finalValues[key as keyof typeof finalValues];
      const increment = finalValue / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
        }

        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue),
        }));

        if (currentValue >= finalValue) {
          clearInterval(intervals.find(interval => interval === setInterval));
        }
      }, stepDuration);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  const stats = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      value: counters.projects,
      label: "Completed Projects",
      suffix: "+",
      color: "text-[#0F9D58]",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      value: counters.states,
      label: "States in Nigeria",
      suffix: "+",
      color: "text-[#F4A000]",
    },
    {
      icon: <Home className="h-8 w-8" />,
      value: counters.clients,
      label: "Residential Clients",
      suffix: "+",
      color: "text-[#0F9D58]",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      value: counters.holdingAssets,
      label: "Holding Assets",
      suffix: "B+",
      prefix: "$",
      color: "text-[#F4A000]",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: counters.soldAssets,
      label: "Sold Assets",
      suffix: "B+",
      prefix: "$",
      color: "text-[#0F9D58]",
    },
  ];

  return (
    <section id="track-record" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full text-gray-600 text-sm font-medium mb-6">
            <BarChart className="w-4 h-4 mr-2 text-[#0F9D58]" />
            Proven results
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Our Track Record
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak to our commitment and success in delivering 
            exceptional financial results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className={`flex items-center justify-center w-16 h-16 rounded-2xl mx-auto mb-6 bg-white shadow-sm`}>
                <div className={stat.color}>
                  {stat.icon}
                </div>
              </div>
              <div className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-2`}>
                {stat.prefix || ''}{stat.value}{stat.suffix || ''}
              </div>
              <div className="text-gray-500 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#F4A000] to-[#0F9D58] rounded-3xl p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Leadership Excellence
            </h3>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Our executive team brings 65+ years of cumulative experience managing billions 
              in assets across diverse markets. Led by seasoned professionals who have 
              navigated complex financial landscapes, we deliver strategic insights and 
              proven methodologies that drive exceptional results for our clients.
            </p>
            <button className="mt-8 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors">
              Meet Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;