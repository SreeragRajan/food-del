import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form action="" className='flex flex-col md:flex-row gap-32 mt-20'>
      <div className="left w-full md:mb-0 md:w-[45%]">
        <p className="title text-2xl font-semibold mb-6">Delivery Information</p>
        <div className='flex gap-2'>
          <input className='p-2 border-2 rounded mt-3 outline-none w-full' type="text" placeholder='first name'/>
          <input className='p-2 border-2 rounded mt-3 outline-none w-full' type="text" placeholder='last name'/>
        </div>
        <input className='p-2 border-2 rounded mt-3 outline-none w-full' type="email" name="" id="" placeholder='Email address' />
        <input className='p-2 border-2 rounded mt-3 outline-none w-full' type="text" placeholder='Street' />
        <div className='flex gap-2'>
          <input className='p-2 border-2 rounded mt-3 outline-none w-full' type="text" placeholder='City'/>
          <input className='p-2 border-2 rounded mt-3 outline-none w-full' type="text" placeholder='State'/>
        </div>
        <div className='flex gap-2'>
          <input className='p-2 border-2 rounded mt-3 outline-none w-full' type="text" placeholder='Pin code'/>
          <input className='p-2 border-2 rounded mt-3 outline-none w-full' type="text" placeholder='Country'/>
        </div>
        <input className='p-2 border-2 rounded mt-3 outline-none w-full' type="text" placeholder='Phone' />
      </div>
      <div className="right w-full md:w-[40%]">
      <div className="cart-total flex-1 flex flex-col gap-[20px]">
          <h2 className='text-lg font-bold'>Cart Totals</h2>
          <div className='text-[#555]'>
            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='mt-2 border-none h-[1px] bg-zinc-400' />
            <div className='flex justify-between'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() > 0 ? 2 : 0}</p>
            </div>
            <hr className='mt-2 border-none h-[1px] bg-zinc-400' />
            <div className='flex justify-between'>
              <strong>Total</strong>
              <strong>${getTotalCartAmount() > 0 ? getTotalCartAmount()+2 : 0}</strong>
            </div>
          </div>
          <button className='mb-10 md:mb-0 md:w-[250px] rounded uppercase px-4 py-2 border-none bg-[#FF4C24] text-white' onClick={() => navigate("/order")}>proceed to checkout</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder