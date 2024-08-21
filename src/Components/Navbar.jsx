import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='font-bold text-4xl'>
            <h1> {new Date().toUTCString().slice(0, 16)} </h1>
            <h1 className='uppercase'>welcome to new fast food center</h1>
        </div>
        <input className='p-2 w-full rounded-md outline-none text-black lg:w-[28vw] ' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar