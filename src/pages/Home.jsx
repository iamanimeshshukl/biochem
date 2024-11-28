import React from 'react'
import Hero from "../Components/Hero"
import Carousel from '../Components/Carousel'
import Theme from '../Components/Theme'
import Timeline from '../Components/Timeline'
import Tourism from '../Components/tourismHomePage'
import Sponsers from '../Components/Sponsers'
import Events from '../Components/Events'
import Person from '../Components/Person'
import Biometacon from '../Components/Biometacon'

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
      <Theme />
      <Carousel />
      <br></br> 
      <Biometacon />
      <br></br><br></br>
      <Timeline />
      <Person />
      <Tourism />
      <Sponsers />
    </div>
  )
}

export default Home
