import React from 'react'
import {assets} from '../assets/assets.js'

function Navbar() {
  return (
    <div className='flex justify-between items-center px-4 py-1 lg:px-16 lg:py-1'>
        <div className='h-[70px]'>
            <img className='h-full w-full' src={assets.logo} alt="" />
        </div>
        <div className='h-[45px] lg:h-[50px]'>
            <img className='h-full w-full' src={assets.profile_image} alt="" />
        </div>
    </div>
  )
}

export default Navbar