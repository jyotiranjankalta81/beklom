import React from 'react'
import './AboutSection.css'

const AboutSection = () => {
  return (
    <>
      <div className='about_container'>
        <div className='about_main_container'>
          <div className='about_left_container'>
            <img src='/Images/About/aboutleftbg.png' alt='' />
          </div>
          <div className='about_right_container'>
            <h3>About</h3>
            <p>
              Call us now to check how we can help you expand your business and
              save money at the same time. (770) 400 - 0401 is our number and we
              are available between 9AM to 6PM, Monday - Friday.
            </p>
            <p>
              We are a leading provider of outsourced services in the area of
              customer service, cold calling, data processing, technical and
              non-technical recruitment, social media marketing, digital
              marketing, etc.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection
