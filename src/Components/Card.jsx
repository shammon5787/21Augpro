import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { BiSolidCart } from "react-icons/bi";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

const Card = () => {
    const [activeCaed, setactiveCaed] = useState(true)
    const selectItem = useSelector((state)=>state.cart.cart)

    const totalitem = selectItem.reduce((totalitem, item)=>totalitem + item.qty, 0)
    const totalprice = selectItem.reduce((totalprice, item)=>totalprice + item.qty * item.price, 0)
    return (
        <>
            <div className={`bg-zinc-950 fixed top-0 right-0 w-full h-full lg:w-[30vw] p-3 ${activeCaed ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 `}>
                <div className='flex items-center justify-between font-semibold text-2xl'>
                    <h1>Your Orders</h1>
                    <IoClose onClick={() => setactiveCaed(false)} className='text-3xl cursor-pointer hover:text-yellow-500' />
                </div>

                {
                    selectItem.map((food)=>{
                        return(
                            <CardItem key={food.id} id = {food.id} name = {food.name} price = {food.price} image = {food.image} qty = {food.qty} />
                        )
                    })
                }

                <div className='font-semibold absolute bottom-0'>
                    <h1>Total Items: {totalitem} </h1>
                    <h1>Total Price: {totalprice} </h1>
                    <hr />
                    <button className='bg-blue-800 px-2 py-.5 rounded-md font-semibold hover:bg-green-600 transition-all duration-500 hover:text-black text-xl my-3 w-[90vw] lg:w-[25vw] '>Check Out</button>
                </div>
            </div>
            <BiSolidCart onClick={()=>setactiveCaed(true)} className={`text-6xl fixed right-8 bottom-8 cursor-pointer ${selectItem.length > 0 ? "animate-bounce" : "animate-none"} `} />
        </>
    )
}

export default Card