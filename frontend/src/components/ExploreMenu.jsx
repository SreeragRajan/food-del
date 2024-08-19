import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-2xl text-slate-700">
        Explore our menu
      </h1>
      <p className="text-[1vw] w-[50%] leading-tight text-slate-700">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="flex gap-8 text-center my-6 overflow-x-auto overflow-hidden">
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
                className={`w-[7.5vw] transition-[0.2s] ${
                  category === item.menu_name
                    ? "border-4 border-orange-500 rounded-full p-1"
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
      <hr className="h-[1px] my-2 border-none bg-slate-400" />
    </div>
  );
};

export default ExploreMenu;
