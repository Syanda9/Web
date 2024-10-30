// Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Price: ${item.price}</span>
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <strong>Total: ${getTotalPrice()}</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
