import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Leftcontent from './components/Leftcontent'

function App() {

  return (
  <div className='main'>
  <Navbar/>
  <Leftcontent/>
  </div>
  )
}

export default App
