import React from 'react'
import './ContactForm.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CallIcon from '@mui/icons-material/Call'
import MailIcon from '@mui/icons-material/Mail'
import TextField from '@mui/material/TextField'
const ContactForm = () => {
  return (
    <>
      <div className='contact_form_container'>
        <div className='contact_form_main_container'>
          <div className='left_contact_form'>
            <div className='top_contact_section'>
              <h3>Contact Information</h3>
              <p>
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
            </div>
            <div className='middle_contact_section'>
              <p>
                <CallIcon /> +0123 4567 8910
              </p>
              <p>
                <MailIcon /> hell@beklom.com
              </p>
              <p>
                <LocationOnIcon /> 102 Street 2714 Don
              </p>
            </div>
            <div className='bottom_contact_section'>
              <div className='left_bottom_contact'>
                <div className='icon_image'>
                  <img src='/Images/Contact/instagram.png' alt='' />
                </div>
                <div className='icon_image'>
                  <img src='/Images/Contact/facebook.png' alt='' />
                </div>
                <div className='icon_image'>
                  <img src='/Images/Contact/linkedin.png' alt='' />
                </div>
                <div className='icon_image'>
                  <img src='/Images/Contact/twitter.png' alt='' />
                </div>
              </div>
              <div className='right_bottom_contact'>
                <div className='right_inside_sectionn'></div>
              </div>
            </div>
          </div>
          <div className='right_contact_form'>
            <TextField
              id='standard-basic'
              label='Standard'
              variant='standard'
            />
            <TextField
              id='standard-basic'
              label='Standard'
              variant='standard'
            />
            <TextField
              id='standard-basic'
              label='Standard'
              variant='standard'
            />
            <TextField
              id='standard-basic'
              label='Standard'
              variant='standard'
            />
            <TextField
              id='standard-basic'
              label='Standard'
              variant='standard'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
