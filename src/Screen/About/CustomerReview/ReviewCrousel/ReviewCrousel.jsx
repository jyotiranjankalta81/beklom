import { Avatar } from '@mui/material'
import React from 'react'
import './ReviewCrousel.css'

const ReviewCrousel = () => {
  return (
    <>
      <div className='small_cards_container'>
        <div className='small_card'>
          <div className='review_header'>
            <Avatar sx={{ width: 50, height: 50 }} />
            <p>
              Pranay Shukla <span>CEO,Co-Founder</span>
            </p>
          </div>
          <p>
            it is situated in developing area of Vatva, Narol. It is very nearby
            the old and famous lambha temple. It has five blocks having 1, 2 and
            3 BHK option. It has very beautiful garden
          </p>
        </div>
        <div className='small_card'>
          <div className='review_header'>
            <Avatar sx={{ width: 50, height: 50 }} />
            <p>
              Pranay Shukla <span>CEO,Co-Founder</span>
            </p>
          </div>
          <p>
            it is situated in developing area of Vatva, Narol. It is very nearby
            the old and famous lambha temple. It has five blocks having 1, 2 and
            3 BHK option. It has very beautiful garden
          </p>
        </div>
        <div className='small_card'>
          <div className='review_header'>
            <Avatar sx={{ width: 50, height: 50 }} />
            <p>
              Pranay Shukla <span>CEO,Co-Founder</span>
            </p>
          </div>
          <p>
            it is situated in developing area of Vatva, Narol. It is very nearby
            the old and famous lambha temple. It has five blocks having 1, 2 and
            3 BHK option. It has very beautiful garden
          </p>
        </div>
      </div>
    </>
  )
}

export default ReviewCrousel
