import React from 'react'
import CrouselSection from '../../HomePageSections/CrouselSection/CrouselSection'

let data = [{ link: '/about/section1' }]
const AboutSection1 = () => {
  return (
    <>
      <CrouselSection datas={data} />
    </>
  )
}

export default AboutSection1
