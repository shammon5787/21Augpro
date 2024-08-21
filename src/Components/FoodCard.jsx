import React from 'react'
import img from '../Food/5.avif'

const FoodCard = () => {
    return (
        <div className='bg-gradient-to-tr from-gray-700 to-slate-900 w-full lg:w-[23vw] rounded-md '>
            <div className='flex flex-col items-center p-3'>
                <img className='w-[210px] h-[100px] rounded-md cursor-grab hover:scale-110 transition-all duration-500 ' src={img} alt="" />
            </div>
            <div className='p-3 font-semibold'>
                <div className='flex items-center justify-between'>
                    <h1>pixza</h1>
                    <h1>$: 89</h1>
                </div>
                <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, facere.</p>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default FoodCard