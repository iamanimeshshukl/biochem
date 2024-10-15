import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Team from './Components/Team'
import About from './Components/About'
import Timeline from './Components/Timeline'

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
     
      <Timeline/>
      <About/>
      <Team />
     
    </div>
  )
}

export default App
