import React, {useState} from 'react'
import NavBar from './NavBar/NavBar'
import Header from './Header/Header'
import Contacts from './Contacts/Contacts'
import Hero from './Hero/Hero'
import Products from './Products/Products'
import Footer from './Footer/Footer'
import Services from './Services/Services'
import Cart
 from './Cart/Cart'
function App(){

  const [sections, setSections] = useState({
         products: true,
         header:true,
         contacts: true,
         services:true,
         cart:false,
  });
    const handleNavClick = (section) =>{
    const newSections={products:false, header:false, contacts:false, services:false,cart: false};

    if (section === 'shop'){
      newSections.products =true;

    }
    else if(section==='home'){
      newSections.header=true;
      newSections.products=true;
      newSections.services=true;
      newSections.contacts=true;
    }
    else if (section==='services'){
      newSections.services=true;
      newSections.contacts=true;
      newSections.header=false;
      newSections.products=false;
    }
    else if (section==='contacts'){
      newSections.contacts=true;
      newSections.services=false;
      newSections.header=false;
      newSections.products=false;
    }
    if (section === 'shopAll'){
      newSections.products =true;
      newSections.services=true;
      newSections.header=false;
      newSections.contacts=false;
    }
    if(section === 'cart'){
      newSections.cart=true;
    }

    setSections(newSections);
  };
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        // Increase quantity if item already exists in the cart
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item to the cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove items from the cart
  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return(
    
    <div >
       <NavBar onNavClick={handleNavClick}/>
        <Hero/>
        {sections.header && <Header onNavClick={handleNavClick}/>}
        {sections.products && <Products  onAddToCart={handleAddToCart} onNavClick={handleNavClick}  />}
        {sections.services && <Services/>}
         {sections.contacts && <Contacts/>}
         {sections.cart && <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} /> } 
         <Footer/>
    </div>
  );
}

export default App
