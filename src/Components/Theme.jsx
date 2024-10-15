import React from 'react'

const Theme = () => {
  return (
    <div className='container mx-auto py-10'>
     
<div
  class="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-purple-500 hover:-translate-y-2 hover:shadow-xl shadow-purple-400"
>
  <div
    class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-purple-400"
    alt="image here"
  ></div>

  <div class="">
    <h2 class="text-2xl font-bold mb-2 text-white">Elegant Card</h2>
    <p class="text-gray-200 line-clamp-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis
      magna quis lectus fermentum, quis scelerisque orci pellentesque. Duis id
      porta justo. Sed ac enim id justo tincidunt hendrerit id ac lectus.
      Pellentesque maximus posuere tortor vitae consequat.
    </p>
  </div>
  <button
    class="hover:bg-purple-400 bg-purple-600 text-white mt-6 rounded p-2 px-6"
  >
    Explore
  </button>
</div>

    </div>
  )
}

export default Theme
