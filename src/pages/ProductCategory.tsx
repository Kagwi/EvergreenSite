import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductCategory = () => {
  const { category } = useParams();

  const categoryData = {
    'timber-plywood': {
      title: 'Timber & Plywood',
      description: 'Premium quality timber and engineered wood products for construction, furniture making, and architectural applications.',
      products: [
        {
          id: 1,
          name: 'Premium Hardwood Timber',
          image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Hero%203.jpg',
          description: 'High-grade oak timber with beautiful grain patterns. Perfect for furniture making, flooring, and architectural millwork. Kiln-dried and ready for finishing.'
        },
        {
          id: 2,
          name: 'Excellent Quality Doors',
          image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Premium%20Doors.jpg',
          description: 'Marine-grade plywood with waterproof adhesive, ideal for strong and durable doors.'
        },
        {
          id: 3,
          name: 'Mahogany Hardwood',
          image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Mahogany.png',
          description: 'Exotic mahogany hardwood with rich reddish-brown color and excellent workability. Perfect for luxury furniture and cabinetry.'
        },
        {
          id: 4,
          name: 'Pine Construction Lumber',
          image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Pine%20Lumber.png',
          description: 'Structural grade pine lumber for framing, construction, and general building applications. Available in various dimensions.'
        },
        {
          id: 5,
          name: 'Birch Plywood Sheets',
          image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Birch%20PLywood.png',
          description: 'High-quality birch plywood with smooth surface finish. Excellent for furniture making, cabinetry, and craft projects.'
        },
        {
          id: 6,
          name: 'Cedar Decking Boards',
          image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Cedar%20Decking%20Piles_remix_01k5mh9j82fhr9bytbm85dqwak%20(1).png',
          description: 'Natural cedar decking boards with natural weather resistance. Perfect for outdoor decks, patios, and garden structures.'
        }
      ]
    },
    'furniture-fittings': {
      title: 'Furniture Fittings & Interior Design Materials',
      description: 'Complete range of furniture hardware, fittings, and interior design materials for modern and traditional spaces.',
      products: [
        {
          id: 1,
          name: 'Soft Close Cabinet Hinges',
          image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Hinges.png',
          description: 'Premium quality soft-close hinges with adjustable tension control. Self-closing mechanism ensures smooth and quiet operation.'
        },
        {
          id: 2,
          name: 'Living Room Interior Design',
          image: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg',
          description: 'Create a stylish and functional space with modern layouts, cozy furnishings, and soft finishes. Perfect for enhancing comfort while adding elegance to everyday living.'
        },
        {
          id: 3,
          name: 'Bedroom Interior Design',
          image: 'https://images.pexels.com/photos/6585597/pexels-photo-6585597.jpeg',
          description: 'Transform your bedroom into a personal retreat with thoughtful design that balances rest and style. Layered lighting, natural textures, and calming palettes create an atmosphere where relaxation meets timeless elegance.'
        },
        {
          id: 4,
          name: 'Elegant Lighting Solutions',
          image: 'https://images.pexels.com/photos/6585599/pexels-photo-6585599.jpeg',
          description: 'Illuminate your home with sophistication through timeless chandeliers, pendant lights, and statement fixtures. Designed to add warmth, depth, and a touch of grandeur, these lighting accents transform everyday spaces into extraordinary experiences.'
        },
        {
          id: 5,
          name: 'Glass Cabinet Doors',
          image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Glass%20Cabinet%20Doors.PNG',
          description: 'Tempered glass inserts for cabinet doors with aluminum frames. Available in clear, frosted, and decorative patterns.'
        },
        {
          id: 6,
          name: 'Sophisticated Curtain Rods',
          image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Shiny%20Metal%20Curtain%20Rods.png',
          description: 'Elevate your windows with finely crafted curtain rods that blend style and function. With elegant finishes and durable design, they provide the perfect frame for your drapes while adding a refined touch to any room.'
        }
      ]
    },
    'hardware': {
      title: 'Hardware & Fixtures',
      description: 'Essential hardware and fixtures including sinks, taps, security systems, and architectural hardware for residential and commercial use.',
      products: [
        {
          id: 1,
          name: 'Stainless Steel Kitchen Sink',
          image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Evergreen%20Stainless%20Steel%20Sink.png',
          description: 'Double-bowl stainless steel sink with sound dampening and scratch-resistant finish. Includes waste disposal mounting options.'
        },
        {
          id: 2,
          name: 'Kitchen Faucets',
          image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Shiny%20Faucets%20Display_remix_01k5p6fv5se0s81pnwn6a2hyez.png',
          description: 'Premium kitchen faucets with pull-down spray head and ceramic disc cartridge. Available in chrome, brushed nickel, and matte black.'
        },
        {
          id: 3,
          name: 'Heavy-Duty Padlocks',
          image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Shiny%20Silver%20Padlock.png',
          description: 'Weather-resistant padlocks with hardened steel shackle. Perfect for gates, storage units, and security applications.'
        },
        {
          id: 4,
          name: 'Door Hardware Sets',
          image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Door%20Fixtures.jpg',
          description: 'Complete door hardware sets including hinges, handles, and lock mechanisms. Available in traditional and contemporary styles.'
        },
        {
          id: 5,
          name: 'Bathroom Fixtures',
          image: 'https://raw.githubusercontent.com/Kagwi/EvergreenSite/refs/heads/main/public/Shiny%20Bathroom%20Elements.png',
          description: 'Complete bathroom fixture sets including towel bars, toilet paper holders, and robe hooks in matching finishes.'
        }
      ]
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  if (!currentCategory) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <Link to="/products" className="text-green-600 hover:text-green-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-16">
        <div className="container mx-auto px-6">
          <nav className="text-green-200 mb-4">
            <Link to="/" className="hover:text-white">Home</Link> / 
            <Link to="/products" className="hover:text-white ml-1">Products</Link> / 
            <span className="ml-1 text-white">{currentCategory.title}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{currentCategory.title}</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            {currentCategory.description}
          </p>
        </div>
      </div>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategory.products.map((product) => (
              <div key={product.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{product.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center w-full justify-center px-6 py-3 bg-green-600 hover:bg-red-600 text-white font-medium rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Purchase Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Need Custom Solutions? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;
