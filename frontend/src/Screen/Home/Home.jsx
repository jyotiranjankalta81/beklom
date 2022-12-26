import React from 'react'
import Footer from '../../components/Footer/Footer'
import TopHeader from '../../components/TopHeaer/TopHeader'
import Onboard from '../OnBoard/Onboard'
import Tech from '../Tech/Tech'
import WhyChoose from '../WhyChoose/WhyChoose'

const Home = () => {
  return (
    <>
      <TopHeader />
      <WhyChoose />
      <Tech />
      <Onboard />
      <Footer />
    </>
  )
}

export default Home
