import './App.css';
import { useLocation } from "react-router-dom"
import React, { useEffect, useState } from "react";
import MainRouter from './Router/MainRouter';
import AdminRouter from './Router/AdminRouter';
import Navbar from './components/Navbaar/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { resetAuthNotification, selectAuthErrorStatus, selectAuthMessage } from './Redux/features/authenticationSlice';
import 'react-toastify/dist/ReactToastify.css';
import { AuthRouter } from './Router/AuthRouter';
import { BasicSection2, BasicSection3, Section1 } from './Redux/features/adminSlice';

function App() {
  const location = useLocation()
  const [isAdmin, setAdmin] = useState(false);
  const authErrorStatus = useSelector(selectAuthErrorStatus);
  const authMessage = useSelector(selectAuthMessage)
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(Section1());
    dispatch(BasicSection2());
    dispatch(BasicSection3());
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (location.pathname.split('/').includes('admin-panel')) {
      setAdmin(true);
    } else if (location.pathname.split('/').includes('auth')) {
      setAdmin(true);
    }
    else {
      setAdmin(false);
    }
  }, [location])

  useEffect(() => {
    if (authMessage) {
      if (authErrorStatus) {
        toast.error(authMessage)
      } else {
        toast.success(authMessage)
      }
      dispatch(resetAuthNotification());
    }
  }, [authErrorStatus, authMessage])

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      {
        !isAdmin &&
        <Navbar />
      }
      <AuthRouter />
      <MainRouter />
      <AdminRouter />
    </div>
  );
}

export default App;
