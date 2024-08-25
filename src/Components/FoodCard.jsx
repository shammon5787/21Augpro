import React from 'react'
import img from '../Food/3.avif'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addCard } from '../Store/CardSlice';

const FoodCard = ({id, name, image, price, rating, desc}) => {
    const dispatch = useDispatch()
    return (
        <div className='mt-3 bg-gradient-to-t from-slate-500 to-slate-900 w-full lg:w-[22vw] rounded-lg '>
            <div className='p-3 flex items-center flex-col'>
                <img className='w-[215px] h-[100px] rounded-md cursor-grab hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            </div>
            <div className='bg-zinc-900 rounded-b-lg p-3'>
                <div className='flex items-center justify-between font-semibold'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <p>{desc}!</p>
                <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-2'>
                        <FaStar className='text-yellow-400 text-2xl' />
                        <h1>{rating}</h1>
                    </span>
                    <button onClick={()=>dispatch(addCard({id, name, price, image, qty : 1}))} className='bg-green-800 px-2 py-.5 rounded-md font-semibold hover:bg-blue-900 transition-all duration-500 hover:text-black text-xl my-3'>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard