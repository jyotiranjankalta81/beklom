import React from 'react'
import Footer from '../../components/Footer/Footer'
import FaqContent from './FaqContent/FaqContent'

const FAQ = () => {
  return (
    <>
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='left_intro'>
            <h1>FAQ</h1>
            <p>
              Leading Resource for Recruitment in Technical and Non-Technical
              backgrounds !
            </p>
          </div>
          <div className='right_intro'>
            <img src='/Images/FAQ/faqbg.png' alt='' />
          </div>
        </div>
      </div>
      <FaqContent />
      <Footer />
    </>
  )
}

export default FAQ
