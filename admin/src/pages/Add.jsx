import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
  
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({...data, [name]: value}));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("description", data.description);
    formdata.append("price", Number(data.price));
    formdata.append("category", data.category);
    formdata.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formdata);
    if(response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      })
      setImage(false);
      toast.success(response.data.message);
    }else {
      toast.error(response.data.message);
    }

  }


  return (
    <div className="w-[70%] ml-16 mt-10">
      <form action="" className="flex flex-col gap-4 text-zinc-700" onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-2">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img className="w-[100px]" src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" name="image" id="image" hidden required />
        </div>

        <div className="flex flex-col gap-2">
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" id="name" placeholder="Type here" className="w-[350px] p-2 border-2 outline-none" required />
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
            required
            onChange={onChangeHandler} 
            value={data.description}
          ></textarea>
        </div>

        <div className="flex gap-12 items-center">
          <div className="flex flex-col gap-2">
            <p>Product category</p>
            <select name="category" id="category" className="border-2 p-2 w-[120px]" onChange={onChangeHandler} >
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
            <input type="text" name="price" id="price" placeholder="$20" className="border-2 p-2 w-[120px]" required onChange={onChangeHandler} value={data.price} />
          </div>
        </div>
        <button className="bg-black text-white w-[120px] p-2 font-medium">Add</button>
      </form>
    </div>
  );
};

export default Add;
