import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItem from '../Components/FoodItem'

const Home = () => {
  return (
    <div className='m-6'>
        <Navbar />
        <CategoryMenu />
        <FoodItem />
    </div>
  )
}

export default Home