import React, { useState } from 'react';

import "./Header.css";

export default function Header() {
  const [toggle,setToggle] = useState(false);
  const [sticky,setSticky] = useState(false);

  const scroll = () =>{
      if(window.pageYOffset >= 300){
            setSticky(true);
      }
      else{
          setSticky(false);
      }
  }
  return (
    <>
      <nav className= { sticky ? "navbar sticky":"navbar "} onScroll={scroll} >
        <span className="navbar-toggle" id="js-navbar-toggle" onClick={()=>setToggle(!toggle)} >
            <i className="fa fa-bars" aria-hidden="true" style={{color:"#000000"}}></i>
        </span>
        <a href="#" className="logo">Corvid Consulting</a>
        <ul className={ toggle ? " main-nav active":"main-nav"} id="js-menu">
            <li>
                <a href="#" className="nav-links">Home</a>
            </li>
            <li>
                <a href="#" className="nav-links">Products</a>
            </li>
            <li>
                <a href="#" className="nav-links">About Us</a>
            </li>
            <li>
                <a href="#" className="nav-links">Contact Us</a>
            </li>
            <li>
                <button>Request Demo</button>
            </li>
        </ul>
    </nav>
    </>
  )
}
