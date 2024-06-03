import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Material from './Material'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Routes>
   <Route path='' element={<Home/>}/>
   <Route path='material' element={<Material/>}/>
   </Routes>
   </>
  )
}

export default App
