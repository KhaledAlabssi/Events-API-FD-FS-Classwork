import React from 'react'
import { Link } from 'react-router'

export default function Error() {
  return (
    <div className='w-full h-full flex justify-center items-center'>Page Not Found!!!
    <Link to={"/"}><button>Home page</button></Link>
    </div>
  )
}
