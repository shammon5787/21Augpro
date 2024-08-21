import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const ListUniqueCategory = ()=>{
        const UniqueCategory = [... new Set(FoodData.map((food)=>food.category))]
        setcategories(UniqueCategory);
    }
    useEffect(() => {
      ListUniqueCategory()
    }, [])
    
  return (
    <div className='mt-24'>
        <h1 className='font-bold text-3xl uppercase'>order your favorite food</h1>
        <div className='flex items-center gap-5 overflow-x-scroll lg:overflow-x-hidden '>
            {
                categories.map((category, index)=>{
                    return(
                        <button key={index} className='bg-blue-950 px-2 py-0.5 rounded-md font-semibold hover:bg-gray-600 transition-all duration-500 mt-2'>{category}</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryMenu