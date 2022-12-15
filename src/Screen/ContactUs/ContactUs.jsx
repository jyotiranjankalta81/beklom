import React from 'react'
import ContactForm from './ContactForm/ContactForm'

const ContactUs = () => {
  return (
    <>
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='left_intro'>
            <h2>Contact Us</h2>
            <p>
              Let’s talk about your website or projects. Send us a message and
              wewill be in touch within one business day
            </p>
            <div className='get_started'>GET STARTED</div>
          </div>
          <div className='right_intro'>
            <img src='/Images/Services/servicerightbg.png' alt='' />
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  )
}

export default ContactUs
