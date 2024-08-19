import React, { useState } from "react";
import "../assets/assets.js";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <div>
      <nav className="flex justify-between items-center h-[100px]">
        <div className="nav-logo">
          <img src={assets.logo} alt="logo" className="w-[150px]" />
        </div>
        <div>
          <ul className="flex gap-4 font-medium opacity-[0.7]">
            <li
              onClick={() => setActive("home")}
              className={`cursor-pointer ${
                active === "home" ? "pb-1 border-b-2 border-slate-800" : ""
              }`}
            >
              home
            </li>
            <li
              onClick={() => setActive("active")}
              className={`cursor-pointer ${
                active === "active" ? "pb-1 border-b-2 border-slate-800" : ""
              }`}
            >
              active
            </li>
            <li
              onClick={() => setActive("mobile-app")}
              className={`cursor-pointer ${
                active === "mobile-app" ? "pb-1 border-b-2 border-slate-800" : ""
              }`}
            >
              mobile-app
            </li>
            <li
              onClick={() => setActive("contact-us")}
              className={`cursor-pointer ${
                active === "contact-us" ? "pb-1 border-b-2 border-slate-800" : ""
              }`}
            >
              contact us
            </li>
          </ul>
        </div>
        <div className="flex gap-10">
          <img
            src={assets.search_icon}
            className="object-contain cursor-pointer"
            alt=""
          />
          <div className="relative flex">
            <img
              src={assets.basket_icon}
              className="object-contain cursor-pointer"
              alt=""
            />
            <div className="dot absolute top-[-8%] right-[-20%] min-w-[10px] min-h-[10px] bg-red-500 rounded-full"></div>
          </div>
          <button className="px-6 py-2 rounded-full border border-[#FF4C24] hover:bg-red-100 cursor-pointer">
            sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
