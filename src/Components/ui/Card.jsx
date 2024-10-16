import React from 'react'

const Card = () => {
  return (
    <div>
      <div className="flex">
  <div className="relative mt-16 mb-32 max-w-sm mx-auto">
    <div className="rounded-lg overflow-hidden shadow-lg bg-gray-50">
      <div className="absolute -mt-16 w-full flex justify-center">
        <div className="h-36 w-36 border-4 border-gray-200 rounded-md">
          <img
            src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715299200&semt=sph"
            className="rounded-md object-cover h-full w-full shadow-lg"
            alt="Animesh Shukla"
          />
        </div>
      </div>
      <div className="px-6 mt-20">
        <h1 className="font-semibold text-4xl text-center mb-1 text-blue-600">
         Animesh Shukla
        </h1>
        <p className="text-gray-700 text-sm text-center italic">
          Frontend Developer
        </p>
        <p className="text-center text-gray-500 text-base pt-4 font-light">
          Working with Anum has been an absolute pleasure. Her dedication to her
          craft is unmatched, and her attention to detail is commendable.
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
