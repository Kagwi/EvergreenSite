import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: `url('/footer-bg.jpg')`, // update path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark green transparent overlay (quite transparent so background shows through) */}
      <div className="absolute inset-0 bg-green-900/30 pointer-events-none z-0"></div>

      {/* Content (above overlay) */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group cursor-pointer hover:scale-105 transition-all duration-500">
              <div className="bg-white rounded-lg p-2 shadow-md group-hover:shadow-xl group-hover:bg-yellow-50 transition-all duration-500">
                <img
                  src="/image copy.png"
                  alt="Evergreen Timberyard & Hardware"
                  className="h-10 w-auto group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="text-white group-hover:text-yellow-300 transition-colors duration-500">
                <div className="text-sm font-light leading-tight">Building Dreams</div>
                <div className="text-xs text-gray-300 group-hover:text-yellow-200 transition-colors duration-500">
                  with Quality Materials
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for quality timber, hardware, and interior design materials.
              Building dreams with sustainable solutions.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61558606136153"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Evergreen Timberyard Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-all duration-300 hover:scale-125" />
              </a>

              <a
                href="https://www.instagram.com/ever_greentimber"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Evergreen Timberyard Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-all duration-300 hover:scale-125" />
              </a>

              <span aria-hidden>
                <Twitter className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-all duration-300 hover:scale-125" />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Services', path: '/services' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'FAQ', path: '/faq' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300 font-light hover:drop-shadow-lg hover:scale-105"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Categories</h4>
            <div className="space-y-2">
              <Link
                to="/products/timber-plywood"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-gray-300 hover:text-yellow-400 transition-all duration-300 font-light hover:translate-x-1 hover:scale-105"
              >
                Timber & Plywood
              </Link>
              <Link
                to="/products/furniture-fittings"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-gray-300 hover:text-yellow-400 transition-all duration-300 font-light hover:translate-x-1 hover:scale-105"
              >
                Furniture Fittings
              </Link>
              <Link
                to="/products/hardware"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-gray-300 hover:text-yellow-400 transition-all duration-300 font-light hover:translate-x-1 hover:scale-105"
              >
                Hardware & Fixtures
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:0711852596"
                className="flex items-center space-x-3 hover:text-yellow-400 transition-colors group"
              >
                <Phone className="w-5 h-5 text-yellow-400 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-yellow-400">0711 852 596</span>
              </a>

              <a
                href="tel:0725767789"
                className="flex items-center space-x-3 hover:text-yellow-400 transition-colors group"
              >
                <Phone className="w-5 h-5 text-yellow-400 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-yellow-400">0725 767 789</span>
              </a>

              <a
                href="mailto:info@evergreentimber.com"
                className="flex items-center space-x-3 hover:text-yellow-400 transition-colors group"
              >
                <Mail className="w-5 h-5 text-yellow-400 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-yellow-400">info@evergreentimber.com</span>
              </a>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                <span className="text-gray-300">
                  Juja Gate A, Kiambu County
                  <br />
                  Juja Mastore, Kiambu County
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Mon-Sat: 7AM-6PM<br />Sunday: Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright + designer */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 mb-2">&copy; 2025 Evergreen Timberyard & Hardware. All rights reserved.</p>
          <p className="text-gray-400">
            Created &amp; Designed by{' '}
            <a
              href="https://www.neonsolcreatives.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-yellow-400 underline transition-colors"
            >
              Neonsol Creatives
            </a>
          </p>
        </div>
      </div>

      {/* Full-width vibrant green fade effect (center green, fading to transparent at edges) */}
      <div className="relative z-10">
        <div className="w-full mt-6">
          <div className="h-3 w-full bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-95"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
