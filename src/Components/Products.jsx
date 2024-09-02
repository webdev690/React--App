import React from 'react'
import {Api} from '../Api'
import Card from './Card'
const Products = () => {
  return (
    <div className='grid grid-cols-4 place-items-center gap-9'>
    {Api.map((elem,key)=><Card key={key} data={elem}/>)}
    </div>
  )
}

export default Products