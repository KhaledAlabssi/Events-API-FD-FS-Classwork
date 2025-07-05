import React from 'react'
import { Navigate, Outlet } from 'react-router'

export default function ProtectedRoute() {
    const auth = true
  return (
    <div>
        {auth ? <Outlet />: <Navigate to={"/login"} /> }
    </div>
    
  )
}
