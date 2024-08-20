import React from 'react'
import headerImage from "../assets/header_img.png";
import "../index.css";

const Header = () => {
  return (
    <div className="h-[50vw] md:h-[34vw] bg-cover rounded-md my-[30px] mx-auto lg:bg-contain relative bg-no-repeat" style={{backgroundImage: `url(${headerImage}) `}}>
        <div className="md:max-w-[50%] absolute bottom-[10%] left-[6vw] flex flex-col md:gap-[1.5vw] items-start fade-in">
            <h2 className="text-[32px] font-semibold md:text-[4vw] leading-tight text-white">Order your favourite food here</h2>
            <p className='hidden md:block text-white text-[1vw] md:text-[1.5vw] lg:text-[1vw] leading-tight'>Choose from a diverse menu featuring a delectale array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal of the time.</p>
            <button className="px-3 py-1 mt-4 md:px-6 md:py-2 md:mt-0 bg-white border-none rounded-full font-medium text-slate-700 text-sm">View Menu</button>
        </div> 
    </div>
  )
}

export default Header