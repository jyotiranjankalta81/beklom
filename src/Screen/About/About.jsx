import React from 'react'
import Footer from '../../components/Footer/Footer'
import AboutSection from './AboutSection/AboutSection'
import CustomerReviews from './CustomerReview/CustomerReviews'
import OurTeam from './OurTeam/OurTeam'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='left_intro'>
            <h2>About us</h2>
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
            <img src='/Images/About/aboutrightbg.png' alt='' />
          </div>
        </div>
      </div>
      <AboutSection />
      <OurTeam />
      <CustomerReviews />
      <Footer />
    </>
  )
}

export default About
