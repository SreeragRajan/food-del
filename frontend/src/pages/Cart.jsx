import React, { useContext } from 'react'
import { StoreContext} from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  
  const {cartItems, food_list, removeFromCart, getTotalCartAmount, url} = useContext(StoreContext);
  const navigate = useNavigate();
  
  return (
    <div className='cart mt-[100px]'>
      <div className="cart-items">
        <div className="cart-items-title grid grid-flow-col items-center grid-cols-cart-frames">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if(cartItems[item._id] > 0) {
              return (
                <div key={index}> 
                  <div className='grid grid-flow-col text-black my-4 items-center grid-cols-cart-frames'>
                    <img src={url+"/images/"+item.image} alt="" className='w-[50px]' />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price * cartItems[item._id]}</p>
                    <p onClick={() => removeFromCart(item._id)} className='cursor-pointer'>X</p>
                  </div>
                  <hr className='border-none h-[1px] bg-slate-300' />
                </div>
              )
            }
          })
        }
      </div>

      <div className="cart-bottom mt-[80px] flex flex-col-reverse md:flex-row justify-between gap-[100px] mb-20">
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
          <button className='md:w-[250px] rounded uppercase px-4 py-2 border-none bg-[#FF4C24] text-white' onClick={() => navigate("/order")}>proceed to checkout</button>
        </div>
        <div className="cart-promocode md:w-[500px]">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='flex mt-3'>
              <input type="text" name="" id="" placeholder='promo code' className='w-full p-2 border-none outline-none bg-zinc-300' />
              <button className='px-12 rounded bg-black text-white'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart