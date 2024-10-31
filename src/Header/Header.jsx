import React,{useEffect} from "react";
import'./Header.css'

const Header =({onNavClick}) =>{
useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto'; // Clean up when the component unmounts
    };
  }, []);

 return(
    <div className='header' >
        <div className = "header-contents">
            <h2>Shop our Selection of natural products</h2>
            <a href="#" className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('shopAll');}}><button>Shop Here</button></a>
            </div>
    </div>
            
 )
}
export default Header
