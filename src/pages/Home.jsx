import React from 'react'
import Hero from "../Components/Hero"
import Carousel from '../Components/Carousel'
import Theme from '../Components/Theme'
import Timeline from '../Components/Timeline'
import Tourism from '../Components/tourismHomePage'
import Sponsers from '../Components/Sponsers'

const Home = () => {
  return (
    <div>
     <Carousel />
      <Hero />
      <Theme />
      <br></br><br></br>
      <Timeline/>
      <Tourism/>
      <br></br>
      <Sponsers />
    </div>
  )
}

export default Home
