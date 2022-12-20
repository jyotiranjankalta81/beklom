import React from 'react'
import Footer from '../../components/Footer/Footer'
import GetStartedForm from './GetStartedForm/GetStartedForm'

const GetStarted = () => {
  return (
    <>
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='left_intro'>
            <h1>Get Started</h1>
            <p>
              Let’s talk about your website or projects. Send us a message and
              wewill be in touch within one business day
            </p>
          </div>
          <div className='right_intro'>
            <img src='/Images/Home/getstartedbg.png' alt='' />
          </div>
        </div>
      </div>
      <GetStartedForm />
      <Footer />
    </>
  )
}

export default GetStarted
