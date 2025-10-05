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
      description: 'From sinks, to faucets, padlocks, screws, and bolts, hammers, saws, and wrenches.'
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="pt-16">
      {/* Inject custom CSS for bubbles + gradient */}
      <style>
        {`
          @keyframes bubble {
            0% { transform: translateY(0) scale(1); opacity: 0.6; }
            50% { opacity: 1; }
            100% { transform: translateY(-120vh) scale(1.5); opacity: 0; }
          }
          .animate-bubble {
            animation: bubble linear infinite;
          }
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 8s ease infinite;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-yellow-300 to-green-600 animate-gradient"></div>

        {/* Bubble Animations */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-6 h-6 bg-white/40 rounded-full animate-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `-${Math.random() * 50}px`,
                animationDuration: `${6 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Slides */}
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

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/products" className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <Truck className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors duration-300">Wide Range of Products</h3>
              <p className="text-gray-600">From timber to hardware, explore our comprehensive collection of building materials.</p>
            </Link>
            <Link to="/services" className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <Wrench className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors duration-300">Professional Services</h3>
              <p className="text-gray-600">Expert consultation, delivery services, and customized solutions for your projects.</p>
            </Link>
            <Link to="/contact" className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <Ruler className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors duration-300">Get a Quote</h3>
              <p className="text-gray-600">Request a free quote and discover competitive pricing for all your needs.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <AnimatedCounter end={5000} suffix="+" />
              <p className="text-gray-600">Products Available</p>
            </div>
            <div className="group">
              <AnimatedCounter end={1500} suffix="+" />
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="group">
              <AnimatedCounter end={1000} suffix="+" />
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="group">
              <AnimatedCounter end={15} suffix="+" />
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Star className="w-10 h-10 text-yellow-400 mb-6" />
              <p className="text-gray-600 mb-6">"Evergreen provided excellent service and quality materials for our construction project. Highly recommended!"</p>
              <p className="font-bold">John M.</p>
              <p className="text-sm text-gray-500">Contractor</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Star className="w-10 h-10 text-yellow-400 mb-6" />
              <p className="text-gray-600 mb-6">"Great customer service and wide range of products. They delivered on time and with high quality."</p>
              <p className="font-bold">Sarah K.</p>
              <p className="text-sm text-gray-500">Interior Designer</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Star className="w-10 h-10 text-yellow-400 mb-6" />
              <p className="text-gray-600 mb-6">"Evergreen is my go-to place for all building materials. Competitive prices and professional staff."</p>
              <p className="font-bold">Michael W.</p>
              <p className="text-sm text-gray-500">Homeowner</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
