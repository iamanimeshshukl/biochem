import React from 'react';
import About from '../Components/About';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-10"
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
    <About />
    </div>
  );
};

export default AboutUs;