import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={} />
        <Route path='/sign-up' element={} />
        <Route path='/login' element={} />
        <Route path='/events/:id' element={} />

        <Route path='create-event' element={} />
        
      </Routes>
    </>
  )
}

export default App
