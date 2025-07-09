import React from 'react'
import AuthForm from '../components/AuthForm'

export default function SignIn({setIsAuth}) {
  return (
    <div className='h-[550px]'>

    <AuthForm setIsAuth={setIsAuth} />
    </div>
  )
}
