import React from 'react'
import Cartitem from './Cartitem'
import {useSelector } from 'react-redux'
const Cart = () => {
  const cartItems=useSelector((state)=>state.cart.items)
  return (
    <div>
      {cartItems.map((item,key)=><Cartitem key={key} data={item}/>)}
    </div>
  )
}

export default Cart