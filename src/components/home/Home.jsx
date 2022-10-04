import * as React from 'react';
import '../home/home.css'
import Navbar from "../Navbar/Navbar";
import { Modal, Button } from 'react-bootstrap';
import Carousel from 'react-grid-carousel'
import OurServices from "../pages/OurServices";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Slider from "./Slider";
import WebsitePopup from './WebsitePopup';
import Footer from '../Footer/Footer';


const Home = () => {

    const [popup, setPopup] = React.useState();


    return (
        <>

            < div className="Home_Bakl">
                <Header />

                <div className="home-center-content">
                    <p className="center-paragraph">
                        {/* Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each location being a data center. */}
                        Beklom Technologies has the greatest tools and people to help you grow your business. Does this seem like something you're interested in?

                        Start your onboarding process today!.

                    </p>
                </div>


                <section className="Bak_Img_Section">
                    <img src="images/home/Bak_Img.png" className='Bak_Img' />
                    <img className='Bak_Img1' src="images/home/Bak_Img1.png" />
                    <img className='Bak_Img2' src="images/home/Bak_Img2.png" />
                </section>


                <section>
                    <div className="why-choose-us">
                        <div className="why-choose-div">
                            <div className="Aero2"></div>
                            <img className='Aero1' src={require("./Aero1.png")} />
                            <img className='Aero3' src={require("./Aeroplane.png")} />
                            <Link to="/onboarding" style={{ textDecoration: "none" }}>
                                <button className="Aero_btn">Ready to get onboard</button>
                            </Link>
                        </div>
                        <div className="choose-div">
                            <h1 className="choose-h1">Why Choose US</h1>
                            <p className="choose-p">You can think of Beklom Technologies as a one-stop shop for all of your outsourced company development needs. Web development, Social Media management, US Taxation, Book-keeping, Technical/Non-Technical recruitment, Graphic Designing, and Lead generation are all areas in which we specialize. After that, we perform all of the cold outreach to qualify prospects, generate interest, and open sales conversations for you.</p>

                        </div>

                    </div>
                    <section className="Bak_Img_Section">
                        <img className='Bak_Img' src="images/home/Bak_Img.png" />
                        <img className='Bak_Img1' src="images/home/Bak_Img1.png" />
                        <img className='Bak_Img2' src="images/home/Bak_Img2.png" />
                    </section>
                </section>

                <section className="Our_Services">
                    <div className="Our_Service_img">
                        <h2>Our Sevices</h2>
                        <p>Your ideal customer profile, strategic social
                            media management, lead generation based on pain
                            points, email and cold call copy, rebuttals, etc. are
                            all built from scratch by Beklom Technologies with your input
                            and review, so we can ensure that our B2B organizations will
                            be effective at opening up conversations with your ideal customer targets.</p>
                    </div>

                    <div className="Our_Service_Card">
                        <div className="service_sub_card">
                            <div className="card1" onClick={() => setPopup(true)}>
                                <img src="images/home/Website.png" alt="" />
                                <p>Customer Service</p>
                                {/* <p>Developement</p> */}
                            </div>
                            {popup && <WebsitePopup Popup={setPopup} />}
                            <div className="card1 card2_bg">
                                <img src="images/home/Setting Computer.png" alt="" />
                                <p>Customer Success </p>
                                {/* <p>Recuriment</p> */}
                            </div>
                            <div className="card1 card2_bg">
                                <img src="images/home/Graphic Design.png" alt="" />
                                <p>Workforce Management Consultancy</p>
                                {/* <p>Designing</p> */}
                            </div>

                        </div>
                        <div className="service_sub_card">
                            <div className="card1 card3_bg">
                                <img src="images/home/Graphic Design.png" alt="" />
                                <p>Contact Center Consultancy</p>
                                {/* <p>Developement</p> */}
                            </div>
                            <div className="card1 card4_bg">
                                <img src="images/home/Website.png" alt="" />
                                <p>Cyber Security Consulting</p>
                                {/* <p>Developement</p> */}

                            </div>
                            <div className="card1 card5_bg">
                                <img src="images/home/Setting Computer.png" alt="" />
                                <p>Website Developement</p>
                                {/* <p>Developement</p> */}
                            </div>

                        </div>
                    </div>


                </section >

                <section className="Bak_Img_Section">
                    <img src="images/home/Bak_Img.png" className='Bak_Img' />
                    <img className='Bak_Img1' src="images/home/Bak_Img1.png" />
                    <img className='Bak_Img2' src="images/home/Bak_Img2.png" />
                </section>

                {/* About Us */}


                < section >
                    <div className="About_us">
                        <div className="choose-div_Bak">
                            <h1 className="choose-h1_Bak">About US</h1>
                            <p className="choose-p_Bak">Beklom Technologies has the greatest tools and people to help you grow your business. Does this seem like something you're interested in? You can think of Beklom Technologies as a one-stop shop for all of your outsourced company development needs.After that, we perform all of the cold outreach to qualify prospects, generate interest, and open sales conversations for you.</p>

                            <Link to="/aboutus" style={{ textDecoration: "none" }}>
                                <button className="choose_Button" >Read More</button>
                            </Link>
                        </div>


                        <div className="About_us_img">
                            <img src='images/home/About-img.png' />
                            <div className="choose-img"></div>
                        </div>
                    </div>

                </section >
                <Slider />

            </div>
            <Footer />
        </>





    )
}
export default Home;