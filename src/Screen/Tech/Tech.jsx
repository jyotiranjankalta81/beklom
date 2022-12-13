import React from 'react'
import './Tech.css'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'

const Tech = () => {
  return (
    <>
      <div className='tech_container'>
        <div className='tech_main_container'>
          <div className='left_main_container'>
            <h3>Learn what Beklom Technologies can do for you.....</h3>
            <p>
              Your ideal customer profile, strategic social media management,
              lead generation based on pain points, email and cold call copy,
              rebuttals, etc. are all built from scratch by Beklom Technologies
              with your input and review, so we can ensure that our B2B
              organizations will be effective at opening up conversations with
              your ideal customer targets.
            </p>
            <div className='technology'>
              <div className='tech_cards' style={{ border: 'none' }}>
                <div
                  className='tech_card'
                  style={{ background: '#7FD7F8', border: 'none' }}
                >
                  Customer Services
                  <ArrowCircleRightOutlinedIcon />
                </div>
              </div>
              <div className='tech_cards'>
                <div className='customer_success'></div>
                <div className='tech_card'>
                  Customer Success
                  <ArrowCircleRightOutlinedIcon />
                </div>
              </div>
              <div className='tech_cards'>
                <div className='work_force'></div>
                <div className='tech_card'>
                  Workforce Management Consultancy
                  <ArrowCircleRightOutlinedIcon />
                </div>
              </div>
              <div className='tech_cards'>
                <div className='contact_center'></div>
                <div className='tech_card'>
                  Contact Center Consultancy
                  <ArrowCircleRightOutlinedIcon />
                </div>
              </div>
              <div className='tech_cards'>
                <div className='cyber_security'></div>
                <div className='tech_card'>
                  Cyber Security Consulting
                  <ArrowCircleRightOutlinedIcon />
                </div>
              </div>
              <div className='tech_cards' style={{ border: 'none' }}>
                <div
                  className='tech_card'
                  style={{ background: '#7CBD5A', border: 'none' }}
                >
                  Website Developement
                  <ArrowCircleRightOutlinedIcon />
                </div>
              </div>
            </div>
          </div>
          <div className='right_main_container'>
            <img src='/Images/Home/techimg.png' alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Tech
