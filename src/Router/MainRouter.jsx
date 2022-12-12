import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Services from '../components/Services/Services'
import Home from '../Screen/Home/Home'

export default function MainRouter () {
  return (
    <Fragment>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Fragment>
  )
}
