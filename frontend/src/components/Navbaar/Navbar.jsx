import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CallIcon from '@mui/icons-material/Call'
import MailIcon from '@mui/icons-material/Mail'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

function Navbar () {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <>
      <div className='navigation_bar'>
        <div className='social_site'>
          <div className='social_mail_container'>
            <div className='social_section'>
              <p className='icon_with_address'>
                <LocationOnIcon /> &nbsp; Beklom Technologies Inc. 4 McHugh Rd,
                Ajax, ON - L1Z 0M8
              </p>
              <p className='icon_with_address'>
                <CallIcon /> &nbsp; +1-647-954-4590
              </p>
              <p className='icon_with_address'>
                <MailIcon /> &nbsp; info@beklom.com
              </p>
            </div>
            <div className='social_media_section'>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>

        <nav className='navbar'>
          <NavLink to='/' className='services'>
            <div className='logo'>
              <img src='/Images/Navbar/BeklomLogo.png' alt='' />
            </div>
          </NavLink>

          <ul
            className={isMobile ? 'nav-links nav-links-mobile' : 'nav-links'}
            onClick={() => setIsMobile(false)}
          >
            <NavLink to='/' className='services'>
              <li>HOME</li>
            </NavLink>
            <NavLink to='/about' className='services'>
              <li>ABOUT US</li>
            </NavLink>
            <NavLink to='/services' className='faqs'>
              <li>SERVICES</li>
            </NavLink>
            <NavLink to='/faq' className='blogs'>
              <li>FAQ</li>
            </NavLink>
            {/* <NavLink to='/contact-us' className='blogs'>
              <li>Contact Us</li>
            </NavLink> */}
            <NavLink to='/blogs' className='contactus'>
              <li>BLOGS</li>
            </NavLink>
            <NavLink to='/contact-us' className='ordernow'>
              <li>Get In Touch</li>
            </NavLink>
            {/* <NavLink to='/onboard' className='ordernow'>
              <li>Get In Touch</li>
            </NavLink> */}
          </ul>
          <button
            className='mobile-menu-icon'
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <i>
                <FeatherIcon icon='x' />
              </i>
            ) : (
              <i>
                <FeatherIcon icon='menu' />
              </i>
            )}{' '}
          </button>
        </nav>
      </div>
    </>
  )
}

export default Navbar
