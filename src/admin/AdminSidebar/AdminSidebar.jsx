import React from 'react'
import BigScreen from './BigScreen';
import SmallScreen from './SmallScreen';

const AdminSidebar = () => {

  const checkWidth = () => {
    if (window.innerWidth < 580) {
      return true;
    }else{
      return false;
    }
  }

  return (
    <>
      {checkWidth() ? <SmallScreen/> : <BigScreen/>}
    </>
  )
}

export default AdminSidebar