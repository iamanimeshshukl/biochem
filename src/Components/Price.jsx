import React from 'react'

const Price = () => {
  return (
    <div>

      <section className="p-4 md:p-8">
        <div className="py-8 max-w-screen-xl lg:py-16">
          {/*Text */}
          <div className="mx-auto max-w-3xl text-center pb-12 md:pb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Pricing Plans
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Choose a plan that best suits your data needs.
            </p>
          </div>

          {/*cards */}
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">


            {/* Platinum Sponsorship */}
            <div className="flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8  border border-base-300 shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20">
              <div className="flex justify-center items-baseline my-9">
                <span className="mr-2 text-5xl font-extrabold">Platinum Sponsorship</span>   
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">Logo on the Backdrop</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">
                  Logo on the Entrance Gate
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">One Banner Standee at the Entrance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">10 mins Speaker Slot</span>
                </li>
                <li className="flex items-center space-x-3">
                <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/30">10 Delegate Passes</span>
                </li>
                <li className="flex items-center space-x-3">
                <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/30">
                  3x2 Display Space
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/30">Stall for Exhibition</span>
                </li>
              </ul>
              <button className="w-full font-bold gap-2 shadow uppercase p-2 bg-teal-500 text-white">
                ₹5,00,000
              </button>
            </div>

            {/*  Gold Sponsorship */}
            <div className="flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8  border border-base-300 shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20">
              <div className="flex justify-center items-baseline my-9">
                <span className="mr-2 text-5xl font-extrabold">Gold Sponsorship</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">Logo on the Backdrop</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">
                  Logo on the Entrance Gate
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  
                  <span className="text-base-content/80">10 mins Speaker Slot</span>
                </li>
                <li className="flex items-center space-x-3">
                <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/30">5 Delegate Passes</span>
                </li>
                <li className="flex items-center space-x-3">
                <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>

                  <span className="text-base-content/30">Stall for Exhibition</span>
                </li>
              </ul>
              <button className="w-full font-bold gap-2 shadow uppercase p-2 bg-teal-500 text-white">
              ₹3,00,000
              </button>
            </div>

            {/*  Silver  Sponsorship */}
            <div className="flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8  border border-base-300 shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20">
              <div className="flex justify-center items-baseline my-9">
                <span className="mr-2 text-5xl font-extrabold">Silver Sponsorship</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">Logo on the Backdrop</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">
                  Logo on the Entrance Gate
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">One Banner Standee at the Entrance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  
                  <span className="text-base-content/30">3 Delegate Passes</span>
                </li>
                <li className="flex items-center space-x-3">
                <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  
                  <span className="text-base-content/30">Stall for Exhibition</span>
                </li>
              </ul>
              <button className="w-full font-bold gap-2 shadow uppercase p-2 bg-teal-500 text-white">
              ₹1,00,000
              </button>
            </div>

            {/*  Bronze  Sponsorship */}
            <div className="flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8  border border-base-300 shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20">
              <div className="flex justify-center items-baseline my-9">
                <span className="mr-2 text-5xl font-extrabold">Bronze Sponsorship</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">Logo on the Backdrop</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">
                  Logo on the Entrance Gate
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  
                  
                  <span className="text-base-content/30">1 Delegate Passes</span>
                </li>

              </ul>
              <button className="w-full font-bold gap-2 shadow uppercase p-2 bg-teal-500 text-white">
              ₹50,000
              </button>
            </div>



            {/*   Sponsorship */}
            <div className="flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8  border border-base-300 shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20">
              <div className="flex justify-center items-baseline my-9">
                <span className="mr-2 text-5xl font-extrabold">Sponsorship</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">Logo on the Backdrop</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">
                  Logo on the Entrance Gate
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  
                  
                  <span className="text-base-content/30">10 mins Speaker Slot</span>
                </li>

              </ul>
              <button className="w-full font-bold gap-2 shadow uppercase p-2 bg-teal-500 text-white">
              ₹25,000
              </button>
            </div>


            {/*Exhibition Stall*/}
            <div className="flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8  border border-base-300 shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20">
              <div className="flex justify-center items-baseline my-9">
                <span className="mr-2 text-5xl font-extrabold">Exhibition Stall</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">Area of 3m × 3m will be provided</span>
                </li>
              </ul>
              <button className="w-full font-bold gap-2 shadow uppercase p-2 bg-teal-500 text-white">
              ₹25,000
              </button>
            </div>

          </div>
        </div>
      </section>





    </div>
  )
}

export default Price