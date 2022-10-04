import React from "react";
// import Navbar from "../Navbar";
import '../partnerwith/partnerwith.css';
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";

const Partnerwith = () => {
    return (
        <>
            <div className="bg-header">
                 <Navbar /> 
                <section className="partner-header">
                    <h1 className="partner-header-h1">
                        Get Start
                    </h1>
                    <p className="header-p">Let’s talk about your website or projects.
                        Send us a message and we </p>
                    <p className="header-p1">will be in touch within one business day</p>
                </section>
                <img src="images/onboarding/vector1.png" className="img-vec-line" alt=""/>
            </div>

            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 82, marginBottom: 10 }}> */}
            <div className="partner_image_sec">
                <img className="partner_image_sec1" src="images/home/line.png" alt=""/>
                <img className="partner_image_sec2" src="images/home/mid-vector.png" alt=""/>
                <img className="partner_image_sec3" src="images/home/line.png" alt=""/>
            </div>
            <section className="form-section">
                <p className="partner-p">Call us now to check how we can help you expand your business and save money at the same time.
                    (770) 400 - 0401 is our number and we are available between 9AM to 6PM, Monday - Friday. </p>
                <p className="partner-p">We are a leading provider of outsourced services in the area of customer service,
                    cold calling, data processing, technical and non-technical recruitment, social media marketing, digital marketing, etc. </p>
                <div >
                    <form className="form-sec">
                        <div className="row">
                            <div className="col-1">
                                <img src="images/onboarding/name-icon.png" className="img-size" alt=""/>
                            </div>
                            <div className="col-11">
                                <input className="form-input" type="text" id="fname" name="firstname" placeholder="Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <img src="images/onboarding/phone-icon.png" className="mobile-img" alt="" />
                            </div>
                            <div className="col-11">
                                <input className="form-input" type='password' id="password" name="password" placeholder="Password" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <img src="images/onboarding/email-icon.png" className="email-img" alt=""/>
                            </div>
                            <div className="col-11">
                                <input className="form-input" type="email" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                    </form>
                    <button type="btn" className="ptnr_submit" 
                    >Submit</button>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Partnerwith