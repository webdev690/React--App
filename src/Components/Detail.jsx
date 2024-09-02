import React, { useState,useEffect } from 'react'
import { Api } from '../Api'
import { useParams } from 'react-router-dom'
const Detail = () => {
    const params=useParams()
    const [Singleproduct, setSingleproduct] = useState([])
    useEffect(()=>{ 
        const Filter= Api.filter(index=>index.title===params.title)
            setSingleproduct(Filter)
    },[params.title])
 {if(Singleproduct.length>0)
    return (
    <div className=' grid grid-cols-2 place-items-center'>
    <div>{<img src={Singleproduct[0].image} alt={Singleproduct[0].title}/>}</div>
    <div>
    <div className=' font-black text-4xl'>{Singleproduct[0].title}</div>
    <div className=' font-semibold'>{Singleproduct[0].description}</div>
    <div>${Singleproduct[0].price}</div>
    </div>

    </div>
  )
}
}
export default Detail