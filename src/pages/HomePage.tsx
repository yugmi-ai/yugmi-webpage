import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Calendar, Brain, Smartphone, Layers, Building, Zap, MapPin, Factory, Home, Car, ArrowRight } from 'lucide-react';
import AnimatedCounter from '../components/common/AnimatedCounter';

const HomePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#6F2B7F]/10 to-[#0F0F0F]"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" itemProp="headline">
            Living Digital Twins for{' '}
            <span className="bg-gradient-to-r from-[#C93A60] via-[#E55C3B] to-[#F67B27] bg-clip-text text-transparent">
              Smarter Infrastructure
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto" itemProp="description">
            AI-powered digital twin technology for construction monitoring, infrastructure inspection, and predictive maintenance using advanced LLM and VLM AI agents
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#6F2B7F] via-[#C93A60] to-[#F67B27] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
            <Link 
              to="/contact"
              className="border border-[#C93A60] text-[#F67B27] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C93A60]/10 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </Link>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#6F2B7F]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F67B27]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16" itemProp="headline">
            Why Infrastructure Needs to{' '}
            <span className="bg-gradient-to-r from-[#C93A60] via-[#E55C3B] to-[#F67B27] bg-clip-text text-transparent">
              Evolve
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: '30%', desc: 'Construction project delays from inefficient monitoring' },
              { stat: 'Billions', desc: 'Lost in reactive infrastructure maintenance' },
              { stat: 'Zero', desc: 'Memory in disconnected inspection systems' },
              { stat: 'Rising', desc: 'Safety risks from manual monitoring blind spots' }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-[#6F2B7F]/20 hover:border-[#C93A60]/40 transition-all">
                <div className="text-3xl font-bold text-[#F67B27] mb-2">{item.stat}</div>
                <div className="text-gray-300">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16" itemProp="headline">
            The Yugmi Product{' '}
            <span className="bg-gradient-to-r from-[#C93A60] via-[#E55C3B] to-[#F67B27] bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12 text-[#6F2B7F]" />,
                title: 'Yugmi.ai',
                subtitle: 'LLM & VLM AI Agent Framework',
                desc: 'Advanced AI agents using Large Language Models and Vision Language Models for intelligent infrastructure analysis and predictive maintenance'
              },
              {
                icon: <Smartphone className="w-12 h-12 text-[#E55C3B]" />,
                title: 'Yugmi Sense',
                subtitle: 'Mobile Construction Monitoring',
                desc: 'Real-time construction progress monitoring and automated defect detection with AR-enhanced field inspection tools'
              },
              {
                icon: <Layers className="w-12 h-12 text-[#F67B27]" />,
                title: 'Yugmi XR',
                subtitle: 'Digital Twin Visualization',
                desc: 'Immersive AR/VR digital twin experiences for infrastructure visualization, remote inspection, and collaborative planning'
              }
            ].map((product, idx) => (
              <Link 
                key={idx} 
                to="/products"
                className="group p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-[#6F2B7F]/20 hover:border-[#C93A60]/40 transition-all cursor-pointer hover:scale-105"
              >
                <div className="mb-6">{product.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                <h4 className="text-[#F67B27] font-semibold mb-4">{product.subtitle}</h4>
                <p className="text-gray-300 mb-6">{product.desc}</p>
                <div className="flex items-center text-[#C93A60] font-semibold group-hover:text-[#F67B27] transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" itemProp="headline">
            A Brain for Every{' '}
            <span className="bg-gradient-to-r from-[#C93A60] via-[#E55C3B] to-[#F67B27] bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h2>
          <div className="space-y-6 text-xl text-gray-300 mb-12">
            <p>Yugmi builds multimodal digital twins with AI agents that understand construction progress, infrastructure health, and maintenance needs like never before.</p>
            <p>Each asset gets an intelligent brain using advanced Vision Language Models (VLM) and Large Language Models (LLM) for automated inspection and monitoring.</p>
            <p>Creating autonomous insights, predictive maintenance alerts, and continuous infrastructure optimization feedback loops.</p>
          </div>

          {/* Digital Twin Process */}
          <div className="grid md:grid-cols-4 gap-4 mt-16">
            {[
              { step: '01', title: 'Data In', desc: 'Sensors, Images, Documents' },
              { step: '02', title: 'Twin', desc: 'AI Processing & Learning' },
              { step: '03', title: 'Insight', desc: 'Intelligent Analysis' },
              { step: '04', title: 'Action', desc: 'Automated Responses' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6F2B7F] via-[#C93A60] to-[#F67B27] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: 85, suffix: '%', label: 'Faster Construction Planning' },
              { number: 40, suffix: '%', label: 'Lower Infrastructure Costs' },
              { number: 70, suffix: '%', label: 'Time Saved in AI Inspections' },
              { number: 95, suffix: '%', label: 'Accuracy in Automated Defect Detection' }
            ].map((metric, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-[#6F2B7F]/20">
                <div className="text-4xl md:text-5xl font-bold text-[#F67B27] mb-2">
                  +<AnimatedCounter end={metric.number} suffix={metric.suffix} />
                </div>
                <div className="text-gray-300 font-semibold">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let's Build the{' '}
            <span className="bg-gradient-to-r from-[#C93A60] via-[#E55C3B] to-[#F67B27] bg-clip-text text-transparent">
              Twin Future
            </span>{' '}
            Together
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-[#6F2B7F] via-[#C93A60] to-[#F67B27] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all"
            >
              Talk to Experts
            </Link>
            <Link 
              to="/contact"
              className="border border-[#C93A60] text-[#F67B27] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C93A60]/10 transition-all"
            >
              Get a Live Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;