import { Avatar } from '@mui/material'
import React from 'react'
import '../blogs.css'

const BlogsCard = props => {
  console.log(props)
  return (
    <>
      <div className='blog_card_container'>
        <div className='img_section_blog'>
          <img src={props.img} alt='' />
        </div>
        <div className='blog_contetnt_section'>
          <p className='blog_tag'>{props.tag}</p>
          <h3>{props.title}</h3>
          <p className='describe_blog'>
            {props.descripation}
            <span>Read More</span>
          </p>
        </div>
        <div className='blog_user_section'>
          <Avatar />
          <p>Pranay Shukla</p>
          <p>Dec 11,2022</p>
        </div>
      </div>
    </>
  )
}

export default BlogsCard
