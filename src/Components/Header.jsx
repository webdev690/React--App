import React from 'react'
import { IoCart } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const total=useSelector(state=>state.cart.items)
  const [quantity, setquantity] = useState(0)
  useEffect(()=>{
    let Total=0
    total.forEach(item => Total+=item.quantity);
    setquantity(Total)
  },[total])

  return (
    <div className='flex justify-between'>
    <div className=' font-black'>Home.</div>
    <Link to={'/cart'} className='relative top-4 right-4 cursor-pointer'>
      <IoCart className='text-3xl' />
      <span className='absolute bottom-2/3 left-2/3 bg-red-600 text-white rounded-full text-sm h-5 w-5 text-center '>{quantity}</span>
    </Link>
  </div>
  
  )
}

export default Header