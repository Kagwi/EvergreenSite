import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Wrench, Ruler, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div id={`counter-${end}`} className="text-3xl font-light text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
      {count}{suffix}
    </div>
  );
};
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: '/Evergreen%20Team_imgupscaler.ai_Upscaler_2K.jpg',
      title: 'Premium Quality Timberyard & Hardware',
      subtitle: 'Sustainable • Eco-Friendly • Elegant',
      description: 'Discover our extensive collection of premium timber, plywood, cement, metal trappers and more for all your construction and design needs.'
    },
    {
      image: '/Hero%201.jpg',
      title: 'Premium Quality Timberyard & Hardware',
      subtitle: 'Sustainable • Durable • Beautiful',
      description: 'Order our extensive collection of premium timber and plywood for all your construction and design needs.'
    },
    {
      image: '/Evergreen%20Samidoh%202_imgupscaler.ai_Upscaler_2K.jpg',
      title: 'Premium Quality Timberyard & Hardware',
      subtitle: 'Sustainable • Eco-Friendly • Elegant',
      description: 'Explore our extensive collection of premium timber, plywood, cement, metal trappers and more for all your construction and design needs.'
    },
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      title: 'Interior Design Excellence Consultancy and Material Procurement',
      subtitle: 'Modern • Elegant • Functional',
      description: 'Transform your space with our curated selection of interior design materials and fittings.'
    },
    {
      image: '/Hardware.jpg',
      title: 'Complete Hardware Solutions',
      subtitle: 'Reliable • Innovative • Professional',
      description: 'From sinks, to faucets, padlocks,  screws, and bolts, hammers, saws, and wrenches.'
    },
    {
      image: '/Hardware%202.jpg',
      title: 'Complete Hardware Solutions',
      subtitle: 'Reliable • Innovative • Professional',
      description: 'From locks, hinges, handles, and paints to nails, screws, bolts, plumbing fittings, roofing sheets, and electrical supplies.'
    },
    {
      image: '/Hero%202.jpg',
      title: 'Complete Hardware Solutions',
      subtitle: 'Reliable • Innovative • Professional',
      description: 'From power drills to steel pipes, discover a full range of reliable hardware solutions to build, repair, and upgrade your home or business projects.'
    },
    {
      image: '/Hero%203.jpg',
      title: 'Complete Hardware Solutions',
      subtitle: 'Superior Quality • Dependable • Professional',
      description: 'Visit our timberyard in Juja Near JKUAT Gate A, and mastoo, 10 min drive from Juja town.'
    },
    {
      image: '/Hero%204.jpg',
      title: 'Complete Hardware Solutions',
      subtitle: 'Superior Quality • Dependable • Professional',
      description: 'We also deliver orders made online. Purchase plywood, MDF, and OSB, and many more...'
    },
    {
      image: '/Hero%205.jpg',
      title: 'Premium Quality Timberyard',
      subtitle: 'Sustainable • Durable • Beautiful',
      description: 'Evergreen is one stop where you will get all your timber and construction materials, under one roof at affordable prices!'
    },
    {
      image: '/Shiny%20Bathroom%20Elements.png',
      title: 'Quality Bathroom Fixtures',
      subtitle: 'Durable •Elegant •Classy',
      description: 'Complete bathroom fixture sets including towel bars, toilet paper holders, and robe hooks in matching finishes.'
    }
  ];

  const featuredProducts = [
    {
      name: 'Premium Timber',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/KIH_0036.jpg',
      description: 'High-quality varieties of timber perfect for all your needs from furniture making, to flooring, and construction projects.'
    },
    {
      name: 'Premium Bluegum Timber',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Bluegum%20Evergreen%201_imgupscaler.ai_v1(Fast)_2K.jpg',
      description: 'High-quality bluegum timber perfect for furniture making and construction projects.'
    },
    {
      name: 'Fencing Poles and Posts',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Posts_imgupscaler.ai_Upscaler_2K.jpg',
      description: 'Get the perfect foundation for strong, long-lasting barriers with our Fencing Poles and Posts.'
    },
    {
      name: 'Range of Plywood Finishes',
      category: 'Furniture Fittings',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Range%20of%20Wood%20Finishes.jpg',
      description: 'Sleek and durable wood plywood finishes available in various styles.'
    },
    {
      name: 'Metal Trappers for Hire',
      category: 'Hardware',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Metal%20Trappers.PNG',
      description: 'Reinforce your construction with our heavy-duty metal trappers.'
    },
    {
      name: 'Quality Hardware Building Materials',
      category: 'Hardware',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Harware%20Building.jpg',
      description: 'Discover our wide range of Quality Hardware Building Materials, including top-grade metals, fasteners, and essential construction supplies.'
    },
    {
      name: 'Engineered Plywood',
      category: 'Timber & Plywood',
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg',
      description: 'Versatile engineered plywood suitable for various construction applications.'
    },
    {
      name: 'Fences',
      category: 'Hardware',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Hardwares_imgupscaler.ai_Upscaler_2K.jpg',
      description: 'Secure and beautify your property with our durable fences.'
    },
    {
      name: 'Bathroom Fixtures',
      category: 'Hardware',    
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Shiny%20Bathroom%20Elements.png',
      description: 'Complete bathroom fixture sets including towel bars, toilet paper holders, and robe hooks in matching finishes.'
    },
    {
      name: 'Premium Pine Timber',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Pine%20Timber%20Evergreen_imgupscaler.ai_v1(Fast)_2K.jpg',
      description: 'High-quality pine timber perfect for furniture making and construction projects.'
    },
    {
      name: 'Mvule Decking',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Mvule%20Timber%20Evergreen_imgupscaler.ai_v1(Fast)_2K.jpg',
      description: 'High-quality mvule timber perfect for floorsand other outdoor projects.'
    },
    {
      name: 'Pine Decking',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Pine%20Decking%20Evergreen_imgupscaler.ai_v1(Fast)_2K.jpg',
      description: 'High-quality pine timber perfect for floors and other outdoor projects. Make your floors elegant with pine decking.'
    },
    {
      name: 'Premium Mvule Timber',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Mvule%20Timber%202%20Evergreen_imgupscaler.ai_v1(Fast)_2K.jpg',
      description: 'High-quality mvule timber perfect for furniture making and construction projects.'
    },
    {
      name: 'Cypress Frames',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Frames%20Cypress%20Evergreen.PNG',
      description: 'High-quality cypress frames perfect for door frames. Make work easier by order frames that have already been assembled'
    },
    {
      name: 'Premium Camphor Timber',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Camphor%20Timber%20Evergreen_imgupscaler.ai_v1(Fast)_2K.jpg',
      description: 'High-quality mvule timber perfect for furniture making and construction projects.'
    },
    {
      name: 'Premium Bluegum Decking',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Bluegum%20Decking%20Evergreen_imgupscaler.ai_v1(Fast)_2K.jpg',
      description: 'High-quality bluegum decking perfect for beautiful and elegant floors.'
    },
    {
      name: 'Premium Mahogany Timber',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Mahogany%20Timber%20Evergreen_imgupscaler.ai_v1(Fast)_2K.jpg',
      description: 'High-quality mahogany timber perfect for furniture making and construction projects.'
    },
    {
      name: 'Premium Cypress Timber',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Cypress%20Timber%20Evergreen_imgupscaler.ai_v1(Fast)_2K.jpg',
      description: 'High-quality cypress timber perfect for furniture making and construction projects.'
    },
    {
      name: 'Camphor Laurel',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Camphor%20Laurel%20Timber%20Evergreen_imgupscaler.ai_v1(Fast)_2K.jpg',
      description: 'High-quality mvule timber perfect for furniture making and construction projects.'
    },
    {
      name: 'Rectangular Fencing Poles',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Fencing%20Poles%20Evergreen_imgupscaler.ai_v1(Fast)_2K.jpg',
      description: 'Get the perfect foundation for strong, long-lasting barriers with our fencing poles and posts'
    },
    {
      name: 'Rafters',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Rafters.png',
      description: 'Build with confidence using our durable timber rafters, designed to provide strong support and a lasting framework for any roofing project.'
    },
    {
      name: 'Gypsum Boards',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Gypsum%20Evergreens.jpg',
      description: 'Build with confidence using our durable gypsum, designed to provide strong support and a lasting framework for your roofing and interior design projects.'
    },
    {
      name: 'Gypsum Cornice Boards',
      category: 'Timber & Plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Gypsum%20Cornice%20Evergreen.jpg',
      description: 'Build with confidence using our durable gypsum, designed to provide strong support and a lasting framework for your roofing and interior design projects.'
    } 
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-6">
                <div className="max-w-2xl text-white">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-green-600/90 text-sm font-medium rounded-full mb-4">
                      {slide.subtitle}
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/products"
                      className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Explore Products
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-green-500 scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              to="/products/timber-plywood"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 hover:scale-110 transition-all duration-700 animate-fade-in-up hover:rotate-1"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 group-hover:rotate-45 group-hover:scale-125 transition-all duration-500">
                  <div className="w-8 h-8 bg-green-600 rounded-sm group-hover:scale-125 group-hover:bg-yellow-600 transition-all duration-500"></div>
                </div>
                <h3 className="text-xl font-light mb-4 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">Timber & Plywood</h3>
                <p className="text-gray-600 mb-6 font-light">Premium quality timber and engineered wood products for construction and furniture making.</p>
                <span className="inline-flex items-center text-green-600 font-light group-hover:text-yellow-600 transition-colors duration-300">
                  Explore Range <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-4 group-hover:scale-125 transition-all duration-500" />
                </span>
              </div>
            </Link>

            <Link 
              to="/products/furniture-fittings"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 hover:scale-110 transition-all duration-700 animate-fade-in-up hover:-rotate-1"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-300 group-hover:rotate-45 group-hover:scale-125 transition-all duration-500">
                  <Wrench className="w-8 h-8 text-yellow-600 group-hover:scale-125 group-hover:text-yellow-800 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-light mb-4 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">Furniture Fittings</h3>
                <p className="text-gray-600 mb-6 font-light">Complete range of furniture hardware and interior design materials for modern spaces.</p>
                <span className="inline-flex items-center text-green-600 font-light group-hover:text-yellow-600 transition-colors duration-300">
                  View Products <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-4 group-hover:scale-125 transition-all duration-500" />
                </span>
              </div>
            </Link>

            <Link 
              to="/products/hardware"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 hover:scale-110 transition-all duration-700 animate-fade-in-up hover:rotate-1"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 group-hover:rotate-45 group-hover:scale-125 transition-all duration-500">
                  <Ruler className="w-8 h-8 text-blue-600 group-hover:scale-125 group-hover:text-yellow-600 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-light mb-4 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">Hardware & Fixtures</h3>
                <p className="text-gray-600 mb-6 font-light">Essential hardware including sinks, taps, padlocks, and curtain rods for every project.</p>
                <span className="inline-flex items-center text-green-600 font-light group-hover:text-yellow-600 transition-colors duration-300">
                  Shop Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-4 group-hover:scale-125 transition-all duration-500" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-800 mb-4 animate-fade-in-up">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover our handpicked selection of premium products that combine quality, functionality, and style.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 hover:scale-110 animate-fade-in-up hover:rotate-2"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-600/0 to-green-600/0 group-hover:from-yellow-500/20 group-hover:to-yellow-600/30 transition-all duration-700 z-10"></div>
                  <img
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-light text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 font-light">{product.description}</p>
                  <Link
                    to="/contact"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-green-600 hover:bg-yellow-500 text-white font-light rounded-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:rotate-1"
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-yellow-400 hover:text-gray-900 hover:border-yellow-400 font-light rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-500 hover:-rotate-1"
                    className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-yellow-500 text-white font-light rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-1"
                  >
                    Purchase Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-yellow-500 text-white font-light rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-1 animate-bounce-slow"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-white mb-4 animate-fade-in-up">Why Choose Evergreen?</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We offer comprehensive solutions with expert services to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400/40 group-hover:scale-125 group-hover:rotate-45 transition-all duration-700">
                <Ruler className="w-10 h-10 text-white group-hover:scale-125 group-hover:text-yellow-200 transition-all duration-500" />
              </div>
              <h3 className="text-xl font-light text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">Precision Cutting</h3>
              <p className="text-green-100 font-light">Expert timber cutting services to your exact specifications with professional-grade equipment.</p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400/40 group-hover:scale-125 group-hover:rotate-45 transition-all duration-700">
                <Truck className="w-10 h-10 text-white group-hover:scale-125 group-hover:text-yellow-200 transition-all duration-500" />
              </div>
              <h3 className="text-xl font-light text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">Fast Delivery</h3>
              <p className="text-green-100 font-light">Reliable delivery service across the region with careful handling of all materials.</p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400/40 group-hover:scale-125 group-hover:rotate-45 transition-all duration-700">
                <Star className="w-10 h-10 text-white group-hover:scale-125 group-hover:text-yellow-200 transition-all duration-500" />
              </div>
              <h3 className="text-xl font-light text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">Expert Consultation</h3>
              <p className="text-green-100 font-light">Professional advice on interior fittings and design solutions from our experienced team.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-white text-green-700 hover:bg-yellow-400 hover:text-gray-900 font-light rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-1 animate-pulse-slow"
            >
              Learn More About Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl font-light text-gray-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
              At Evergreen Timberyard & Hardware, we're committed to providing sustainable, high-quality materials 
              that help build better spaces and stronger communities. Our passion for excellence drives us to source 
              the finest timber, most reliable hardware, and most innovative interior design solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 group hover:bg-yellow-50 rounded-xl transition-all duration-500 animate-fade-in-up hover:scale-105 hover:-rotate-1" style={{ animationDelay: '0.1s' }}>
                <AnimatedCounter end={10} suffix="+" />
                <div className="text-gray-600 font-light">Years of Experience</div>
              </div>
              <div className="p-6 group hover:bg-yellow-50 rounded-xl transition-all duration-500 animate-fade-in-up hover:scale-105" style={{ animationDelay: '0.2s' }}>
                <AnimatedCounter end={1000} suffix="+" />
                <div className="text-gray-600 font-light">Satisfied Customers</div>
              </div>
              <div className="p-6 group hover:bg-yellow-50 rounded-xl transition-all duration-500 animate-fade-in-up hover:scale-105 hover:rotate-1" style={{ animationDelay: '0.3s' }}>
                <AnimatedCounter end={200} suffix="+" />
                <div className="text-gray-600 font-light">Products Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
