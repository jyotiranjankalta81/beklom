import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Images/gcmslogo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'
import { useSelector } from 'react-redux'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CallIcon from '@mui/icons-material/Call'
import MailIcon from '@mui/icons-material/Mail'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import GridViewIcon from '@mui/icons-material/GridView'

function Navbar () {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const handleDashboard = () => {
    navigate('/admin-panel/dashboard')
  }

  const addUserAccount = () => {
    navigate('/user-register')
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const [isMobile, setIsMobile] = useState(false)

  const { token, role } = useSelector(state => state.auth)

  const logoutsession = () => {
    var content = window.confirm('Do you really want to logout') // The "hello" means to show the following text
    if (content === true) {
      localStorage.clear()
      window.location.reload()
    }
  }

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
              <li>ABOUT US</li>
            </NavLink>
            <NavLink to='/faqs' className='faqs'>
              <li>SERVICES</li>
            </NavLink>
            <NavLink to='/blogs' className='blogs'>
              <li>FAQ</li>
            </NavLink>
            <NavLink to='/trackform' className='contactus'>
              <li>BLOGS</li>
            </NavLink>
            <NavLink to='/order-now' className='ordernow'>
              <li>Get In Touch</li>
            </NavLink>
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
