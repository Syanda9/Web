import React, {useState, useEffect} from 'react';
import './NavBar.css'
import Products from '../Products/Products';
const Navbar =({onNavClick})=>{ 
    useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto'; // Clean up when the component unmounts
    };
  }, []);

  return (
    <div className="navbar">
          
      <div className="navbar-center">
        <div className="navbar-links-top">
        <input type="text" placeholder="Search..." className="search-bar" />
          <a href="#" className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('home');}}>Home</a>
          <a href="#" className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('shop');}}>SHOP</a>
          <a href="#" className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('shopAll');}}> Shop All</a>
          <a href="#" className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('recipe');}}>Recipe Blog</a>
          <a href="#" className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('services');}}>Services</a>
          <a href="#" className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('h');}}>PRICE LIST</a>
          <a href="#" className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('hme');}}>Shipping Information</a>
          <a href="#" className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('he');}}>Track My Order</a>
        </div>
        <div className="navbar-links-bottom">
          <a href="#" className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('contacts');}}>Contact</a>
          <a href="#" className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('ho');}}>Log in</a>
          <a href="#" className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('cart');}}>Cart (0)</a>
          <a href="#" className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('ho');}}>Checkout</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

