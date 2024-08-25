import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import '../index.css'

const Sidebar = () => {
  return (
    <div className='w-[18%] h-screen border-t-0 border'>
        <div className='h-full w-full flex flex-col gap-4 items-end pr-0 pt-10 pl-10'>
            <NavLink to="/add" className='nav-item flex items-center md:gap-[16px] w-[95%] whitespace-nowrap border-r-0 border p-2 pr-10 lg:pr-20 cursor-pointer pl-4 rounded rounded-r-none'>
                <img src={assets.add_icon
                } alt="" className='min-h-[28px] min-w-[28px]' />
                <h2 className='text-[1.2vw] hidden lg:block'>Add Items</h2>
            </NavLink>
            <NavLink to="/list" className='nav-item flex items-center md:gap-[16px] w-[95%] whitespace-nowrap border-r-0 border p-2 pr-10 lg:pr-20 cursor-pointer pl-4 rounded rounded-r-none'>
                <img src={assets.order_icon} alt="" className='min-h-[28px] min-w-[28px]' />
                <h2 className='text-[1.2vw] hidden lg:block'>List Items</h2>
            </NavLink>
            <NavLink to="/orders" className='nav-item flex items-center md:gap-[16px] w-[95%] whitespace-nowrap border-r-0 border p-2 pr-10 lg:pr-20 cursor-pointer pl-4 rounded rounded-r-none'>
                <img src={assets.order_icon} alt="" className='min-h-[28px] min-w-[28px]' />
                <h2 className='text-[1.2vw] hidden lg:block'>Orders</h2>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar