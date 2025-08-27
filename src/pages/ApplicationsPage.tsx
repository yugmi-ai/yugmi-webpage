import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, Car, Zap, Home, Factory, MapPin } from 'lucide-react';

const ApplicationsPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('construction');

  const industries = {
    construction: {
      title: 'Construction & Development',
      icon: <Building className="w-8 h-8" />,
      description: 'Transform construction projects with intelligent digital twins that monitor progress, predict delays, and ensure quality.',
      applications: [
        'Real-time progress tracking against BIM models',
        'Automated quality control and defect detection',
        'Resource optimization and logistics planning',
        'Safety monitoring and risk assessment'
      ],
      benefits: ['45% faster project delivery', '30% cost reduction', '85% fewer safety incidents']
    },
    transportation: {
      title: 'Bridges & Infrastructure',
      icon: <Car className="w-8 h-8" />,
      description: 'Intelligent transportation infrastructure that adapts, learns, and optimizes for maximum efficiency and safety.',
      applications: [
        'Bridge and tunnel structural health monitoring',
        'Traffic flow optimization and prediction',
        'Predictive maintenance for critical assets',
        'Emergency response coordination'
      ],
      benefits: ['60% improved asset lifespan', '40% reduced maintenance costs', '25% traffic efficiency gains']
    },
    energy: {
      title: 'Energy & Utilities',
      icon: <Zap className="w-8 h-8" />,
      description: 'Smart energy infrastructure with digital twins that maximize efficiency, reliability, and sustainability.',
      applications: [
        'Power plant performance optimization',
        'Grid stability and demand forecasting',
        'Renewable energy integration',
        'Equipment failure prediction'
      ],
      benefits: ['35% efficiency improvement', '50% reduced downtime', '70% faster fault detection']
    },
    smartcities: {
      title: 'Smart Cities',
      icon: <Home className="w-8 h-8" />,
      description: 'Comprehensive urban digital twins that create responsive, sustainable, and livable cities for the future.',
      applications: [
        'Integrated urban planning and simulation',
        'Smart building energy management',
        'Public safety and emergency response',
        'Environmental monitoring and optimization'
      ],
      benefits: ['25% energy savings', '40% improved response times', '30% better resource allocation']
    },
    industrial: {
      title: 'Industrial Facilities',
      icon: <Factory className="w-8 h-8" />,
      description: 'Industrial digital twins that optimize operations, ensure safety, and maximize productivity.',
      applications: [
        'Production line optimization',
        'Predictive maintenance scheduling',
        'Quality control automation',
        'Worker safety monitoring'
      ],
      benefits: ['50% reduced downtime', '35% productivity increase', '80% fewer quality issues']
    },
    realestate: {
      title: 'Real Estate & Property',
      icon: <MapPin className="w-8 h-8" />,
      description: 'Intelligent property management with digital twins that enhance value, efficiency, and tenant experience.',
      applications: [
        'Building performance monitoring',
        'Tenant experience optimization',
        'Facility maintenance planning',
        'Energy efficiency tracking'
      ],
      benefits: ['40% operational cost savings', '60% faster issue resolution', '25% improved tenant satisfaction']
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry{' '}
              <span className="text-gray-300">
                Applications
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Yugmi's digital twin technology transforms industries and creates smarter, more efficient infrastructure.
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {Object.entries(industries).map(([key, industry]) => (
              <button
                key={key}
                onClick={() => setSelectedIndustry(key)}
                className={`p-4 rounded-xl font-semibold transition-all text-center ${selectedIndustry === key
                  ? 'bg-white text-black scale-105'
                  : 'bg-gray-900/50 text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500'
                  }`}
              >
                <div className="flex justify-center mb-2">
                  {industry.icon}
                </div>
                <div className="text-sm">{industry.title}</div>
              </button>
            ))}
          </div>

          {/* Selected Industry Details */}
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-white">
                {industries[selectedIndustry as keyof typeof industries].icon}
              </div>
              <h2 className="text-3xl font-bold text-white">
                {industries[selectedIndustry as keyof typeof industries].title}
              </h2>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              {industries[selectedIndustry as keyof typeof industries].description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Key Applications</h3>
                <div className="space-y-3">
                  {industries[selectedIndustry as keyof typeof industries].applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Impact & Benefits</h3>
                <div className="space-y-3">
                  {industries[selectedIndustry as keyof typeof industries].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-300 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link 
                to="/contact"
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                Explore Solutions for {industries[selectedIndustry as keyof typeof industries].title}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationsPage;