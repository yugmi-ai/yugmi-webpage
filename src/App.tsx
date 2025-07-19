import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Play, Calendar, Brain, Smartphone, Layers, Building, Zap, MapPin, Factory, Home, Car } from 'lucide-react';
import emailjs from 'emailjs-com';

// Floating Stars Component
const FloatingStars = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (page: string) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'applications', label: 'Applications' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#6F2B7F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img
              src="/yugmi.png"
              alt="Yugmi Logo"
              className="w-10 h-10 object-contain"
            />
            <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Yugmi
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors ${currentPage === item.id
                  ? 'text-[#F67B27]'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-gradient-to-r from-[#6F2B7F] via-[#C93A60] to-[#F67B27] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all">
              Schedule Demo
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#0F0F0F]/95 backdrop-blur-md border-t border-[#6F2B7F]/20">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors ${currentPage === item.id
                  ? 'text-[#F67B27]'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full bg-gradient-to-r from-[#6F2B7F] via-[#C93A60] to-[#F67B27] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all mt-2">
              Schedule Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

// Homepage Component
const Homepage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#6F2B7F]/10 to-[#0F0F0F]"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Living Digital Twins for{' '}
            <span className="bg-gradient-to-r from-[#C93A60] via-[#E55C3B] to-[#F67B27] bg-clip-text text-transparent">
              Smarter Infrastructure
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered systems that think, remember, and evolve with your assets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#6F2B7F] via-[#C93A60] to-[#F67B27] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
            <button className="border border-[#C93A60] text-[#F67B27] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C93A60]/10 transition-all flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </button>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Why Infrastructure Needs to{' '}
            <span className="bg-gradient-to-r from-[#C93A60] via-[#E55C3B] to-[#F67B27] bg-clip-text text-transparent">
              Evolve
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: '30%', desc: 'Project delays from inefficient planning' },
              { stat: 'Billions', desc: 'Lost in reactive maintenance' },
              { stat: 'Zero', desc: 'Memory in disconnected systems' },
              { stat: 'Rising', desc: 'Safety risks from blind spots' }
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
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
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
                subtitle: 'AI Agent Framework',
                desc: 'Intelligent reasoning engines that learn from your infrastructure data'
              },
              {
                icon: <Smartphone className="w-12 h-12 text-[#E55C3B]" />,
                title: 'Yugmi Sense',
                subtitle: 'Mobile Data Capture',
                desc: 'Real-time field data collection with AR-enhanced interfaces'
              },
              {
                icon: <Layers className="w-12 h-12 text-[#F67B27]" />,
                title: 'Yugmi XR',
                subtitle: 'Immersive Experience Layer',
                desc: 'Extended reality interfaces for digital twin visualization'
              }
            ].map((product, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-[#6F2B7F]/20 hover:border-[#C93A60]/40 transition-all cursor-pointer hover:scale-105">
                <div className="mb-6">{product.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                <h4 className="text-[#F67B27] font-semibold mb-4">{product.subtitle}</h4>
                <p className="text-gray-300 mb-6">{product.desc}</p>
                <div className="flex items-center text-[#C93A60] font-semibold group-hover:text-[#F67B27] transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            A Brain for Every{' '}
            <span className="bg-gradient-to-r from-[#C93A60] via-[#E55C3B] to-[#F67B27] bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h2>
          <div className="space-y-6 text-xl text-gray-300 mb-12">
            <p>Yugmi builds multimodal digital twins that understand your infrastructure like never before.</p>
            <p>Each asset gets a learning brain using advanced VLM/LLM technology.</p>
            <p>Creating autonomous insights, intelligent decisions, and continuous feedback loops.</p>
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
              { number: 85, suffix: '%', label: 'Faster Planning' },
              { number: 40, suffix: '%', label: 'Lower Costs' },
              { number: 70, suffix: '%', label: 'Time Saved in Inspections' },
              { number: 95, suffix: '%', label: 'Accuracy in Defect Detection' }
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
            <button className="bg-gradient-to-r from-[#6F2B7F] via-[#C93A60] to-[#F67B27] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all">
              Talk to Experts
            </button>
            <button className="border border-[#C93A60] text-[#F67B27] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C93A60]/10 transition-all">
              Get a Live Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Products Page Component
const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState('yugmi-ai');

  const products = {
    'yugmi-ai': {
      title: 'Yugmi.ai',
      subtitle: 'AI Agent Framework',
      tagline: 'The Brain Behind Every Digital Twin',
      description: 'Advanced AI agents that understand, reason, and learn from your infrastructure data to provide autonomous insights and intelligent decision-making.',
      features: [
        { icon: <Brain className="w-6 h-6" />, title: 'Multimodal AI', desc: 'Processes text, images, and sensor data simultaneously' },
        { icon: <Zap className="w-6 h-6" />, title: 'Real-time Learning', desc: 'Continuously adapts to new patterns and conditions' },
        { icon: <Building className="w-6 h-6" />, title: 'Asset Memory', desc: 'Maintains comprehensive historical context' },
        { icon: <ArrowRight className="w-6 h-6" />, title: 'Predictive Analytics', desc: 'Forecasts maintenance needs and risks' }
      ],
      useCases: ['Predictive Maintenance', 'Risk Assessment', 'Performance Optimization', 'Automated Reporting'],
      benefits: ['85% faster decision making', '60% reduction in downtime', '40% cost savings']
    },
    'yugmi-sense': {
      title: 'Yugmi Sense',
      subtitle: 'Mobile Data Capture',
      tagline: 'Your Eyes and Ears in the Field',
      description: 'Mobile-first platform for capturing real-world data with AR-enhanced interfaces, making field inspections intelligent and efficient.',
      features: [
        { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile Native', desc: 'Optimized for tablets and smartphones' },
        { icon: <Layers className="w-6 h-6" />, title: 'AR Overlay', desc: 'Augmented reality guidance and annotations' },
        { icon: <MapPin className="w-6 h-6" />, title: 'GPS Precision', desc: 'Accurate location tracking and mapping' },
        { icon: <Brain className="w-6 h-6" />, title: 'AI Recognition', desc: 'Automatic defect detection and classification' }
      ],
      useCases: ['Site Inspections', 'Progress Monitoring', 'Defect Documentation', 'Compliance Audits'],
      benefits: ['70% faster inspections', '95% accuracy improvement', '50% reduction in paperwork']
    },
    'yugmi-xr': {
      title: 'Yugmi XR',
      subtitle: 'Immersive Experience Layer',
      tagline: 'Step Inside Your Digital Twin',
      description: 'Extended reality platform that brings digital twins to life through immersive visualization and interactive experiences.',
      features: [
        { icon: <Layers className="w-6 h-6" />, title: 'VR/AR Ready', desc: 'Compatible with major XR platforms' },
        { icon: <Building className="w-6 h-6" />, title: '3D Visualization', desc: 'Photorealistic digital twin environments' },
        { icon: <Brain className="w-6 h-6" />, title: 'Real-time Data', desc: 'Live sensor integration and updates' },
        { icon: <Zap className="w-6 h-6" />, title: 'Collaborative', desc: 'Multi-user shared experiences' }
      ],
      useCases: ['Design Review', 'Training Simulations', 'Remote Inspections', 'Stakeholder Presentations'],
      benefits: ['90% better understanding', '75% reduced travel costs', '60% faster approvals']
    }
  };

  const currentProduct = products[selectedProduct as keyof typeof products];

  return (
    <div className="pt-16 min-h-screen">
      {/* Product Navigation */}
      <section className="py-8 px-4 border-b border-orange-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(products).map(([key, product]) => (
              <button
                key={key}
                onClick={() => setSelectedProduct(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${selectedProduct === key
                  ? 'bg-gradient-to-r from-[#6F2B7F] via-[#C93A60] to-[#F67B27] text-white'
                  : 'bg-gray-900/50 text-gray-300 hover:text-white border border-[#6F2B7F]/20'
                  }`}
              >
                {product.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {currentProduct.title}
            </h1>
            <h2 className="text-2xl text-blue-400 font-semibold mb-6">
              {currentProduct.subtitle}
            </h2>
            <p className="text-3xl text-gray-300 mb-8">{currentProduct.tagline}</p>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">{currentProduct.description}</p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Key Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentProduct.features.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-[#6F2B7F]/20 hover:border-[#C93A60]/40 transition-all">
                  <div className="text-[#F67B27] mb-4">{feature.icon}</div>
                  <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-300 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases & Benefits */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Use Cases</h3>
              <div className="space-y-4">
                {currentProduct.useCases.map((useCase, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/30">
                    <div className="w-2 h-2 bg-[#C93A60] rounded-full"></div>
                    <span className="text-gray-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {currentProduct.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/30">
                    <div className="w-2 h-2 bg-[#F67B27] rounded-full"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button
              className="bg-gradient-to-r from-[#6F2B7F] via-[#C93A60] to-[#F67B27] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all mr-4"
              
            >
              Book Demo
            </button>

            <button className="border border-[#C93A60] text-[#F67B27] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C93A60]/10 transition-all">
              Try the App
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Industry Applications Page
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
              <span className="bg-gradient-to-r from-[#C93A60] via-[#E55C3B] to-[#F67B27] bg-clip-text text-transparent">
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
                  ? 'bg-gradient-to-r from-[#6F2B7F] via-[#C93A60] to-[#F67B27] text-white scale-105'
                  : 'bg-gray-900/50 text-gray-300 hover:text-white border border-[#6F2B7F]/20 hover:border-[#C93A60]/40'
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
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-[#6F2B7F]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-[#F67B27]">
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
                      <div className="w-2 h-2 bg-[#C93A60] rounded-full mt-2 flex-shrink-0"></div>
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
                      <div className="w-2 h-2 bg-[#F67B27] rounded-full"></div>
                      <span className="text-gray-300 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-gradient-to-r from-[#6F2B7F] via-[#C93A60] to-[#F67B27] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
                Explore Solutions for {industries[selectedIndustry as keyof typeof industries].title}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// About Us Page
const AboutPage = () => {
  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-[#C93A60] via-[#E55C3B] to-[#F67B27] bg-clip-text text-transparent">
                Yugmi
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Building the intelligence layer for the world's infrastructure
            </p>
          </div>

          {/* Mission */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              To create living digital twins that think, learn, and evolve with critical infrastructure,
              making our built environment smarter, safer, and more sustainable for future generations.
            </p>
          </div>

          {/* Vision */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              A future where every piece of infrastructure has its own intelligent digital twin,
              creating a network of connected, self-aware systems that continuously optimize
              performance, predict needs, and adapt to changing conditions.
            </p>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Intelligence',
                  desc: 'We believe AI should augment human expertise, not replace it'
                },
                {
                  title: 'Reliability',
                  desc: 'Infrastructure demands systems that work when it matters most'
                },
                {
                  title: 'Collaboration',
                  desc: 'The best solutions emerge from diverse perspectives and partnerships'
                },
                {
                  title: 'Progress',
                  desc: 'We continuously push the boundaries of what\'s possible'
                }
              ].map((value, idx) => (
                <div key={idx} className="text-center p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-[#6F2B7F]/20">
                  <h3 className="text-xl font-bold text-[#F67B27] mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Sections Placeholder */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-xl bg-gray-900/30 border border-[#6F2B7F]/20">
              <h3 className="text-xl font-bold text-white mb-4">Leadership</h3>
              <p className="text-gray-400">Coming Soon</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-900/30 border border-[#6F2B7F]/20">
              <h3 className="text-xl font-bold text-white mb-4">Partners</h3>
              <p className="text-gray-400">Coming Soon</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-900/30 border border-[#6F2B7F]/20">
              <h3 className="text-xl font-bold text-white mb-4">Awards</h3>
              <p className="text-gray-400">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_i8ql1r2',        // Replace with your EmailJS service ID
      'template_lni995i',       // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        reply_to: formData.email,
        company: formData.organization,
        message: formData.message,
      },
      'TIGthDp3ink4ImDAE'         // Replace with your EmailJS public key
    ).then(
      () => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', organization: '', message: '' });
      },
      (error) => {
        console.error('EmailJS error:', error);
        alert('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Ready to revolutionize your infrastructure with digital twins?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-[#6F2B7F]/20">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-[#6F2B7F]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#C93A60] focus:outline-none transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-[#6F2B7F]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#C93A60] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Organization</label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-[#6F2B7F]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#C93A60] focus:outline-none transition-colors"
                    placeholder="Your company or organization"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-[#6F2B7F]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#C93A60] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project and how we can help..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#6F2B7F] via-[#C93A60] to-[#F67B27] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & CTAs */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-[#6F2B7F]/20">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <strong className="text-[#F67B27]">Email:</strong><br />
                    sales@yugmi.com
                  </div>
                  <div>
                    <strong className="text-[#F67B27]">Phone:</strong><br />
                    +91-9220320044
                  </div>
                  <div>
                    <strong className="text-[#F67B27]">Headquarters:</strong><br />
                    Noida UP, India
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-[#6F2B7F] via-[#C93A60] to-[#F67B27] text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-all">
                  Request Consultation
                </button>
                <button className="w-full border border-[#C93A60] text-[#F67B27] py-4 rounded-lg font-semibold hover:bg-[#C93A60]/10 transition-all">
                  Become a Partner
                </button>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-[#6F2B7F]/20 text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Ready for a Demo?</h4>
                <p className="text-gray-300 mb-4">
                  See Yugmi's digital twin technology in action
                </p>
                <button className="bg-gradient-to-r from-[#6F2B7F] via-[#C93A60] to-[#E55C3B] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
                  Schedule Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage />;
      case 'products':
        return <ProductsPage />;
      case 'applications':
        return <ApplicationsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white relative overflow-x-hidden">
      <FloatingStars />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="relative z-10">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#6F2B7F]/20 py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/yugmi.png"
                  alt="Yugmi Logo"
                  className="w-10 h-10 object-contain"
                />
                <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Yugmi
                </div>
              </div>
              <p className="text-gray-400">
                Living digital twins for smarter infrastructure
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Products</h4>
              <div className="space-y-2 text-gray-400">
                <div>Yugmi.ai</div>
                <div>Yugmi Sense</div>
                <div>Yugmi XR</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Applications</h4>
              <div className="space-y-2 text-gray-400">
                <div>Construction</div>
                <div>Bridge & Infrastructure</div>
                <div>Energy</div>
                <div>Smart Cities</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div>About Us</div>
                <div>Contact</div>
                <div>Careers</div>
                <div>Blog</div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#6F2B7F]/20 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Yugmi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;