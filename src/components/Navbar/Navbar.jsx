import React, { useState } from 'react'
import "./Navbar.css";
import { NavLink,Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
// import SpecialServiceCard from "./SpecialServiceCard";
// import jwt_decode from "jwt-decode";

export default function NavbarJS() {
  const [hamberger, setHamberger] = useState(false);
  const toggle = () => setHamberger(!hamberger);

  const [scroll,setScroll]= useState(false);

     window.onscroll = function() {
         var distanceScrolled = document.documentElement.scrollTop;
         if (distanceScrolled > 130) {
         //   do something...
         // alert("someone started scrolling");
         setScroll(true);
         }
     }

  return (
    <div>
      <div className={scroll ? "navbar1": 'navbar2'}>
        <div
          className={hamberger ? "navbarResponsive" : "navbar"}
          onClick={() => setHamberger(false)}
        >
          <Link to="/">
            <img
              src="images/logo.png"
              className='logo_backlon'
              alt="_"
            />
          </Link>
          {/* <div className=''>
          </div> */}
          <NavLink to="/" className="nav-link" >Home</NavLink>
          <NavLink to="/aboutus" className="nav-link"  >About</NavLink>
          {/* {popup && <SpecialServiceCard Popup={setPopup} />} */}
          <NavLink to="/services" className="nav-link" >Services</NavLink>
          <Link to="#faq_page" className="nav-link" >FAQ</Link>
          <NavLink to="/blogs" className="nav-link" >Blogs</NavLink>
          <NavLink to="/contact" className="nav-link" >Contact</NavLink>
        </div>
        <button className="mobile_menu_icon" onClick={toggle}>
          {hamberger ? "X" : <FaBars />}
        </button>
      </div>
    </div>
  )
}
