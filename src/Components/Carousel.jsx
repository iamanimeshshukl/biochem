// import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Manually importing images
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.png';

// Array of image objects
const items = [
  {
    src: image1,
    alt: "Image 1",
  },
  {
    src: image2,
    alt: "Image 2",
  },
  {
    src: image3,
    alt: "Image 3",
  },
];

const HeroSlider = () => {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
      >
        {items.map((img, i) => (
          <div key={i}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
            {/* <p className="legend">{img.alt}</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
