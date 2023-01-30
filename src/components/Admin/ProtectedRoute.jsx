import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const auth = localStorage.getItem("user")
    
  return (
    <>
    {
        auth ? <Outlet /> :  <Navigate to="/registration" />
    }
    </>
  )
}

export default ProtectedRoute
