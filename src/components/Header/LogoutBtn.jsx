import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'


function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const logoutHandler = async () => {
      const confirmLogout = window.confirm("Are you sure you want to logout?");
      if(!confirmLogout) return;

      authService.logout().then(() => {
          dispatch(logout());
          navigate("/login",{ replace: true });
      })
    }

  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn