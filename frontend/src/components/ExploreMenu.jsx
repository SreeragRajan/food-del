import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-4" id="explore-menu">
      <h1 className="font-semibold text-2xl text-slate-700">
        Explore our menu
      </h1>
      <p className="text-[16px] md:text-[1.8vw] lg:text-[1vw] md:w-[80%] lg:w-[50%] leading-tight text-slate-700">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="flex gap-8 text-center my-6 no-scrollbar overflow-x-auto overflow-hidden">
        {menu_list.map((item, index) => {
          return (
            <div key={index}>
              <img
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "all" : item.menu_name
                  )
                }
                src={item.menu_image}
                className={`min-w-[84px] md:w-[7.5vw] object-cover rounded-[50%] transition-[0.2s] ${
                  category === item.menu_name
                    ? "border-2 md:border-4 border-orange-500 rounded-full p-1"
                    : ""
                }`}
                alt=""
              />
              <p className="mt-2 text-[16px] text-slate-700">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="h-[1px] my-1 md:my-2 border-none bg-slate-400" />
    </div>
  );
};

export default ExploreMenu;
