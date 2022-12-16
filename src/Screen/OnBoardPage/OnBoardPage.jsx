import React from 'react'
import Footer from '../../components/Footer/Footer'

const OnBoardPage = () => {
  return (
    <>
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='left_intro'>
            <h2>Onboarding</h2>
            <p>
              Leading Resource for Recruitment in Technical and Non-Technical
              backgrounds !
            </p>
          </div>
          <div className='right_intro'>
            <img src='/Images/Home/onboardheaderbg.png' alt='' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OnBoardPage
