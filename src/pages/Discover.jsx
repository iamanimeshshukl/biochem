import React from 'react'
import Images from '../Components/Images'
import bg from "../assets/bg.png";
const Discover = () => {
  return (
    <div
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover", // Ensures the image scales proportionally to cover the area
      backgroundRepeat: "no-repeat", // Prevents tiling of the image
      backgroundPosition: "center center", // Centers the image both horizontally and vertically
      backgroundAttachment: "fixed", // Keeps the image fixed during scroll (optional)
      minHeight: "100vh", // Ensures the background covers the full viewport height
      display: "flex", // Optional: Enables flexbox for better layout control
      flexDirection: "column", // Optional: Arranges children vertically
      alignItems: "center", // Optional: Centers children horizontally
      justifyContent: "center", // Optional: Centers children vertically
    }}><Images/></div>
  )
}

export default Discover