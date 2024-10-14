import React from 'react'
import logo from '../assets/BIO-METACON Logo.png'
import hbtu from "../assets/hbtu logo.png"
const Header = () => {
  return (
    <div className='flex justify-center align-center p-1 m-3'>
      <img src={logo} className='w-20 h-20'/>
      <h1 className="text-black text-3xl font-extrabold block my-3">International Conference
      BIO-METACON 2025</h1>
      <img src={hbtu} className='w-20 h-20'/>
    </div>
  )
}

export default Header
