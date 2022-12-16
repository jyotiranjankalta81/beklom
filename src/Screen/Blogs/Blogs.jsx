import React from 'react'
import './blogs.css'
import BlogsData from '../../JSONCollection/blogs'
import BlogsCard from './BlogsCard/BlogsCard'
import Footer from '../../components/Footer/Footer'

const Blogs = () => {
  return (
    <>
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='left_intro'>
            <h2>Blogs</h2>
            <p>
              Beklom Technologies has the greatest tools and people to help you
              grow your business. Does this seem like something you're
              interested in? Start your onboarding process today!.
            </p>
            <div className='get_started'>GET STARTED</div>
          </div>
          <div className='right_intro'>
            <img src='/Images/Home/blogsrightbg.png' alt='' />
          </div>
        </div>
      </div>
      <div className='blogs_container'>
        <div className='blogs_card_container'>
          {BlogsData.map((BlogList, index) => (
            <BlogsCard key={index} {...BlogList} />
          ))}
        </div>
      </div>
      <br />
      <BlogSubscribe />
      <Footer />
    </>
  )
}

export default Blogs

function BlogSubscribe () {
  return (
    <div className='subscribe_blog'>
      <div className='subscribe'>
        <div className='subscribe_left_container'>
          <img src='/Images/Home/subscribeleft.png' alt='' />
        </div>
        <div className='subscribe_right_container'>
          <h2>STAY TUNED</h2>
          <p>
            Subscribe to our newsletter and never miss our Tech, latest news,
            etc.
          </p>
          <p>Our newsletter is sent once a week, every Monday</p>
          <div className='input_box'>
            <input type='email' placeholder='Subscribe' />
          </div>
        </div>
      </div>
    </div>
  )
}
