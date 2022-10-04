import React from 'react'
import "./HeaderSec.css";
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";
function HeaderSec() {
  return (
    <div className="section1-bg2">
     <Navbar />
    <div className="home" >
        <h1 className="home-h1-color">Beklom Technologies</h1>
        
        <Link to="/getstart"> <button type="btn" className="btn btn-primary border-0">Get Started</button></Link>
       
    </div>

</div>
  )
}

export default HeaderSec;