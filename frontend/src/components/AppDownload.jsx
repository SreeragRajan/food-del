import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='w-full flex items-center justify-center mt-20 p-6 mb-20' id='app-download'>
        <div className='text-center flex flex-col justify-center items-center'>
            <h1 className='text-[5vw] md:text-[3.2vw] font-medium'>For Better Experience Download <br /> Tomato App</h1>
            <div className='flex gap-4 md:gap-10 mt-6'>
                <img src={assets.play_store} alt="" className='h-[50px] md:h-full cursor-pointer transition-all duration-300  hover:scale-[1.1]' />
                <img src={assets.app_store} alt="" className='h-[50px] md:h-full cursor-pointer transition-all duration-300  hover:scale-[1.1]' />
            </div>
        </div>
    </div>
  )
}

export default AppDownload