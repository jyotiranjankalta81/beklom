import React, { useState } from "react";
// import Navbar from "../Navbar";
import '../aboutus/aboutus.css'
import Slider from "../home/Slider";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



// import HeaderSec from "../Header Sec/HeaderSec";
const AboutUS = () => {
  const [flag, setFlag] = useState(false)
  const [flag1, setFlag1] = useState(false)
  const [flag2, setFlag2] = useState(false)

  // const handlFlag = () =>{
  //   setFlag(true)
  //   setFlag1(false)
  // }

  return (
    <>
      <Header />
      {/* <Header /> */}
      <div className="About-img-vec11">
        <img src="images/home/vec1.png" alt="" />
      </div>
      <section className="about-section">
        <p className="about-p">Call us now to check how we can help you expand your business and save money at the same time.
          (770) 400 - 0401 is our number and we are available between 9AM to 6PM, Monday - Friday. </p>
        <p className="about-p">We are a leading provider of outsourced services in the area of customer service,
          cold calling, data processing, technical and non-technical<b /> recruitment, social media marketing, digital marketing, etc. </p>
      </section>
      <section className="about-content">
        <div >
          <img className="about-content_Baklom" src="images/dark-line.png" alt="" />
          <img className="about-content_Baklom1" src="images/home/mid-vector.png" alt="" />
          <img className="about-content_Baklom2" src="images/dark-line.png" alt="" />
        </div>
      </section>
      <section className="our-team-section">

        <h1 className="our-team-h1 ">Our Team's</h1>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-4"><img src="images/aboutus/a-img2.png" className="img-detail-img1 img-box1-swap" onClick={() => { setFlag(true); setFlag2(false); setFlag1(false) }} alt="" />
            {
              flag ? <div className="img-position img-title img-detail-box img-box-show1">
                <p className="img-detail-text" >Arslan</p>
                <p className="img-detail-text1">Co-founder</p>
              </div> : <></>
            }</div>
          <div className="col-1"></div>
          <div className="col-4 "><img src="images/aboutus/a-img2.png" className="img-detail-img2 img-box1-swap" onClick={() => { setFlag(false); setFlag2(false); setFlag1(true) }} alt="" />
            {
              flag1 ?
                <div className="img-position img-title img-detail-box img-box-show2">
                  <p className="img-detail-text" >Prateek</p>
                  <p className="img-detail-text1">Co-founder</p>
                </div> : <></>
            }</div>
          <img src="images/aboutus/our-team.png" />
        </div>
        {/* <div className="our-team-direction">
          <div >
          <img src="images/aboutus/a-img2.png" className="img1-class img-position img1" onClick={()=>{setFlag(true);setFlag2(false);setFlag1(false)}} alt="" />
         {
        flag? <div   className="img-position text-show img-title  img-detail-box " style={{color:'#fff',textOverflow:'clip',margin:15}}>
          <p className="img-detail-text" >Akash Singh</p>
          <p className="img-detail-text1">UI UX Designer</p>
         </div> : <></>
         }
         
          </div> 
          <div>
          <img src="images/aboutus/a-img1.png" className="img1-class img-position img2" onClick={()=>{setFlag(false);setFlag2(false);setFlag1(true)}} alt="" />
          {
        flag1? <div   className="img-position text-show img-title img-detail">
           <p className="img-detail-text" >Akash Singh</p>
          <p className="img-detail-text1">UI UX Designer</p>
         </div> : <></>
         }
          </div>
            <div>
           <img src="images/aboutus/a-img2.png" className="img1-class img-position img3" alt="" onClick={()=>{setFlag(false);setFlag2(true);setFlag1(false)}} />
          {
        flag2? <div   className="img-position text-show img-title img-detail">
           <p className="img-detail-text" >Akash Singh</p>
          <p className="img-detail-text1">UI UX Designer</p>
         </div> : <></>
         }
          </div> 

        </div> */}
      </section>
      <section className="about-content">
        <div >
          <img className="about-content_Baklom" src="images/dark-line.png" alt="" />
          <img className="about-content_Baklom1" src="images/home/mid-vector.png" alt="" />
          <img className="about-content_Baklom2" src="images/dark-line.png" alt="" />
        </div>
      </section>
      <Slider />
      <Footer />
    </>
  )
}
export default AboutUS