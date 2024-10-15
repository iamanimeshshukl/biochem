import React from 'react'

const Timeline = () => {
  return (
    <div><div className="container mx-auto px-4 py-8">
    <div className="relative wrap overflow-hidden">
      <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2" />
      <div className="mb-8 flex justify-between items-center w-full right-timeline">
        <div className="order-1 w-5/12" />
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
          <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
        </div>
        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
          <h3 className="mb-3 font-bold text-gray-800 text-xl">Event Title</h3>
          <p className="text-gray-700 leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
            nisi commodo, aliquet velit ac, dapibus elit.
          </p>
        </div>
      </div>
      <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
        <div className="order-1 w-5/12" />
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
          <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
        </div>
        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
          <h3 className="mb-3 font-bold text-gray-800 text-xl">Event Title</h3>
          <p className="text-gray-700 leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
            nisi commodo, aliquet velit ac, dapibus elit.
          </p>
        </div>
      </div>
      <div className="mb-8 flex justify-between items-center w-full right-timeline">
        <div className="order-1 w-5/12" />
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
          <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
        </div>
        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
          <h3 className="mb-3 font-bold text-gray-800 text-xl">Event Title</h3>
          <p className="text-gray-700 leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
            nisi commodo, aliquet velit ac, dapibus elit.
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Timeline