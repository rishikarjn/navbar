import React from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center px-[1rem] py-[2rem] bg-[lightseagreen]'>
       <h1 className='text-2xl font-bold'>Logo</h1>


       <div className='flex gap-9 items-center text-lg max-[720px]:hidden'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Service</a>
        <a href="">Help</a>
      </div> 
      <div className='text-2xl flex items-center gap-3'></div>
      <span>🛒</span>
      <span>🛒</span>
      <AiOutlineMenuUnfold className='min-[720px]:hidden text-4xl'/>




<div className='absolute top-0 left-0 h-screen w-[20rem] flex flex-col bg-[black]'>
    <a href="" className=' hover:bg-[#161414] p-5 flex items-center justify-center'>Home</a>
        <a href=""className='hover:bg-[#161414] p-5 flex items-center justify-center'>About</a>
        <a href=""className='hover:bg-[#161414] p-5 flex items-center justify-center'>Contact</a>
        <a href=""className='hover:bg-[#161414] p-5 flex items-center justify-center'>Service</a>
        <a href=""className='hover:bg-[#161414] p-5 flex items-center justify-center'>Help</a>
</div>
    </div>
  )
}

export default Navbar
