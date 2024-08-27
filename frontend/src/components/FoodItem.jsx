import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);
  
  return (
    <div className="food-item w-full shadow-md">
      <div className="img-container relative">
        <img src={url+"/images/"+image} className="w-full rounded-t-lg" alt="" />
        {
        !cartItems[id] ? (
          <img
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
            className="absolute bottom-[5%] right-3 w-[30px] cursor-pointer"
          />
        ) : (
          <div className="flex items-center gap-[10px] p-1 absolute bottom-[5%] right-3 bg-white rounded-full">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className="w-[25px] cursor-pointer"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              className="w-[25px] cursor-pointer"
            />
          </div>
        )}
      </div>
      <div className="info p-3">
        <div className="name-rating flex justify-between mb-2 items-center">
          <p className="font-semibold lg:text-sm xl:text-[16px]">{name}</p>
          <img src={assets.rating_starts} className="h-[15px]" alt="" />
        </div>
        <p className="desc leading-tight text-sm text-slate-700">
          {description}
        </p>
        <p className="price text-[22px] text-[#FF4C24] mt-2">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
