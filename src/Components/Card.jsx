import React from 'react'
import {useDispatch } from 'react-redux'
import { addtocart } from '../Redux/Cartreducer'
import { Link } from 'react-router-dom'
const Card = ({data}) => {
    const dispatch =useDispatch()
    const {title,price,image,id}=data
    const handlecart=()=>{
        dispatch(addtocart({
            productId:id,
            quantity:1
        }))
    }
  return (
    <>
    <div className=' min-h-56 w-40'>
      <Link to={title}>
        <img src={image} alt="404" className=' scale-[3/2] object-contain w-40'/>
        <h2 className=' text-center'>{title}</h2>
        <div>{price}</div>
      </Link>
        <button className=' bg-slate-500 rounded p-1 text-white' onClick={handlecart}>Add To Cart</button>
    </div>
    </>
  )
}

export default Card