import React from 'react'
import headerImage from "../assets/header_img.png";
import "../index.css";

const Header = () => {
  return (
    <div className="h-[34vw] my-[30px] mx-auto bg-contain relative bg-no-repeat" style={{backgroundImage: `url(${headerImage}) `}}>
        <div className="max-w-[50%] absolute bottom-[10%] left-[6vw] flex flex-col gap-[1.5vw] items-start fade-in">
            <h2 className="font-semibold text-[4vw] leading-tight text-white">Order your <br /> favourite food here</h2>
            <p className='text-white text-[1vw] leading-tight'>Choose from a diverse menu featuring a delectale array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal of the time.</p>
            <button className="px-6 py-2 bg-white border-none rounded-full font-medium text-slate-700 text-sm">View Menu</button>
        </div> 
    </div>
  )
}

export default Header