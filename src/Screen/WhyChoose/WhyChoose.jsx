import React from 'react'
import './WhyChoose.css'

const WhyChoose = () => {
  return (
    <>
      <div className='choose_container'>
        <div className='choose_main_container'>
          <div className='choose_left_container'></div>
          <div className='choose_right_container'>
            <h1> Why Choose Us</h1>
            <h2>
              You can think of Beklom Technologies as a one-stop solution.
            </h2>
            <p>
              Web development, Social Media management, US Taxation,
              Book-keeping, Technical/Non-Technical recruitment, Graphic
              Designing, and Lead generation are all areas in which we
              specialize. After that, we perform all of the cold outreach to
              qualify prospects, generate interest, and open sales conversations
              for you.
            </p>
            <button className='start_btn'>Get Started</button>
          </div>
          <div className='far_right_container'>
            <img src='/Images/Home/choosebg.png' alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChoose
