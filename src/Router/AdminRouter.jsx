import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getallorder, getblog } from '../Redux/features/adminSlice'
import { getBlog } from '../Redux/features/commonSlice'
import Services from '../components/Services/Services'

export default function AdminRouter () {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getallorder({}))
    dispatch(getblog({}))
    dispatch(getBlog({}))
  }, [])

  return (
    <Routes>
      <Route path='/admin-panel' element={<Services />}>
        <Route path='dashboard' element={<Services />} />
      </Route>
    </Routes>
  )
}
