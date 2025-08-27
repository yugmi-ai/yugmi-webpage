import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-[#6F2B7F]/20 py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/yugmi.png"
                alt="Yugmi Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                Yugmi
              </div>
            </Link>
            <p className="text-gray-400">
              Living digital twins for smarter infrastructure
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <div className="space-y-2 text-gray-400">
              <Link to="/products" className="block hover:text-white transition-colors">Yugmi.ai</Link>
              <Link to="/products" className="block hover:text-white transition-colors">Yugmi Sense</Link>
              <Link to="/products" className="block hover:text-white transition-colors">Yugmi XR</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Applications</h4>
            <div className="space-y-2 text-gray-400">
              <Link to="/applications" className="block hover:text-white transition-colors">Construction</Link>
              <Link to="/applications" className="block hover:text-white transition-colors">Bridge & Infrastructure</Link>
              <Link to="/applications" className="block hover:text-white transition-colors">Energy</Link>
              <Link to="/applications" className="block hover:text-white transition-colors">Smart Cities</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <div className="space-y-2 text-gray-400">
              <Link to="/about" className="block hover:text-white transition-colors">About Us</Link>
              <Link to="/contact" className="block hover:text-white transition-colors">Contact</Link>
              <div className="text-gray-400">Careers</div>
              <div className="text-gray-400">Blog</div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#6F2B7F]/20 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Yugmi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;