import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div id="footer" className="overflow-hidden bg-zinc-800 text-white flex justify-center items-center md:px-20 pt-20 flex-col">
      <div className="content px-10 md:px-0 flex items-center justify-center flex-col gap-[40px] md:flex-row md:gap-[80px] md:items-start">
        <div className="left flex flex-col items-center justify-center text-center md:text-left md:items-start md:w-[45%] md:mr-20">
          <img src={assets.logo} alt="" />
          <p className="text-sm mt-4 leading-tight text-slate-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            nesciunt accusantium pariatur labore veniam excepturi consectetur?
            Unde, cum! Consectetur animi itaque iusto ad in temporibus, quam
            illum vel. Repellat, excepturi!
          </p>
          <div className="socials flex gap-4 mt-4">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="center w-[30%] flex items-center md:items-start flex-col">
            <h1 className="text-xl font-bold mb-2 uppercase">Company</h1>
            <ul className="text-sm flex flex-col items-center md:items-start gap-1 text-slate-300">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="right md:w-[30%] flex items-center md:items-start flex-col">
            <h1 className="text-xl font-bold mb-2 uppercase">get in touch</h1>
            <ul className="text-sm flex flex-col items-center md:items-start gap-1 text-slate-300">
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr className="w-full h-[1px] mt-10 mb-4 bg-zinc-600 border-none" />
      <p className="p-4">Copyright 2024 &copy; Tomato.com - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
