import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hero">
      <div className="hero-header">
        <h1>ARSEMA PURE</h1>
        <p>naturals</p>
      </div>
      <div className="nav-links">
        <a href= "jj">All Collections</a>
        <a href="/oils-butters"></a>
        <a href="/workshops">Body Cream</a>
        <a href="/bases-soaps"></a>
        <a href="/business-box"></a>
        <a href="/cosmetic-waxes">Face Cream</a>
        <a href="/essential-oils"></a>
        <a href="/fragrance-oils">Business</a>
        <a href="/soapmaking-supplies"></a>
        <a href="/salts">Special Offers</a>
        <a href="/molds-tools"></a>
        <a href="" ></a>
        <a href="/speciality-ingredients"></a>
        <a href="/bath-bomb-supplies"></a>
        <a href="/special-offers"></a>
        <a href="/oils-essential-oils"></a>
      </div>

      {/* Hamburger Menu */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="/collections">All Collections</a>
          <a href="/oils-butters">Oils and Butters</a>
          <a href="/workshops">Workshops</a>
          <a href="/bases-soaps">Bases and Soaps</a>
          <a href="/business-box">Business in a Box</a>
          <a href="/cosmetic-waxes">Cosmetic Waxes</a>
          <a href="/essential-oils">Essential Oils and Hydrosols (Floral Water)</a>
          <a href="/fragrance-oils">Fragrance Oils</a>
          <a href="/soapmaking-supplies">Soapmaking Supplies</a>
          <a href="/salts">Salts</a>
          <a href="/molds-tools">Molds, Tools & Accessories</a>
          <a href="/powders-clays">Powders, Clays and Micas</a>
          <a href="/speciality-ingredients">Speciality/Functional Ingredients</a>
          <a href="/bath-bomb-supplies">Bath Bomb Supplies</a>
          <a href="/special-offers">Special Offers</a>
          <a href="/oils-essential-oils">Oils & Essential Oils</a>
        </div>
      )}
    </div>
  );
};

export default Hero;
