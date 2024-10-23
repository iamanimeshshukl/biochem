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
    <div>
      <Theme />
     <Carousel />
     <br></br>
      <Hero />
      <br></br><br></br>
      <Biometacon/>
      <br>
      </br>
      <Timeline/>
      <Events />
      <Person />
      <Tourism/>
      <br></br>
      <Sponsers />
    </div>
  )
}

export default Home
