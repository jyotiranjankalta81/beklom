import { Avatar } from '@mui/material'
import React from 'react'
import { PlainInput } from '../../../UtilComponents/inputs/PlainInput'
import { Link } from 'react-router-dom'
import './adminLogin.css'

const AdminLogin = () => {
  return (
    <>
      <div className='admin_login_container'>
        <div className='admin_login_main_container'>
          <Avatar sx={{ width: 85, height: 85 }} />
          <PlainInput label='Username' />
          <PlainInput label='Password' />
          <div className='admin_Login_submit'>
            <Link to='/admin-panel'>
              <button className='admin_signup'>Submit</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLogin
