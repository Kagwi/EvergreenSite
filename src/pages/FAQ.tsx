import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'products', name: 'Products' },
    { id: 'services', name: 'Services' },
    { id: 'orders', name: 'Orders & Delivery' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'technical', name: 'Technical' }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'products',
      question: 'What types of timber do you stock?',
      answer: 'We stock a comprehensive range of timber including hardwoods (oak, mahogany, cherry, walnut), softwoods (pine, cedar, fir), and engineered wood products (plywood, MDF, particle board). Our inventory includes both domestic and imported species, all sourced from sustainable forestry operations.'
    },
    {
      id: 2,
      category: 'services',
      question: 'Do you offer timber cutting services?',
      answer: 'Yes, we provide precision timber cutting services using professional-grade equipment. We can cut timber to your exact specifications including custom angles, profiles, and dimensions. Our experienced team ensures accurate cuts every time, and we offer this service for both retail and wholesale customers.'
    },
    {
      id: 3,
      category: 'orders',
      question: 'What is your delivery policy?',
      answer: 'We offer delivery services throughout the region. Delivery fees are calculated based on distance and order size. For large orders, we may offer free delivery within certain areas. We schedule deliveries Monday through Saturday, and our team takes special care to handle materials properly during transport.'
    },
    {
      id: 4,
      category: 'pricing',
      question: 'Do you offer bulk pricing discounts?',
      answer: 'Yes, we provide competitive bulk pricing for contractors, builders, and large projects. Volume discounts are available for orders over certain quantities. Please contact us with your project requirements for a custom quote. We also offer special pricing for repeat customers and trade professionals.'
    },
    {
      id: 5,
      category: 'technical',
      question: 'How do I choose the right timber for my project?',
      answer: 'Choosing the right timber depends on several factors including the intended use, environmental conditions, budget, and aesthetic preferences. Our expert team can provide guidance based on your specific project requirements. We consider factors like durability, workability, appearance, and cost to recommend the best options.'
    },
    {
      id: 6,
      category: 'products',
      question: 'What hardware brands do you carry?',
      answer: 'We carry a wide selection of premium hardware brands including major manufacturers known for quality and reliability. Our inventory includes cabinet hardware, plumbing fixtures, security hardware, and architectural fittings from trusted suppliers. We focus on products that offer the best combination of quality, durability, and value.'
    },
    {
      id: 7,
      category: 'services',
      question: 'Do you provide interior design consultation?',
      answer: 'Yes, we offer professional interior design consultation services. Our experienced team can help with material selection, space planning, and design coordination. We work with both residential and commercial clients to create functional and beautiful spaces using our premium materials and fittings.'
    },
    {
      id: 8,
      category: 'orders',
      question: 'How long does it take to process custom orders?',
      answer: 'Processing time for custom orders varies depending on the complexity and availability of materials. Standard custom cutting services are typically completed within 1-3 business days. More complex projects or special orders may take 1-2 weeks. We provide estimated completion times when you place your order.'
    },
    {
      id: 9,
      category: 'technical',
      question: 'What maintenance is required for different timber types?',
      answer: 'Maintenance requirements vary by timber type and application. Hardwoods generally require less maintenance than softwoods. Outdoor applications need regular sealing and protection from weather. We provide detailed maintenance guides for all our timber products and can recommend appropriate care products and schedules.'
    },
    {
      id: 10,
      category: 'pricing',
      question: 'Do you provide free estimates?',
      answer: 'Yes, we provide free estimates for all projects. For simple inquiries, we can often provide estimates over the phone or email. For complex projects, we may schedule an on-site consultation to ensure accurate pricing. Our estimates include materials, services, and delivery costs where applicable.'
    },
    {
      id: 11,
      category: 'products',
      question: 'Are your timber products sustainably sourced?',
      answer: 'Absolutely. Environmental responsibility is a core value at Evergreen. We source our timber from certified sustainable forestry operations and work with suppliers who share our commitment to environmental stewardship. Many of our products carry FSC (Forest Stewardship Council) certification.'
    },
    {
      id: 12,
      category: 'services',
      question: 'Do you install the hardware you sell?',
      answer: 'While we don\'t directly provide installation services, we work with a network of qualified contractors and installers who we can recommend. We can also provide detailed installation guides and technical support to ensure proper installation of our products.'
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our products, services, and processes
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-6">
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search questions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none appearance-none bg-white"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFAQs.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItems.includes(item.id) ? (
                        <ChevronUp className="w-5 h-5 text-green-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {openItems.includes(item.id) && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="pt-4">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mb-3 capitalize">
                          {item.category}
                        </span>
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <MessageCircle className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No questions found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or browse all categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                >
                  Show All Questions
                </button>
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our expert team is here to help with personalized advice and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-green-700 hover:bg-yellow-500 hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
                <a
                  href="tel:0711852596"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Call Now: 0711 852 596
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;