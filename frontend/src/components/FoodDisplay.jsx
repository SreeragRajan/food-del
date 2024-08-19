import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem';

const FoodDisplay = ({category}) => {

    const { food_list } = useContext(StoreContext);

  return (
    <div>
        <h2 className='font-semibold text-2xl text-slate-700 mt-10'>Top dishes near you</h2>
        <div className='mt-[30px] grid grid-cols-4 gap-[24px]'>
            {
                food_list.map((item, index) => {
                    if(category === "all" || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }

                })

            }
        </div>
    </div>
  )
}

export default FoodDisplay