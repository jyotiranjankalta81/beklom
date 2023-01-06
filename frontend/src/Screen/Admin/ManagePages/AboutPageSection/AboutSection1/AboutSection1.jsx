import React from 'react'
import CrouselSection from '../../HomePageSections/CrouselSection/CrouselSection'

let data = [{ link: '/section1', name: 'ABOUT_CROUSEL' }]
const AboutSection1 = () => {
  return (
    <>
      <CrouselSection datas={data} />
    </>
  )
}

export default AboutSection1
