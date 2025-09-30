import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', path: '/products' },
    { id: 'timber-plywood', name: 'Timber & Plywood', path: '/products/timber-plywood' },
    { id: 'furniture-fittings', name: 'Furniture Fittings & Interior Design Materials', path: '/products/furniture-fittings' },
    { id: 'hardware', name: 'Hardware & Fixtures', path: '/products/hardware' }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Fencing Posts and Poles',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Posts_imgupscaler.ai_Upscaler_2K.jpg',
      description: 'Upgrade your property with our Premium Fencing Posts and Poles—built for strength, style, and long-lasting protection you can trust.'
    },
    {
      id: 2,
      name: 'Marine Boards',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Marine%20Grade%20Plywood.jpg',
      description: 'Experience unmatched strength and water resistance with our Marine Boards, the perfect choice for heavy-duty construction, formwork, and long-lasting finishes.'
    },
    {
      id: 3,
      name: 'Cypress Timber',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Cypress.png',
      description: 'Choose Cypress Timber for its natural durability, resistance to decay, and timeless beauty-perfect for premium construction and outdoor projects'
    },
    {
      id: 4,
      name: 'Metal Trappers for Hire',
      category: 'hardware',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Metal%20Trapper%201_imgupscaler.ai_Upscaler_2K.jpg',
      description: 'Ensure rock-solid stability for your multi-storey project with our high-strength metal trappers, engineered for safe, durable, and reliable house construction.'
    },
    {
      id: 5,
      name: 'Mahogany Hardwood',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Mahogany.jpg',
      description: 'Beautiful mahogany hardwood with rich grain patterns for premium applications.'
    },
    {
      id: 6,
      name: 'Rafters',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Rafters.png',
      description: 'Build with confidence using our durable timber rafters, designed to provide strong support and a lasting framework for any roofing project.'
    },
    {
      id: 7,
      name: 'Modern Cabinet Handles',
      category: 'furniture-fittings',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Hinges.png',
      description: 'Contemporary cabinet handles in brushed stainless steel finish.'
    },
    {
      id: 8,
      name: 'Stainless Steel Kitchen Sink',
      category: 'hardware',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Stainless%20Steel%20Sink.png',
      description: 'Double-bowl stainless steel sink with sound dampening technology.'
    },
    {
      id: 9,
      name: 'Premium Hardwood Timber',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Hero%203.jpg',
      description: 'High-grade oak timber with beautiful grain patterns. Perfect for furniture making, flooring, and architectural millwork. Kiln-dried and ready for finishing.'
    },
    {
      id: 10,
      name: 'Excellent Quality Doors',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Premium%20Doors.jpg',
      description: 'Marine-grade plywood with waterproof adhesive, ideal for strong and durable doors.'
    },
    {
      id: 11,
      name: 'Mahogany Hardwood',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Mahogany.png',
      description: 'Exotic mahogany hardwood with rich reddish-brown color and excellent workability. Perfect for luxury furniture and cabinetry.'
    },
    {
      id: 12,
      name: 'Pine Construction Lumber',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Pine%20Lumber.png',
      description: 'Structural grade pine lumber for framing, construction, and general building applications. Available in various dimensions.'
    },
    {
      id: 13,
      name: 'Birch Plywood Sheets',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Birch%20PLywood.png',
      description: 'High-quality birch plywood with smooth surface finish. Excellent for furniture making, cabinetry, and craft projects.'
    },
    {
      id: 14,
      name: 'Cedar Decking Boards',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Cedar%20Decking%20Piles_remix_01k5mh9j82fhr9bytbm85dqwak%20(1).png',
      description: 'Natural cedar decking boards with natural weather resistance. Perfect for outdoor decks, patios, and garden structures.'
    },
    {
      id: 15,
      name: 'Gypsum & All other Varieties of Ceiling Boards',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Gypsum%20Evergreens.jpg',
      description: 'Discover a wide range of premium ceiling boards, from sleek gypsum panels to acoustic, PVC, flowered ceiling and all other decorative options.'
    },
    {
      id: 16,
      name: 'MDF and Plywood Varieties',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Plywood.PNG',
      description: 'Explore a full selection of MDF and plywood options for furniture, cabinetry, and interior finishes.'
    },
    {
      id: 17,
      name: 'Timber Logs and Frames',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Timber%20Logs%20and%20Frames.jpg',
      description: 'We provide superior quality timber logs and sturdy frames ideal for construction, carpentry, and interior applications.'
    },
    {
      id: 18,
      name: 'Fencing Poles and Posts',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Posts_imgupscaler.ai_Upscaler_2K.jpg',
      description: 'Get the perfect foundation for strong, long-lasting barriers with our Fencing Poles and Posts.'
    },
    {
      id: 19,
      name: 'Range of Plywood Finishes',
      category: 'timber-plywood',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Range%20of%20Wood%20Finishes.jpg',
      description: 'Sleek and durable wood plywood finishes available in various styles.'
    },
    {
      id: 20,
      name: 'Living Room Interior Design',
      category: 'Furniture Fittings & Interior Design Materials',
      image: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg',
      description: 'Create a stylish and functional space with modern layouts, cozy furnishings, and soft finishes. Perfect for enhancing comfort while adding elegance to everyday living.'
    },
    {
      id: 21,
      name: 'Bedroom Interior Design',
      category: 'Furniture Fittings & Interior Design Materials',
      image: 'https://images.pexels.com/photos/6585597/pexels-photo-6585597.jpeg',
      description: 'Transform your bedroom into a personal retreat with thoughtful design that balances rest and style. Layered lighting, natural textures, and calming palettes create an atmosphere where relaxation meets timeless elegance.'
    },
    {
      id: 22,
      name: 'Elegant Lighting Solutions',
      category: 'Furniture Fittings & Interior Design Materials',  
      image: 'https://images.pexels.com/photos/6585599/pexels-photo-6585599.jpeg',
      description: 'Illuminate your home with sophistication through timeless chandeliers, pendant lights, and statement fixtures. Designed to add warmth, depth, and a touch of grandeur, these lighting accents transform everyday spaces into extraordinary experiences.'
    },
    {
      id: 23,
      name: 'Glass Cabinet Doors',
      category: 'Furniture Fittings & Interior Design Materials',  
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Glass%20Cabinet%20Doors.PNG',
      description: 'Tempered glass inserts for cabinet doors with aluminum frames. Available in clear, frosted, and decorative patterns.'
    },
    {
      id: 24,
      name: 'Sophisticated Curtain Rods',
      category: 'Furniture Fittings & Interior Design Materials',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Shiny%20Metal%20Curtain%20Rods.png',
      description: 'Elevate your windows with finely crafted curtain rods that blend style and function. With elegant finishes and durable design, they provide the perfect frame for your drapes while adding a refined touch to any room.'
    },
    {
      id: 25,
      name: 'Kitchen Faucets',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Shiny%20Faucets%20Display_remix_01k5p6fv5se0s81pnwn6a2hyez.png',
      description: 'Premium kitchen faucets with pull-down spray head and ceramic disc cartridge. Available in chrome, brushed nickel, and matte black.'
    },
    {
      id: 26,
      name: 'Heavy-Duty Door Locks & Padlocks',
      image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Shiny%20Silver%20Padlock.png',
      description: 'Explore our durable door locks and padlocks. Perfect for gates, storage units, and security applications.'
    },
    {
       id: 27,
       name: 'Door Hardware Sets',
       image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Door%20Fixtures.jpg',
       description: 'Complete door hardware sets including hinges, handles, and lock mechanisms. Available in traditional and contemporary styles.'
    },
    {
       id: 28,
       name: 'Bathroom Fixtures',
       image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Shiny%20Bathroom%20Elements.png',
       description: 'Complete bathroom fixture sets including towel bars, toilet paper holders, and robe hooks in matching finishes.'
    },
    {
       id: 29,
       name: 'All types of Fences Available',
       image: 'https://github.com/Kagwi/EvergreenSite/blob/main/public/Evergreen%20Hardwares_imgupscaler.ai_Upscaler_2K.jpg?raw=true',
       description: 'We provide durable fencing solutions to match every need.'  
    },
    {
       id: 30,
       name: 'Cement Delivery Available',
       image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Cement.jpg',
       description: 'Reliable and timely delivery of quality cement to your site. Ensuring convenience and efficiency for all your construction needs.'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Discover our comprehensive range of premium timber, hardware, and interior design materials
          </p>
        </div>
      </div>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {categories.slice(1).map((category) => (
              <Link
                key={category.id}
                to={category.path}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 animate-fade-in-up hover-glow"
                style={{ animationDelay: `${0.1 * (categories.slice(1).indexOf(category) + 1)}s` }}
              >
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 mb-4 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  Explore our complete range of {category.name.toLowerCase()} products
                </p>
                <span className="inline-flex items-center text-green-600 font-medium group-hover:text-red-600 transition-colors duration-300">
                  View Category →
                </span>
              </Link>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none appearance-none bg-white min-w-48"
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up hover-glow">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-600/0 to-green-600/0 group-hover:from-green-600/10 group-hover:to-yellow-500/10 transition-all duration-500 z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors duration-300">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-green-600 hover:bg-red-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Purchase Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
