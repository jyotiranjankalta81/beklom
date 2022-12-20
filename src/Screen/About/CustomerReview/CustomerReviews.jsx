import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import ReviewCrousel from './ReviewCrousel/ReviewCrousel'
import './CustomerReviews.css'

const CustomerReviews = () => {
  return (
    <>
      <div className='customer_reviews_contetn'>
        <div className='customer_review_main_container'>
          <h1>Customer Reviews</h1>
          <h5>What our customer say about Beklom</h5>
          <div className='WhatClientSays'>
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              showIndicators={true}
              stopOnHover={true}
              autoFocus={true}
              showStatus={false}
              showThumbs={false}
              showArrows={true}
              dots={true}
            >
              <ReviewCrousel />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerReviews
