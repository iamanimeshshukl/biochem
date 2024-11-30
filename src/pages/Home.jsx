import React from 'react'
import Hero from "../Components/Hero"
import Carousel from '../Components/Carousel'

import Timeline from '../Components/Timeline'
import Tourism from '../Components/tourismHomePage'
import Sponsers from '../Components/Sponsers'
// import Events from '../Components/Events'
import Person from '../Components/Person'
import Biometacon from '../Components/Biometacon'

const Home = () => {
  return (
    <div
    style={{
      backgroundImage: "url('src/assets/bg.png')",
      backgroundSize: "cover", // Ensures the image scales proportionally to cover the area
      backgroundRepeat: "no-repeat", // Prevents tiling of the image
      backgroundPosition: "center center", // Centers the image both horizontally and vertically
      backgroundAttachment: "fixed", // Keeps the image fixed during scroll (optional)
      minHeight: "100vh", // Ensures the background covers the full viewport height
      display: "flex", // Optional: Enables flexbox for better layout control
      flexDirection: "column", // Optional: Arranges children vertically
      alignItems: "center", // Optional: Centers children horizontally
      justifyContent: "center", // Optional: Centers children vertically
    }}
  >
    <Carousel />
    <Biometacon />
    <br />
  
    <br />
    <br />
    <Timeline />
  
    <Person />
    <Tourism />
    <Sponsers />
  </div>
  
  
  )
}

export default Home
