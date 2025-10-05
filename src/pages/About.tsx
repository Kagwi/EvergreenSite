import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Leaf, Target, Play } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Evergreen</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Building sustainable futures with premium timber, reliable hardware, and innovative design solutions since 2008
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded more than a decade ago, Evergreen Timberyard & Hardware began as a small family business with a simple mission: 
                  to provide the community with premium quality building materials and exceptional customer service. What started 
                  as a modest timber yard has grown into a comprehensive one-stop destination for all construction and interior design needs.
                </p>
                <p>
                  Over the years, we've expanded our offerings to include not just premium timber and plywood, but also an extensive 
                  range of furniture fittings, interior design materials, and essential hardware. Our commitment to sustainability 
                  and quality has remained unchanged, ensuring that every product we offer meets the highest standards.
                </p>
                <p>
                  Today, we serve hundreds of customers ranging from individual homeowners and DIY enthusiasts to professional 
                  contractors, interior designers, and large construction companies. Our reputation for reliability, quality, 
                  and expert advice has made us the trusted choice for projects big and small.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Team_imgupscaler.ai_Upscaler_2K.jpg" 
                alt="Timber yard" 
                className="rounded-xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Excellence</h3>
              <p className="text-gray-600">
                We source only the finest materials and maintain rigorous quality standards across our entire inventory.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                Environmental responsibility is at our core. We prioritize sustainable sourcing and eco-friendly practices.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Every decision we make is centered around providing exceptional value and service to our customers.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek new products and technologies to better serve our customers' evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-1">
                <img 
                  src="https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Boss_imgupscaler.ai_Upscaler_2K.jpg" 
                  alt="Joyce wa Evergreen - Owner" 
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet the Owner</h2>
                <h3 className="text-2xl font-semibold text-green-700 mb-4">Joyce wa Evergreen</h3>
                <p className="text-lg text-gray-600 mb-4 font-medium">Founder & CEO</p>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    "When I started Evergreen Timberyard & Hardware more than a decade ago, I had a simple vision: to create 
                    a business that would serve our community with integrity, quality, and genuine care for each customer's project."
                  </p>
                  <p>
                    With over 10 years of experience in the timber and construction industry, Joyce brings deep expertise 
                    and passion to every aspect of the business. His background in sustainable forestry and construction 
                    management has shaped Evergreen's commitment to environmental responsibility and quality excellence.
                  </p>
                  <p>
                    Under Joyce's leadership, Evergreen has grown from a small local supplier to a regional leader, while 
                    maintaining the personal touch and community focus that has always been our hallmark. His hands-on 
                    approach ensures that every customer receives expert advice and personalized service.
                  </p>
                  <p>
                    "I'm proud of what we've built here at Evergreen. Every day, I see how our products and services help 
                    people create beautiful spaces and bring their visions to life. That's what drives me to continue 
                    pushing for excellence in everything we do."
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">10+</div>
                    <div className="text-sm text-gray-600">Years Leading Evergreen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Here's More From Evergreen's Directors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get More Acquainted with our Brand
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-black rounded-2xl shadow-2xl overflow-hidden group">
              {/* Video Player with Enhanced Configuration */}
              <video 
                className="w-full h-auto rounded-2xl"
                controls
                playsInline
                preload="metadata"
                style={{ minHeight: '400px', backgroundColor: '#000' }}
              >
                <source 
                  src="/Evergreen Directors.mp4" 
                  type="video/mp4" 
                />
                <source 
                  src="/Evergreen Directors.webm" 
                  type="video/webm" 
                />
                Your browser does not support the video tag.
                <p>If the video doesn't play, please check that your video file is in the public folder and named "Evergreen Directors.mp4"</p>
              </video>
              
              {/* Custom Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-20 h-20 bg-green-600/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>

            {/* Video Description */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Premium Quality</h4>
                <p className="text-gray-600 text-sm">See our carefully selected timber and materials up close</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Expert Team</h4>
                <p className="text-gray-600 text-sm">Meet our knowledgeable staff ready to assist you</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Sustainable Practices</h4>
                <p className="text-gray-600 text-sm">Learn about our commitment to environmental responsibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and community service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-green-200">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-green-200">Products Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-green-200">Timber Species</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-green-200">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a professional contractor or a DIY enthusiast, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Browse Products
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
