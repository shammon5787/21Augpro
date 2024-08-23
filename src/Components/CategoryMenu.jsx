import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const ListUniqueCategory = () => {
        const UniqueCategory = [... new Set(FoodData.map((food) => food.category))]
        setcategories(UniqueCategory);
    }
    useEffect(() => {
        ListUniqueCategory()
    }, [])
    const dispatch = useDispatch()

    return (
        <div className='mt-24'>
            <h1 className='font-bold text-3xl uppercase'>order your favorite food</h1>
            <div className='flex items-center gap-5 overflow-x-scroll lg:overflow-x-hidden '>
                <button onClick={() => dispatch(addCategory("All"))} className='bg-blue-950 px-2 py-0.5 rounded-md font-semibold hover:bg-gray-600 transition-all duration-500 mt-2'>All</button>
                {
                    categories.map((category, index) => {
                        return (
                            <button onClick={() => dispatch(addCategory(category))} key={index} className='bg-blue-950 px-2 py-0.5 rounded-md font-semibold hover:bg-gray-600 transition-all duration-500 mt-2'>{category}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryMenu