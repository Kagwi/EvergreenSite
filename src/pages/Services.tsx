import React from 'react';
import { Link } from 'react-router-dom';
import { Ruler, Truck, Wrench, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Ruler,
      title: 'Precision Timber Cutting',
      description: 'Professional timber cutting services to your exact specifications using state-of-the-art equipment.',
      features: [
        'Precision cutting to exact dimensions',
        'Professional-grade equipment',
        'Various timber species available',
        'Custom angles and profiles',
        'Quality assurance on every cut'
      ],
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen_imgupscaler.ai_Upscaler_2K.jpg'
    },
    {
      icon: Truck,
      title: 'Reliable Delivery Service',
      description: 'Fast and secure delivery of all materials directly to your project site with careful handling.',
      features: [
        'Regional delivery coverage',
        'Scheduled delivery slots',
        'Careful material handling',
        'Tracking and updates',
        'Flexible delivery options'
      ],
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Delivery.png'
    },
    {
      icon: Wrench,
      title: 'Interior Fittings Consultation',
      description: 'Expert advice and consultation for interior fittings and design material selection.',
      features: [
        'Professional design consultation',
        'Material recommendations',
        'Space optimization advice',
        'Budget-friendly solutions',
        'Project planning assistance'
      ],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive services to support your projects from planning to completion
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beyond our extensive product range, we provide professional services to ensure your project's success
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-xl shadow-xl w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to get the expert service you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-green-700 transition-colors">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Contact Us</h3>
              <p className="text-gray-600">Reach out via phone, email, or our contact form to discuss your needs.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-green-700 transition-colors">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Consultation</h3>
              <p className="text-gray-600">Our experts will discuss your project requirements and provide recommendations.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-green-700 transition-colors">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Service Delivery</h3>
              <p className="text-gray-600">We execute the service with precision and attention to detail.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-green-700 transition-colors">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Follow-up</h3>
              <p className="text-gray-600">We ensure your complete satisfaction and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Service Hours & Availability</h2>
              <div className="space-y-4 text-green-100">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6" />
                  <span className="text-lg">Monday - Saturday: 7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6" />
                  <span className="text-lg">Sunday: Emergency services only</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
              <p className="text-green-100 mb-6">
                Contact us directly for urgent projects or emergency services. We're here to help when you need us most.
              </p>
              <div className="space-y-3">
                <p className="text-white font-semibold">Emergency Hotline: 0711 852 596</p>
                <p className="text-green-100">Available 24/7 for urgent support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our expert team help you bring your vision to life with professional services and quality materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Request Service Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
