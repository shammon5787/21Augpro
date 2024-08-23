import React from 'react'
import img from '../Food/5.avif'
import { FiMinus , FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, removeCard } from '../Store/CardSlice';

const CardItem = ({id, name, price, image, qty}) => {
    const dispatch = useDispatch()
  return (
    <div className='p-2 bg-slate-900 rounded-md mt-1.5 flex gap-5'>
        <MdDelete onClick={()=>dispatch(removeCard({id}))} className='absolute right-6 cursor-pointer text-xl hover:text-red-600' />
        <img className='w-[55px] h-[55px] rounded-full ' src= {image} alt="" />
        <div className='flex font-semibold'>
            <div>
                <h1>{name}</h1>
                <h1>$: {price}</h1>
            </div>
            <div className='flex items-center gap-3 absolute right-6 mt-8'>
                <FiMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty = 1} className='text-3xl cursor-pointer hover:text-green-600' />
                <span>{qty}</span>
                <FiPlus onClick={()=>dispatch(incrementItem({id}))} className='text-3xl cursor-pointer hover:text-green-600' />
            </div>
        </div>
    </div>
  )
}

export default CardItem