import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../Screen/Admin/AdminLogin/AdminLogin'
import AdminLayout from '../components/Admin/AdminLayout/AdminLayout'
import ContactUs from '../Screen/Admin/ContactUs/ContactUs'
import ManagePages from '../Screen/Admin/ManagePage/ManagePages'
import OnBoardingTable from '../Screen/Admin/OnBoarding/OnBoardingTable'

export default function AdminRouter () {
  return (
    <Routes>
      <Route path='/admin-panel' element={<AdminLayout />}>
        <Route path='adminLogin' element={<AdminLogin />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='blogpages' element={<ManagePages />} />
        <Route path='on-boarding' element={<OnBoardingTable />} />
      </Route>
    </Routes>
  )
}
