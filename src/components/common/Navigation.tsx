import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: '/', label: 'Home' },
    { id: '/products', label: 'Products' },
    { id: '/applications', label: 'Applications' },
    { id: '/about', label: 'About' },
    { id: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/yugmi.png"
              alt="Yugmi Logo"
              className="w-10 h-10 object-contain"
            />
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">
              Yugmi
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                className={`text-sm font-medium transition-colors ${isActive(item.id)
                  ? 'text-black'
                  : 'text-gray-600 hover:text-black'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all"
            >
              Schedule Demo
            </Link>
          </div>

          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors ${isActive(item.id)
                  ? 'text-black'
                  : 'text-gray-600 hover:text-black'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all mt-2 text-center"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;