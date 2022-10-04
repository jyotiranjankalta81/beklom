import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom'
import '../contact/contact.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import EmailIcon from '@mui/icons-material/Email';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Footer from "../Footer/Footer";


const Contact = () => {

  const getwidth = () => {
    if (window.innerWidth < 580) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>

      {/* <Header /> */}
      <div className="section2-bg">
        <Navbar />
        <div className="home" >
          <h1 className="home-h1-color">Contact Us</h1>
          <div className='Home_Baklom_button11'>
            {/* <Link to="/getstart"> <button type="btn" className="btn btn-primary border-0">Get Started</button></Link> */}
            <h3 className="contact_h3">
              Let’s talk about your website or projects. Send us a message and we
              <br /> will be in touch within one business day
            </h3>
          </div>
        </div>
      </div>
      <div className="row rounded section-top contact-form">
        <div className="col-1"></div>
        <div className="col-5 shadow">
          <div >
            <h3 className="h1-text">Contact Information</h3>

            {/* <div className="image-space">
              <img className="image-space1" src="images/contactus/line.png" alt="" />
              <img className="image-space2" src="images/contactus/down.png" alt="" />
              <img className="image-space3" src="images/contactus/line.png" alt="" />
            </div> */}
            <div className='dialog_divider'>
              <div className='divider_div'></div>
              <ArrowDropDownCircleIcon sx={{ color: "#557097",transform:"scale(1.5)" }} />
              <div className='divider_div'></div>
            </div>

            <div class="container my-3 d-flex justify-content-center">

              {/* <form className=" row">
                <div className="row column-change" >
                  <input className="input-field" type="text" id="fname" name="firstname" placeholder="Name.." />
                </div>
                <div className="row column-change"  >
                  <input className="input-field" type='email' id="email" name="email" placeholder="Email.." />
                </div>
                <div className="row column-change">
                  <textarea className="form-textarea" id="Message" name="textarea" placeholder="Message" />
                </div>
                <button type="btn" className="btn_contact-submit">Submit</button>
              </form> */}
              <div className="get_starts" >
                <form className={getwidth() ? "form-sec_get" : "form-sec_contact"}>
                  <div className={getwidth() ? "get_row" : "input_divs"}>
                    {/* <PersonIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} /> */}
                    <input className={getwidth() ? "form_input_get" : "form-input"} type="text" id="fname" name="firstname" placeholder="Name" />
                  </div>
                  <div className={getwidth() ? "get_row" : "input_divs"}>
                    {/* <EmailIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} /> */}
                    <input className={getwidth() ? "form_input_get" : "form-input"} type="email" id="fname" name="firstname" placeholder="Email" />
                  </div>
                  <div className={getwidth() ? "get_row" : "input_divs"}>
                    {/* <AccountBoxIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} /> */}
                    <textarea className={getwidth() ? "form_input_get" : "form_textarea_onboard"} id="email" name="textarea" placeholder="Tell Me About Yourself" />
                  </div>

                  <button type="btn" className={getwidth() ? "get_btn" : "btn_get_submit"}
                  >Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 shadow">
          <div >
            <h3 className="h1-text">Get in touch</h3>

            {/* <div className="image-space space">
              <img className="image-space4" src="images/contactus/line.png" alt="" />
              <img className="image-space5" src="images/contactus/down.png" alt="" />
              <img className="image-space6" src="images/contactus/line.png" alt="" />
            </div> */}
            <div className='dialog_divider'>
              <div className='divider_div'></div>
              <ArrowDropDownCircleIcon sx={{ color: "#557097",transform:"scale(1.5)" }} />
              <div className='divider_div'></div>
            </div>


            <div className="get_in_touch">
              <div className="get_in_touch_img_div">
                <img src="images/contactus/all.png" className="contact_img" />
              </div>
              <div className="contact_div">
                <LocationOnIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                <p className="get-touch">Beklom Technologies Inc.
                  4 McHugh Rd,
                  <br />
                  &nbsp;Ajax, ON - L1Z 0M8</p>


              </div>
              <div className="contact_div">
                <StayCurrentPortraitIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }}/>
                <p className="get-touch">+1-647-468-7713
                    <br />
                    +1-647-954-4590
                  </p>
              </div>
              <div className="contact_div">
                <EmailIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                <p className="get-touch">info@beklom.com</p>
              </div>
            </div>
            {/* <div className="container my-3 d-flex justify-content-center sec2">

              <div className=" row">
                <div className="row ">
                  <div className="get-touch-space">
                    <img src="images/contactus/all.png" className="all_img" />
                  </div>
                </div>
                <div className="img-btw">
                  <img src="images/contactus/map.png" className="contact-img" />
                  <p className="get-touch">Beklom Technologies Inc.
                    4 McHugh Rd,
                    <br />
                    &nbsp;Ajax, ON - L1Z 0M8</p>
                </div>
                <div className="img-btw">
                  <img src="images/contactus/phone.png" className="contact-img" />
                  <p className="get-touch1">+1-647-468-7713
                    <br />
                    +1-647-954-4590

                  </p>
                </div>
                <div className="img-btw">
                  <img src="images/contactus/email.png" className="contact-email" />
                  <p className="get-touch2">info@beklom.com</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <Footer/>
    </>
  )
}
export default Contact