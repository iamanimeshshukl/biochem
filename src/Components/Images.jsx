import React from 'react';
import iskcon from '../assets/places/iskcon-kanpur.jpg';
import blueWorld from '../assets/places/BlueWorld.jpg';
import motiJheel from '../assets/places/MotiJheel.jpg';
import jkTemple from '../assets/places/JK-Temple.jpg';
import ramMandir from '../assets/places/RamMandir.jpg';
import tajMahal from '../assets/places/TajMahal.jpg';
import kashi from "../assets/places/kashi.jpg";
import qutab from "../assets/places/qutab.jpg";
import sikri from "../assets/places/sikri.jpg";
import mathura from "../assets/places/mathura.jpg";
import assi from "../assets/places/assi.jpg";
import sarnath from "../assets/places/sarnath.jpg";
const imageData = [
  {
    src: iskcon,
    alt: 'ISKCON Temple',
    link: 'https://www.google.com/maps/place/ISKCON+Kanpur+Temple/@26.526941,80.2751419,17z/data=!3m1!4b1!4m6!3m5!1s0x399c39d8f22f66b3:0x9fd821e7fd74b3f5!8m2!3d26.526941!4d80.2777222!16s%2Fg%2F11bxc6fgf_?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D',
    label: 'ISKCON Temple',
  },
  {
    src: blueWorld,
    alt: 'Blue World',
    link: 'https://www.google.com/maps/place/Blue+World+Theme+Park/@26.5708918,80.2357199,17z/data=!3m1!4b1!4m6!3m5!1s0x399c308fa531086d:0xba142f43cdce22f8!8m2!3d26.5708918!4d80.2382948!16s%2Fg%2F11bbxqs77w?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D',
    label: 'Blue World',
  },
  {
    src: motiJheel,
    alt: 'Moti Jheel',
    link: 'https://www.google.com/maps/place/Moti+Jheel/@26.4761487,80.3113955,17z/data=!3m1!4b1!4m6!3m5!1s0x399c387b3e6be7b7:0x4fd46d99ad5ca02d!8m2!3d26.4755495!4d80.3139987!16s%2Fm%2F0bs6h42?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D',
    label: 'Moti Jheel',
  },
  {
    src: jkTemple,
    alt: 'J. K. Temple',
    link: 'https://www.google.com/maps/place/J.+K.+Temple/@26.4736452,80.302609,17z/data=!3m1!4b1!4m6!3m5!1s0x399c3826a363cb69:0xe305b576af97eaca!8m2!3d26.4736452!4d80.3051893!16s%2Fm%2F05zhtly?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D',
    label: 'J. K. Temple',
  },
  {
    src: ramMandir,
    alt: 'ramMandir',
    link: 'https://www.google.com/maps/place/Shree+Ram+Janmabhoomi+Mandir/data=!4m7!3m6!1s0x399a07cd3079f0bf:0x5589e823b23ba9dc!8m2!3d26.795688!4d82.194431!16s%2Fg%2F11h8d0y8yw!19sChIJv_B5MM0HmjkR3Kk7siPoiVU?authuser=0&hl=en&rclk=1#',
    label: 'Ram Mandir',
  },
  {
    src: tajMahal,
    alt: 'taj mahal',
    link: 'https://www.google.com/maps/place/Taj+Mahal/@27.1751495,78.0395673,17z/data=!3m1!4b1!4m6!3m5!1s0x39747121d702ff6d:0xdd2ae4803f767dde!8m2!3d27.1751448!4d78.0421422!16zL20vMGw4Y2I?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    label: 'Taj Mahal',
  },
  {
    src:kashi ,
    alt: 'Kashi Vishwanath mandir',
    link: 'https://www.google.com/maps/place/Kashi+Vishwanath+mandir/@26.8467136,80.9435843,17z/data=!4m6!3m5!1s0x399bfd331e3ffc07:0x4c78d1b80c0bc22b!8m2!3d26.8467088!4d80.9461592!16s%2Fg%2F11s1prdyw5?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    label: 'Kashi Vishwanath mandir',
  }, 
  {
    src:qutab ,
    alt: 'Qutab Minar',
    link: 'https://www.google.com/maps/place/Qutab+Minar,+Seth+Sarai,+Mehrauli,+New+Delhi,+Delhi+110030/@28.5244993,77.1829428,17z/data=!4m6!3m5!1s0x390d1e065dc72379:0xf6e7259f610de1d7!8m2!3d28.5244946!4d77.1855177!16zL20vMDNjX2g4?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    label: 'Qutab Minar',
  },
  {
    src:mathura ,
    alt: 'Mathura',
    link: 'https://www.google.com/maps/place/Mathura,+Uttar+Pradesh/@27.4743744,77.6841546,12z/data=!4m6!3m5!1s0x397371163d4d5205:0x4273a09defe10ea5!8m2!3d27.4924134!4d77.673673!16zL20vMDFwcng1?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    label: 'Mathura',
  },
  {
    src:sikri ,
    alt: 'Fatehpur Sikri',
    link: 'https://www.google.com/maps/place/Fatehpur+Sikri,+Uttar+Pradesh+283110/@27.0944338,77.6735415,14z/data=!3m1!4b1!4m6!3m5!1s0x397391584a53798d:0x893d46790c1fb40!8m2!3d27.0945291!4d77.6679292!16zL20vMDF2cnp3?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    label: 'Fatehpur Sikri',
  },
  {
    src:assi ,
    alt: 'Assi Ghat Varanasi',
    link: 'https://www.google.com/maps/place/Assi+Ghat+Varanasi/@25.2888106,83.0041202,17z/data=!4m10!1m2!2m1!1sassi+ghat!3m6!1s0x398e31edf14e0bb5:0x80b804534b43588c!8m2!3d25.2884712!4d83.0064451!15sCglhc3NpIGdoYXRaCyIJYXNzaSBnaGF0kgEVcmVsaWdpb3VzX2Rlc3RpbmF0aW9u4AEA!16s%2Fm%2F0g544q1?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    label: 'Assi Ghat Varanasi',
  },
  {
    src:sarnath,
    alt: 'Sarnath Varanasi',
    link: 'https://www.google.com/maps/place/Sarnath,+Varanasi,+Uttar+Pradesh+221007/@25.3729745,83.0042352,14z/data=!3m1!4b1!4m6!3m5!1s0x398e2ee870d6a12b:0xa1c385b2ea1fa974!8m2!3d25.3715564!4d83.0252136!16zL20vMDFneXN6?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
    label: 'Sarnath Varanasi',
  },

  // Add more objects as needed
];

const Images = () => {
  return (
    <div>
      <br></br>
      <h2 className="text-4xl pu-3 pb-4 flex justify-center font-medium text-black">Famous Places To Visit </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {imageData.map((image, index) => (
          <div key={index} className="group cursor-pointer relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  {image.label}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
