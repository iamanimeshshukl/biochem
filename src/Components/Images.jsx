import React from 'react'
import iskcon from '../assets/places/iskcon-kanpur.jpg'
import blueWorld from '../assets/places/BlueWorld.jpg'
import motiJheel from '../assets/places/MotiJheel.jpg'
import jkTemple from '../assets/places/JK-Temple.jpg'
const Images = () => {
  return (
    <div><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    <div className="group cursor-pointer relative">
      <img
        src={iskcon}
        alt="Image 1"
        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
       <a href="https://www.google.com/maps/place/ISKCON+Kanpur+Temple/@26.526941,80.2751419,17z/data=!3m1!4b1!4m6!3m5!1s0x399c39d8f22f66b3:0x9fd821e7fd74b3f5!8m2!3d26.526941!4d80.2777222!16s%2Fg%2F11bxc6fgf_?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          ISKCON Temple
        </button>
        </a>
      </div>
    </div>
    <div className="group cursor-pointer relative">
      <img
        src={blueWorld}
        alt="Image 1"
        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <a href="https://www.google.com/maps/place/Blue+World+Theme+Park/@26.5708918,80.2357199,17z/data=!3m1!4b1!4m6!3m5!1s0x399c308fa531086d:0xba142f43cdce22f8!8m2!3d26.5708918!4d80.2382948!16s%2Fg%2F11bbxqs77w?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          Blue World
        </button>
        </a>
      </div>
    </div>
    <div className="group cursor-pointer relative">
      <img
        src={motiJheel}
        alt="Image 1"
        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <a href="https://www.google.com/maps/place/Moti+Jheel/@26.4761487,80.3113955,17z/data=!3m1!4b1!4m6!3m5!1s0x399c387b3e6be7b7:0x4fd46d99ad5ca02d!8m2!3d26.4755495!4d80.3139987!16s%2Fm%2F0bs6h42?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          Moti Jheel
        </button>
        </a>
      </div>
    </div>
    <div className="group cursor-pointer relative">
      <img
        src={jkTemple}
        alt="Image 1"
        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <a href="https://www.google.com/maps/place/J.+K.+Temple/@26.4736452,80.302609,17z/data=!3m1!4b1!4m6!3m5!1s0x399c3826a363cb69:0xe305b576af97eaca!8m2!3d26.4736452!4d80.3051893!16s%2Fm%2F05zhtly?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3Dhttps://www.example.com" target="_blank" rel="noopener noreferrer">
        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          J. K. Temple
        </button>
        </a>
      </div>
    </div>
    <div className="group cursor-pointer relative">
      <img
        src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8bmF0dXJlfGVufDB8MHx8fDE2OTQwOTk3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Image 1"
        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          View
        </button>
      </div>
    </div>
    <div className="group cursor-pointer relative">
      <img
        src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8bmF0dXJlfGVufDB8MHx8fDE2OTQwOTk3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Image 1"
        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          View
        </button>
      </div>
    </div>
    <div className="group cursor-pointer relative">
      <img
        src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Image 1"
        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          View
        </button>
      </div>
    </div>
    <div className="group cursor-pointer relative">
      <img
        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Image 1"
        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          View
        </button>
      </div>
    </div>
    <div className="group cursor-pointer relative">
      <img
        src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Image 1"
        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          View
        </button>
      </div>
    </div>
    <div className="group cursor-pointer relative">
      <img
        src="https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxyaXZlcnxlbnwwfDB8fHwxNjk0MDk5ODgyfDA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Image 1"
        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          View
        </button>
      </div>
    </div>
    <div className="group cursor-pointer relative">
      <img
        src="https://images.unsplash.com/photo-1498855926480-d98e83099315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxyaXZlcnxlbnwwfDB8fHwxNjk0MDk5ODgyfDA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Image 1"
        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          View
        </button>
      </div>
    </div>
    <div className="group cursor-pointer relative">
      <img
        src="https://images.unsplash.com/photo-1502754400466-c87ff3039da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8cml2ZXJ8ZW58MHwwfHx8MTY5NDA5OTg4Mnww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Image 1"
        className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          View
        </button>
      </div>
    </div>
    {/* Repeat this div for each image */}
  </div>
  </div>
  )
}

export default Images