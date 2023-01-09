import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import './TopHeader.css'
import Card1 from './CrouselCard/Card1'
import { useSelector } from 'react-redux'
import { imageBacked } from '../../API/axiosInstance'
export default function TopHeader () {
  const { section1 } = useSelector(state => state.admin)
  const [row, setrow] = React.useState([])

  React.useEffect(() => {
    if (section1?.length !== 0) {
      var sectiondata = []
      var newArray = section1.filter(function (el) {
        return el.NAME == 'HOME_CROUSEL'
      })
      if (newArray?.length !== 0) {
        newArray.forEach((data, index) => {
          sectiondata.push({
            id: index + 1,
            SE_ID: data.SE_ID,
            IMAGE: imageBacked + data.IMAGE,
            TITLE: data.TITLE,
            CONTENT: data.CONTENT,
            NAME: data.NAME
          })
        })
        setrow(sectiondata)
      }
    }
  }, [section1])

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
        {row?.map((data, index) => {
          return (
            <div key={index}>
              <Card1
                title={data.TITLE}
                content={data.CONTENT}
                image={data.IMAGE}
              />
            </div>
          )
        })}
        {/* <Card1 /> */}
      </Carousel>
    </div>
  )
}
