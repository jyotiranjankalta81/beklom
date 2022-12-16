import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from '../Screen/Blogs/Blogs'
import ContactUs from '../Screen/ContactUs/ContactUs'
import GetStarted from '../Screen/GetStarted/GetStarted'
import Home from '../Screen/Home/Home'
import OnBoardPage from '../Screen/OnBoardPage/OnBoardPage'
import Services from '../Screen/Services/Services'

export default function MainRouter () {
  return (
    <Fragment>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/contact-us' element={<ContactUs />} />
        <Route exact path='/blogs' element={<Blogs />} />
        <Route exact path='/getstarted' element={<GetStarted />} />
        <Route exact path='/onboard' element={<OnBoardPage />} />
      </Routes>
    </Fragment>
  )
}
