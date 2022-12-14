import React from 'react'
import './TopServices.css'

const TopServices = () => {
  return (
    <>
      {/* <div className='service_container'>
        <div className='service_main_container'>
          <div className='left_service'>
            <h3>Services</h3>
            <p>
              Beklom Technologies has the greatest tools and people to help you
              grow your business. Does this seem like something you're
              interested in? Start your onboarding process today!.
            </p>
            <div className='get_started'>GET STARTED</div>
          </div>
          <div className='right_service'></div>
        </div>
      </div> */}
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='left_intro'>
            <h2>Services</h2>
            <p>
              Beklom Technologies has the greatest tools and people to help you
              grow your business. Does this seem like something you're
              interested in? Start your onboarding process today!.
            </p>
            <div className='get_started'>GET STARTED</div>
          </div>
          <div className='right_intro'>
            <img src='/Images/Services/servicerightbg.png' alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default TopServices
