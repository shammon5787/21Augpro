import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='font-bold text-4xl'>
            <h1> {new Date().toUTCString().slice(0, 16)} </h1>
            <h1 className='uppercase'>welcome to our fast food website</h1>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='text-black p-2 w-full rounded-md outline-none lg:w-[27vw] mt-2 ' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar