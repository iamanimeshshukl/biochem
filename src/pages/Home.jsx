import React from 'react'
import Hero from "../Components/Hero"
import Carousel from '../Components/Carousel'
import Theme from '../Components/Theme'
import Timeline from '../Components/Timeline'
import Sponsers from '../Components/Sponsers'

const Home = () => {
  return (
    <div>
     <Carousel />
      <Hero />
      <Theme />
      <Timeline/>
      <Sponsers />
  
    </div>
  )
}

export default Home
