import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Smartphone, Layers, Building, Zap, MapPin } from 'lucide-react';

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
        { icon: <Brain className="w-6 h-6" />, title: 'Predictive Analytics', desc: 'Forecasts maintenance needs and risks' }
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
      <section className="py-8 px-4 border-b border-[#F67B27]/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(products).map(([key, product]) => (
              <button
                key={key}
                onClick={() => setSelectedProduct(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${selectedProduct === key
                  ? 'bg-white text-black'
                  : 'bg-gray-900/50 text-gray-300 hover:text-white border border-gray-700'
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
            <h2 className="text-2xl text-[#C93A60] font-semibold mb-6">
            <h2 className="text-2xl text-gray-300 font-semibold mb-6">
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
                <div key={idx} className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-gray-500 transition-all">
                  <div className="text-white mb-4">{feature.icon}</div>
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
                    <div className="w-2 h-2 bg-white rounded-full"></div>
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
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all mr-4"
            >
              Book Demo
            </Link>
            <Link 
              to="/contact"
              className="border border-gray-400 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all"
            >
              Try the App
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;