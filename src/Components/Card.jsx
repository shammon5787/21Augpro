import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { BiSolidCartAlt } from "react-icons/bi";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

const Card = () => {
    const [activeCard, setactiveCard] = useState(true)
    const selectCart = useSelector((state)=>state.cart.cart)
    
    const totalitems = selectCart.reduce((totalitems , item)=>totalitems + item.qty, 0)
    const totalprice = selectCart.reduce((totalprice, item)=>totalprice + item.qty * item.price, 0)

    return (
        <>
            <div className={`bg-blue-950 w-full fixed right-0 top-0 h-full p-3 lg:w-[30vw] ${activeCard ? "translate-x-0" : "translate-x-full"} transitioa duration-500 z-50 `}>
                <div className='flex items-center justify-between font-semibold text-3xl'>
                    <h1>Your Orders</h1>
                    <IoClose onClick={() => setactiveCard(false)} className='text-4xl hover:text-green-600 cursor-pointer' />
                </div>

                {
                    selectCart.map((food)=>{
                        return(
                            <CardItem key={food.id} id = {food.id} name = {food.name} image = {food.image} price = {food.price} qty = {food.qty} />
                        )
                    })
                }

                <div className='absolute bottom-3 font-semibold'>
                    <h1>Total Items: {totalitems} </h1>
                    <h1>Total Price: {totalprice} </h1>
                    <hr />
                    <button className='bg-blue-700 px-2 py-0.5 rounded-md font-semibold hover:bg-gray-600 transition-all duration-500 mt-2 w-[90vw] lg:w-[25vw] '>Check Out</button>
                </div>
            </div>
            <BiSolidCartAlt onClick={() => setactiveCard(true)} className={`text-6xl fixed right-5 bottom-6 cursor-pointer bg-green-400 rounded-full ${selectCart.length > 0 ? "animate-bounce" : "animate-none"} `}/>
        </>
    )
}

export default Card