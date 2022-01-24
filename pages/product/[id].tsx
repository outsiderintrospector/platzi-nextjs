import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
const [product,setProduct]= useState<TProduct>()
 const { query:{id} } = useRouter()
useEffect(()=>{
  if(id){
    window.fetch(`/api/avo/${id}`)
    .then(response =>response.json())
    .then(data=>setProduct(data))
  }
},[id])

 

  return (
    <section>
      <h1>Página producto: {product?.name}</h1>
       <p>{product?.attributes?.description}</p>
      <img src={product?.image}></img>
    </section>
  )
}

export default ProductPage
