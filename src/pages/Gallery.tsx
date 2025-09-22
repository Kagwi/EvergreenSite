import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'timber', name: 'Timber Projects' },
    { id: 'hardware', name: 'Hardware Installations' },
    { id: 'interior', name: 'Interior Design' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'timber',
      title: 'Ideal Timber for Custom-Designed Kitchen Cabinets',
      description: 'Beautiful custom-built kitchen cabinets made from premium oak timber.',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Kitchen%20Cabinets_imgupscaler.ai_Upscaler_2K.jpg'
    },
    {
      id: 2,
      category: 'interior',
      title: 'Modern Living Room Design',
      description: 'Contemporary living room featuring our premium interior fittings and materials.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg'
    },
    {
      id: 3,
      category: 'timber',
      title: 'Ideal Timber for Hardwood Flooring Installations',
      description: 'Elegant mahogany hardwood flooring installation in a residential home.',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Hardwood%20Flooring_imgupscaler.ai_Upscaler_2K.jpg'
    },
    {
      id: 4,
      category: 'hardware',
      title: 'Premium Kitchen Hardware',
      description: 'Complete kitchen hardware installation including sinks, faucets, and cabinet hardware.',
      image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg'
    },
    {
      id: 5,
      category: 'timber',
      title: 'Cedar Outdoor Decking',
      description: 'Weather-resistant cedar decking for outdoor entertainment area.',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Outdoor%20Decking_imgupscaler.ai_Upscaler_2K.jpg'
    },
    {
      id: 6,
      category: 'interior',
      title: 'Luxury Bathroom Renovation',
      description: 'Complete bathroom renovation featuring premium fixtures and fittings.',
      image: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg'
    },
    {
      id: 7,
      category: 'hardware',
      title: 'Commercial Security Installation',
      description: 'Professional security hardware installation for commercial property.',
      image: 'https://images.pexels.com/photos/442570/pexels-photo-442570.jpeg'
    },
    {
      id: 8,
      category: 'interior',
      title: 'Modern Office Space',
      description: 'Contemporary office design with custom furniture and premium fittings.',
      image: 'https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Project Gallery</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects showcasing timber, hardware, and interior design excellence
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover-glow">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-600/0 to-green-600/0 group-hover:from-green-600/20 group-hover:to-yellow-500/20 transition-all duration-500 z-20"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-30">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={filteredItems[selectedImage].image}
              alt={filteredItems[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2">{filteredItems[selectedImage].title}</h3>
              <p className="text-gray-200">{filteredItems[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Own Project?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let us help you create something amazing with our premium materials and expert services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-700 hover:bg-yellow-500 hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
