import React from 'react';
import './Products.css';

import body from '../assets/body.jpg'
import face from '../assets/face.jpg'
import Pure1 from '../assets/Pure1.jpg'
import Pure2 from '../assets/Pure2.jpg'


const Products = ({ onAddToCart, onNavClick }) => {
  // Sample data for products
  const products = [
    { id: 1, name: '  Body Cream', retailPrice: 50, wholesalePrice: 45, image: body},
    { id: 2, name: 'Face Cream', retailPrice: 75, wholesalePrice: 70, image:  face  },
    { id: 3, name: 'CBD infused Raw shea Butter', retailPrice: 30, wholesalePrice: 28, image: Pure1 },
    { id: 4, name: 'Raw Sha Butter', retailPrice: 100, wholesalePrice: 95, image: Pure2 },
    // Add more products as needed
  ];

  return (
    <div className="products-container">
      <h2 className="products-title">Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* Placeholder for product image */}
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <div className="product-prices">
              <p className="retail-price">Retail: ${product.retailPrice}</p>
              <p className="wholesale-price">Wholesale: ${product.wholesalePrice}</p>
            </div>
            <a href="#" className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('shopAll');}}>
              <button onClick={() => onAddToCart({ id: product.id, name: product.name, price: product.retailPrice })}>
              Add to Cart
              </button>
              </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
