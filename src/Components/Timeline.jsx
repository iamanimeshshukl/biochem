import React from 'react'

const Timeline = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Event Timeline  
        </h2>
        
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="relative wrap overflow-hidden">
          {/* Adjusting the height to start from the first event and end at the conference */}
          <div className="border-2 absolute border-opacity-20 border-gray-500 h-[calc(100%+180px)] border left-1/2" />

          {/* First Event */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12" />
            <div className="z-20 flex items-center order-1 bg-[#0c1e47] shadow-xl w-12 h-12 rounded-full relative">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              <div className="absolute left-12 top-1/2 w-[100px] h-[2px] bg-gray-500 opacity-20 z-10" />
            </div>
            <div className="order-1 bg-[#094488] rounded-lg shadow-xl w-5/12 px-6 py-4 z-20">
              <h3 className="mb-2 font-bold text-white text-xl text-center">Abstract Submission Start</h3>
              <p className="text-white text-lg leading-tight text-center">
                15/10/2024
              </p>
            </div>
          </div>

          {/* Second Event */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12" />
            <div className="z-20 flex items-center order-1 bg-[#0c1e47] shadow-xl w-12 h-12 rounded-full relative">
              <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
              <div className="absolute right-12 top-1/2 w-[100px] h-[2px] bg-gray-500 opacity-20 z-10" />
            </div>
            <div className="order-1 bg-[#094488] rounded-lg shadow-xl w-5/12 px-6 py-4 z-20">
              <h3 className="mb-2 font-bold text-white text-xl text-center">Abstract Submission End</h3>
              <p className="text-white text-lg leading-tight text-center">
                30/12/2024
              </p>
            </div>
          </div>

          {/* Third Event */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12" />
            <div className="z-20 flex items-center order-1 bg-[#0c1e47] shadow-xl w-12 h-12 rounded-full relative">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
              <div className="absolute left-12 top-1/2 w-[100px] h-[2px] bg-gray-500 opacity-20 z-10" />
            </div>
            <div className="order-1 bg-[#094488] rounded-lg shadow-xl w-5/12 px-6 py-4 z-20">
              <h3 className="mb-2 font-bold text-white text-xl text-center">Announcement of Acceptance of Abstract</h3>
              <p className="text-white text-lg leading-tight text-center">
                05/01/2025
              </p>
            </div>
          </div>

          {/* Fourth Event */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12" />
            <div className="z-20 flex items-center order-1 bg-[#0c1e47] shadow-xl w-12 h-12 rounded-full relative">
              <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
              <div className="absolute right-12 top-1/2 w-[100px] h-[2px] bg-gray-500 opacity-20 z-10" />
            </div>
            <div className="order-1 bg-[#094488] rounded-lg shadow-xl w-5/12 px-6 py-4 z-20">
              <h3 className="mb-2 font-bold text-white text-xl text-center">Last date of Online Registration</h3>
              <p className="text-white text-lg leading-tight text-center">
                05/02/2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
