import React from "react";
import'./Header.css'

const Header =({onNavClick}) =>{

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