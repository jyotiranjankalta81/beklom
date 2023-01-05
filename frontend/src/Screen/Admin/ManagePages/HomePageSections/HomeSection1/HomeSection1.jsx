import React from 'react'
import CrouselSection from '../CrouselSection/CrouselSection'

let data = [{ link: '/home/section1', name: 'HOME_CROUSEL' }]

const HomeSection1 = () => {
  return (
    <>
      <CrouselSection datas={data} />
    </>
  )
}

export default HomeSection1
