import React from 'react'
import img from '../Food/5.avif'
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addCard } from '../Store/CardSlice';

const FoodCard = ({id, name, image, price, desc, rating}) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-gradient-to-tr from-gray-700 to-slate-900 w-full lg:w-[23vw] rounded-md '>
            <div className='flex flex-col items-center p-3'>
                <img className='w-[210px] h-[100px] rounded-md cursor-grab hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            </div>
            <div className='p-3 font-semibold'>
                <div className='flex items-center justify-between'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <p className='font-thin'>{desc}.</p>
                <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-2'>
                        <MdOutlineStar className='text-2xl text-yellow-400' />
                        <h1>{rating}</h1>
                    </span>
                    <button onClick={()=>dispatch(addCard({id, name, price, image, qty : 1}))} className='bg-blue-950 px-2 py-0.5 rounded-md font-semibold hover:bg-gray-600 transition-all duration-500 mt-2'>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard