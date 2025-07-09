import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function EventDetails({isAuth}) {

  const navigate = useNavigate()

  useEffect(() => {
    if(!isAuth) navigate('/')

  }, [])
  return (
    <div>EventDetails</div>
  )
}
