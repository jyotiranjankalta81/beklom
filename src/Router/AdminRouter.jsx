import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getallorder, getblog } from '../Redux/features/adminSlice'
import { getBlog } from '../Redux/features/commonSlice'
import Services from '../components/Services/Services'
import AdminLogin from '../Screen/Admin/AdminLogin/AdminLogin'
import AdminLayout from '../components/Admin/AdminLayout/AdminLayout'
import ContactUs from '../Screen/Admin/ContactUs/ContactUs'

export default function AdminRouter () {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getallorder({}))
    dispatch(getblog({}))
    dispatch(getBlog({}))
  }, [])

  return (
    <Routes>
      <Route path='/admin-panel' element={<AdminLayout />}>
        <Route path='adminLogin' element={<AdminLogin />} />
        <Route path='contact-us' element={<ContactUs />} />
      </Route>
    </Routes>
  )
}
