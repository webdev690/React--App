import React, { useEffect, useState } from 'react'
import { addquantity } from '../Redux/Cartreducer'
import { useDispatch } from 'react-redux'
import { Api } from '../Api'
const Cartitem = ({data}) => {
    const{productId,quantity}=data
    const dispatch=useDispatch()
  const [items, setitems] = useState([])
  useEffect(() => {
    const finddetail = Api.filter(elem=>elem.id===productId)[0]
    setitems(finddetail);
}, [productId]);
console.log(items)
const handleminus=()=>{
    dispatch(addquantity({
        productId:productId,
        quantity:quantity - 1
    }))
}
const handleplus=()=>{
    dispatch(addquantity({
        productId:productId,
        quantity:quantity + 1
    }))
}
  return (
  <>
    <div>{items.title}</div>
    <div>{items.price*quantity}</div>
    <button onClick={handleminus}>-</button>
    <span>{quantity}</span>
    <button onClick={handleplus}>+</button>
  </>
  )
  }

export default Cartitem