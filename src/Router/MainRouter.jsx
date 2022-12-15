import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../Screen/ContactUs/ContactUs'
import Home from '../Screen/Home/Home'
import Services from '../Screen/Services/Services'

export default function MainRouter () {
  return (
    <Fragment>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/contact-us' element={<ContactUs />} />
      </Routes>
    </Fragment>
  )
}
