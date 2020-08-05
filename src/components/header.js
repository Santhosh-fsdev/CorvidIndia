import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons'
import "./Header.css";

export default function Header() {
  const [toggle,setToggle] = useState(false);
  return (
    <>
      <nav className= "navbar " >
        <span className="navbar-toggle" id="js-navbar-toggle" onClick={()=>setToggle(!toggle)} >
        <FontAwesomeIcon icon={faBars} style={{color:"#000000"}} />
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
