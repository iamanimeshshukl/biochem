import React from 'react'
import iskcon from '../assets/places/iskcon-kanpur.jpg'
import blueWorld from '../assets/places/BlueWorld.jpg'
import motiJheel from '../assets/places/MotiJheel.jpg'
import jkTemple from '../assets/places/JK-Temple.jpg'

const tourismHomePage = () => {
  return (
    <div>
      <section className="bg-zinc-50 overflow-hidden">
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-6 lg:py-12 space-y-24 flex flex-col justify-center">
          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Places To Visit In Kanpur
            </h2>
            <p className="mt-2 text-lg text-gray-500">
              Explore the best spots to visit in Kanpur during the conference.
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-4">
            <div className="relative flex justify-center items-center">
              {/* Starts component */}
              <a href="">
                <div className="w-[350px] h-[250px] relative transform rotate-6 hover:rotate-0 transition duration-500 z-10">
                  <img
                    src={iskcon}
                    className="rounded-xl object-cover w-full h-full transition duration-500 hover:scale-110"
                    alt="ISKCON Kanpur"
                  />
                </div>
              </a>
              <a href="#_">
                <div className="w-[350px] h-[250px] relative transform -rotate-12 hover:rotate-0 transition duration-500 -ml-6 z-20">
                  <img
                    src={blueWorld}
                    className="rounded-xl object-cover w-full h-full transition duration-500 hover:scale-110"
                    alt="Blue World"
                  />
                </div>
              </a>
              <a href="#_">
                <div className="w-[350px] h-[250px] relative transform rotate-6 hover:rotate-0 transition duration-500 -ml-6 z-10">
                  <img
                    src={motiJheel}
                    className="rounded-xl object-cover w-full h-full transition duration-500 hover:scale-110"
                    alt="Moti Jheel"
                  />
                </div>
              </a>
              <a href="#_">
                <div className="w-[350px] h-[250px] relative transform -rotate-12 hover:rotate-0 transition duration-500 -ml-6 z-30">
                  <img
                    src={jkTemple}
                    className="rounded-xl object-cover w-full h-full transition duration-500 hover:scale-110"
                    alt="JK Temple"
                  />
                </div>
              </a>
              {/* Ends component */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default tourismHomePage;
