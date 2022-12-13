import React from 'react'
import './Card1.css'

const Card1 = () => {
  return (
    <>
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='left_intro'>
            <h2>
              Design.. Think.. Solve.. <br /> Development..
            </h2>
            <p>
              Beklom Technologies has the greatest tools and people to help you
              grow your business. Does this seem like something you're
              interested in? Start your onboarding process today!.
            </p>
            <div className='get_started'>GET STARTED</div>
          </div>
          <div className='right_intro'>
            <img src='/Images/Home/topheaderbg.png' alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Card1
