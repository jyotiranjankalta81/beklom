import React from 'react'
import './Tech.css'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'

const Tech = () => {
  return (
    <>
      <div className='tech_container'>
        <div className='tech_main_container'>
          <div className='left_main_container'>
            <h2>Learn what Beklom Technologies can do for you.....</h2>
            <p>
              Your ideal customer profile, strategic social media management,
              lead generation based on pain points, email and cold call copy,
              rebuttals, etc. are all built from scratch by Beklom Technologies
              with your input and review, so we can ensure that our B2B
              organizations will be effective at opening up conversations with
              your ideal customer targets.
            </p>
            <div className='technology'>
              <div className='button_slide slide_right_services'>
                Customer Services <ArrowCircleRightOutlinedIcon />
              </div>
              <div className='button_slide slide_right_success'>
                Customer Success <ArrowCircleRightOutlinedIcon />
              </div>
              <div className='button_slide slide_right_workforce'>
                Workforce Management Consultancy
                <ArrowCircleRightOutlinedIcon />
              </div>
              <div className='button_slide slide_right_contact'>
                Contact Center Consultancy <ArrowCircleRightOutlinedIcon />
              </div>
              <div className='button_slide slide_right_Cyber'>
                Cyber Security Consulting <ArrowCircleRightOutlinedIcon />
              </div>
              <div className='button_slide slide_right_website'>
                Website Developement <ArrowCircleRightOutlinedIcon />
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
