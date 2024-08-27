import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchlist = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if(response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchlist();
  })

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId});
    await fetchlist();

    if(response.data.success) {
      toast.success(response.data.message);
    } 
    else {
      toast.error("Error");
    }
  }

  return (
    <div className='p-10'>
      <p className='font-medium text-slate-500 mb-4'>All Foods List</p>
      <div className="list-table">
        <div className="title hidden md:grid grid-flow-col grid-cols-list-table-format items-center gap-[10px] py-[12px] px-[15px] text-[13px] border">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {
          list.map((item, index) => {
            return (
              <div key={index} className='grid grid-flow-col grid-cols-sm-list-table-format md:grid-cols-list-table-format items-center gap-[10px] md:gap-[15px] py-[12px] px-[15px] text-[13px] border'>
                <img src={`${url}/images/`+item.image} className='min-w-1/2' alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p className='cursor-pointer' onClick={() => removeFood(item._id)}>X</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List