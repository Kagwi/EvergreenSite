import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = [
    { name: 'Timber & Plywood', path: '/products/timber-plywood' },
    { name: 'Furniture Fittings & Interior Design Materials', path: '/products/furniture-fittings' },
    { name: 'Hardware & Fixtures', path: '/products/hardware' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group hover:scale-105 transition-all duration-500"
          >
            <div className="relative bg-white rounded-lg p-2 shadow-md group-hover:shadow-xl group-hover:bg-yellow-50 transition-all duration-500">
              <img
                src="/image copy.png"
                alt="Evergreen Timberyard & Hardware"
                className="h-10 w-auto group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="hidden md:block">
              <div className="text-gray-800 group-hover:text-green-600 transition-colors duration-500">
                <div className="text-sm font-light leading-tight">Quality Materials</div>
                <div className="text-xs text-gray-500 group-hover:text-green-500 transition-colors duration-500">
                  Building Dreams
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-all duration-200 ${
                location.pathname === '/'
                  ? 'text-green-600 border-b-2 border-yellow-500 pb-1'
                  : 'text-gray-700 hover:text-red-600 hover:transform hover:scale-105'
              }`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className={`flex items-center space-x-1 font-medium transition-all duration-200 ${
                  location.pathname.includes('/products')
                    ? 'text-green-600 border-b-2 border-yellow-500 pb-1'
                    : 'text-gray-700 hover:text-red-600 hover:transform hover:scale-105'
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isProductsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <Link
                    to="/products"
                    className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors font-medium"
                  >
                    All Products
                  </Link>
                  <div className="border-t border-gray-100">
                    {productCategories.map((category) => (
                      <Link
                        key={category.path}
                        to={category.path}
                        className="block px-6 py-3 text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {['About', 'Services', 'Gallery', 'FAQ', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className={`font-medium transition-all duration-200 ${
                  location.pathname === `/${item.toLowerCase()}`
                    ? 'text-green-600 border-b-2 border-yellow-500 pb-1'
                    : 'text-gray-700 hover:text-yellow-500 hover:transform hover:scale-105 hover:drop-shadow-lg'
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            {['Home', 'Products', 'About', 'Services', 'Gallery', 'FAQ', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-yellow-500 font-light transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
