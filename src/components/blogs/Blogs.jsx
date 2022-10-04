import React from "react";
// import Navbar from "../Navbar"
import "../blogs/blogs.css"
import Pagination from "../pages/Pagination";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Blogs = () => {
    return (
        <>
            <Header />
            <div className="About-img-vec11">
                <img src="images/home/vec1.png" alt="" />
            </div>
            <section>
                <Pagination />
            </section>
            <section className="sec2-blogs-center">
                <div >
                    <img src="images/home/line.png" />
                    <img src="images/home/mid-vector.png" />
                    <img src="images/home/line.png" />
                </div>
            </section>

            <section id="faq_page">
                <div className="frequently-bg" >
                    <div className="frequently-content">
                        <h2 className="frequently-h2">FREQUENTLY ASKED QUESTIONS</h2>
                        <img src="images/blogs/fre-line.png" />

                        <ul id="accodion">
                            <li>
                                <label htmlFor="first"><span>+&nbsp;&nbsp;</span> What comes with the domain name?</label>
                                <input type="radio" name="accordion" id="first" checked />
                                <div className="content">
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum. Doloremque facilis voluptas odit. Explicabo consequatur repellat delectus pariatur sed.</p> */}
                                    <p>A domain name is like your street address; its what comes after the www. in a web address. Web hosting is the space you buy on the internet to build your website. A domain name includes a websites name and a domain extension.</p>
                               
                                </div>
                            </li>


                            <li>
                                <label htmlFor="second"><span>+&nbsp;&nbsp;</span>What comes with the domain name?</label>
                                <input type="radio" name="accordion" id="second" />
                                <div className="content">
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum. Doloremque facilis voluptas odit. Explicabo consequatur repellat delectus pariatur sed.</p> */}
                                    <p>A domain name is like your street address; its what comes after the www. in a web address. Web hosting is the space you buy on the internet to build your website. A domain name includes a websites name and a domain extension.</p>
                                </div>
                            </li>


                            <li>
                                <label htmlFor="third"><span>+&nbsp;&nbsp;</span> Can I transfer my domain to another registrar after I buy it?</label>
                                <input type="radio" name="accordion" id="third" />
                                <div className="content">
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum. Doloremque facilis voluptas odit. Explicabo consequatur repellat delectus pariatur sed.</p> */}
                                    <p>To transfer your domain name to another registrant, you can initiate a change of registrant by contacting your current registrar. Your registrar will then ask for your confirmation via a secure mechanism which typically will take the form of an email to the registered name holder.</p>
                                </div>
                            </li>




                            <li>
                                <label htmlFor="fourth"><span>+&nbsp;&nbsp;</span> Do I also get the other domain extensions when I purchase a domain from HugeDomains.com?</label>
                                <input type="radio" name="accordion" id="fourth" />
                                <div className="content">
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum. Doloremque facilis voluptas odit. Explicabo consequatur repellat delectus pariatur sed.</p> */}
                                    <p>No. Your purchase is strictly for the domain purchased from HugeDomains.com. If you are looking for the other gTLDs of the domain name, you will need to buy those domains separately.</p>
                                </div>
                            </li>



                            <li>
                                <label htmlFor="fifth"><span>+&nbsp;&nbsp;</span> Can I make an offer on the domain?</label>
                                <input type="radio" name="accordion" id="fifth" />
                                <div className="content">
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum. Doloremque facilis voluptas odit. Explicabo consequatur repellat delectus pariatur sed.</p> */}
                                   <p> Ask the person who owns the domain to give you a price first, you don't want to start too high. Once you know who the owner is, you can either reach out by phone or email to start the conversation. You may notice on WhoIs.net that you can make an offer to the owner right then and there. </p>
                                </div>
                            </li>
                        </ul>



                    </div>
                </div>
            </section>
            <section className="sec2-blogs-center">
                <div >
                    <img id="blogs_sec2_img1" src="images/home/line.png" />
                    <img className="blogs_sec2_img2" src="images/home/mid-vector.png" />
                    <img className="blogs_sec2_img3" src="images/home/line.png" />
                </div>
            </section>
            <section>
                <div className="row justify-content-start">
                    <div className="col-4">

                        <img src="images/blogs/envelope.png" />
                        <img src="images/blogs/env.png" className="env-img" />
                    </div>
                    <div className="col-2"></div>
                    <div className="col-4 sub-box">
                        <h3 id="blogs-Subs">Subscribe to Our  Newsletter</h3>
                        <div className="blog-box-size">
                            <input type="text" className="form-control search" placeholder='' />
                            <button className='Blogs-class-btn'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>

        </>
    )
}
export default Blogs