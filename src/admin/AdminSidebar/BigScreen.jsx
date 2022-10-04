import React from 'react'
import logoadmin from '../assets/images/logoadmin.png'
import { Link } from 'react-router-dom';

const BigScreen = () => {
    return (
        <>
            <div className="adminsidebar">
                <img src={logoadmin} alt="logo" />
                <Link to="/adduser"><h3>Manage User </h3></Link>
                <Link to="/managepages"><h3>Manage Pages </h3></Link>
                <Link to="/getonboard"><h3>Get Onboard </h3></Link>
                <Link to="/texttestomonial"><h3>Text Testimonials </h3></Link>
                <Link to="/partnerwithus"><h3>Partner with us </h3></Link>
                <Link to="/contactus"><h3>Contact Us </h3></Link>
                <Link to="/managenews"><h3>Manage Newsletter </h3></Link>
                <Link to="/"><h3>Logout </h3></Link>

            </div>
        </>
    )
}

export default BigScreen