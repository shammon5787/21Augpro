import React from 'react'
import img from '../Food/7.avif'
import { TfiMinus, TfiPlus} from "react-icons/tfi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, removeCard } from '../Store/CardSlice';

const CardItem = ({id, name, image, price, qty}) => {
    const dispatch = useDispatch()
  return (
    <div className='p-2 bg-slate-700 rounded-md flex gap-5 mt-1.5 shadow-md'>
        <MdDelete onClick={()=>dispatch(removeCard({id}))} className='absolute right-7 cursor-pointer  hover:text-red-700' />
        <img className='w-[55px] h-[55px] rounded-full ' src= {image} alt="" />
        <div className='flex font-semibold'>
            <div className='mt-3 leading-5'>
                <h1>{name}</h1>
                <h1>$: {price}</h1>
            </div>
            <div className='flex items-center gap-3 absolute right-6 mt-8 '>
                <TfiMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty = 1} className='text-xl font-semibol cursor-pointer hover:text-green-500' />
                <span>{qty}</span>
                <TfiPlus onClick={()=>dispatch(incrementItem({id}))} className='text-xl font-semibol cursor-pointer hover:text-green-500' />
            </div>
        </div>
    </div>
  )
}

export default CardItem