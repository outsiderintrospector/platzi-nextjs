import React, { useEffect, useState } from 'react'


const HomePage = () => {
const [productList,setProductList] =useState<TProduct[]>([])

useEffect(()=>{
  window.fetch('/api/avo').then(r=>r.json()).then(({data,length})=>{
    setProductList(data)
  })
},[])

  return (
    <div>
      
      <div>Platzi and Next.js!</div>
      {productList.map(p=>(

        <div>{p.name}</div>
      ))}
    </div>
  )
}

export default HomePage
