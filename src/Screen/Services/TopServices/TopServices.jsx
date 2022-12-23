import React from 'react'
import './TopServices.css'
import { Link } from 'react-router-dom'

const TopServices = () => {
  return (
    <>
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='left_intro'>
            <h1>Services</h1>
            <p>
              Beklom Technologies has the greatest tools and people to help you
              grow your business. Does this seem like something you're
              interested in? Start your onboarding process today!.
            </p>
            <Link to='/getstarted' className='Link_btn'>
              <div className='get_started'>GET STARTED</div>
            </Link>
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
