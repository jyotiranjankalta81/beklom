import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div>
      <footer className='baklom_footer'>
        {/* <img className='baklom_footer_upper' src={require("./Footer_Upper_Pic.png")} /> */}
        <div className="footer_img">
          <img src="images/logo.png" alt="" className='footer_logo' />

          <div className="footer_icons">
            <a href='/https://www.facebook.com/beklominc' className='baklom_footer3'>
              <img src={require('./F_bak3.png')} alt="fb" />
            </a>
            {/* <a href='https://www.linkedin.com/company/beklom-inc/' className='baklom_footer3'>
              <img src={require('./F_bak4.png')} alt="Instagram" />
            </a> */}
            <a href='/https://www.linkedin.com/company/beklom-inc/' className='baklom_footer3'>
              {/* <img src={require('./F_bak5.png')} alt="Twitter" /> */}
              <LinkedInIcon sx={{ transform: "scale(2.2)", color: '#FFFFFF' }} />

            </a>
          </div>
        </div>

        <div className="footer_links">
          <section className='map_section'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15258072.40570261!2d82.75252935!3d20.98801345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a272531e0101161%3A0x86b40035be7b9641!2sGurushree%20Minerals%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1660806423162!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </section>


          <div className='link_section'>
            <h1 className='link1_h1'>Links</h1>

            <a href='/'>Terms & Conditions</a>
            <a href='#!'>Privacy Policy</a>
            <a href="/" > Partner with us </a>
            <a href='#!'>Admin Login </a>
          </div>

          <div className='get_in_section'>
            <h1 className='link1_h1' >Get In Touch</h1>

            <p className='footer_info'>
              <img src="images/footer/Call.png" /> <a href="tel:+1 604 780 5352">+1-647-468-7713
                <br /> &nbsp; &nbsp; &nbsp; +1-647-954-4590</a>
            </p>

            <p className='footer_info'>
              <img src="images/footer/Email.png" /> <a href="mailto:Beklom55@GMAIL.COM">info@beklom.com</a>

            </p>

            <p className='Footer_Location'>
              <img src="images/footer/Location.png" /> <a href="/">Beklom Technologies Inc.
              <br />
                 &nbsp; &nbsp; &nbsp;   4 McHugh Rd,
                Ajax, ON - L1Z 0M8
              </a>

            </p>
          </div>

          <div className="subscribe_section">
            <h1 className='link1_h1'>Subscribe to Newsletter</h1>
            <input type="email" id="form5Example21" className="Footer_input_bak" placeholder='Email' /> <br />
            <div className='home_Footer11_button'>
              <button className='Footer_Btn_bak'>Subscribe</button>
            </div>
          </div>



        </div>
      </footer>



    </div>
  )
}

export default Footer