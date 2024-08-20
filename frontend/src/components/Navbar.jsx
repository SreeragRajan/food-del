import React, { useContext, useState } from "react";
import "../assets/assets.js";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext.jsx";

const Navbar = ({ setShowLogin }) => {
  const [active, setActive] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div>
      <nav className="h-[50px] w-full mt-4 flex justify-between items-center md:h-[100px] md:mt-0">
        <div className="nav-logo">
          <Link to="/">
            <img src={assets.logo} alt="logo" className="w-[150px]" />
          </Link>
        </div>
        <div>
          <ul className="hidden lg:flex lg:gap-4 font-medium opacity-[0.7]">
            <Link
              to="/"
              onClick={() => setActive("home")}
              className={`cursor-pointer ${
                active === "home" ? "pb-1 border-b-2 border-slate-800" : ""
              }`}
            >
              home
            </Link>
            <a
              href="#explore-menu"
              onClick={() => setActive("active")}
              className={`cursor-pointer ${
                active === "active" ? "pb-1 border-b-2 border-slate-800" : ""
              }`}
            >
              menu
            </a>
            <a
              href="#app-download"
              onClick={() => setActive("mobile-app")}
              className={`cursor-pointer ${
                active === "mobile-app"
                  ? "pb-1 border-b-2 border-slate-800"
                  : ""
              }`}
            >
              mobile-app
            </a>
            <a
              href="#footer"
              onClick={() => setActive("contact-us")}
              className={`cursor-pointer ${
                active === "contact-us"
                  ? "pb-1 border-b-2 border-slate-800"
                  : ""
              }`}
            >
              contact us
            </a>
          </ul>
        </div>
        <div className="flex gap-4 sm:gap-8 ">
          <img
            src={assets.search_icon}
            className="object-contain cursor-pointer"
            alt=""
          />
          <div className="relative flex">
            <Link to="/cart">
              <img
                src={assets.basket_icon}
                className="object-contain cursor-pointer"
                alt=""
              />
            </Link>
            {getTotalCartAmount() > 0 && (
              <div className="dot absolute top-[-8%] right-[-20%] min-w-[10px] min-h-[10px] bg-red-500 rounded-full"></div>
            )}
          </div>
          <button
            className="px-2 py-1 text-sm md:px-6 md:py-2 rounded-full border border-[#FF4C24] hover:bg-red-100 cursor-pointer"
            onClick={() => setShowLogin(true)}
          >
            sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
