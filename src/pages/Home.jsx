import React from 'react'
import Hero from "../Components/Hero"
import Carousel from '../Components/Carousel'
import Theme from '../Components/Theme'
import Timeline from '../Components/Timeline'
import Tourism from '../Components/tourismHomePage'
import Sponsers from '../Components/Sponsers'
import Events from '../Components/Events'
import Person from '../Components/Person'

const Home = () => {
  return (
    <div>
      <Theme />
     <Carousel />
      
      <br></br><br></br>
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
