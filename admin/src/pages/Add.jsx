import React from "react";
import { assets } from "../assets/assets.js";

const Add = () => {
  return (
    <div className="w-[70%] ml-16 mt-10">
      <form action="" className="flex flex-col gap-4 text-zinc-700">
        <div className="flex flex-col gap-2">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" name="image" id="image" hidden required />
        </div>

        <div className="flex flex-col gap-2">
          <p>Product name</p>
          <input type="text" name="name" id="name" placeholder="Type here" className="w-[350px] p-2 border-2 outline-none" />
        </div>

        <div className="flex flex-col gap-2">
          <p>Product description</p>
          <textarea
            name="description"
            id="description"
            rows="5"
            cols="26"
            className="resize-none outline-none border-2 w-[350px]"
            placeholder="Write content here"
          ></textarea>
        </div>

        <div className="flex gap-12 items-center">
          <div className="flex flex-col gap-2">
            <p>Product category</p>
            <select name="category" id="category" className="border-2 p-2 w-[120px]">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <p>Product price</p>
            <input type="number" name="price" id="price" placeholder="$20" className="border-2 p-2 w-[120px]" />
          </div>
        </div>
        <button className="bg-black text-white w-[120px] p-2 font-medium">Add</button>
      </form>
    </div>
  );
};

export default Add;
