import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import './TopHeader.css'
import Card1 from './CrouselCard/Card1'
export default function TopHeader () {
  return (
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
        <Card1 />
      </Carousel>
    </div>
  )
}
