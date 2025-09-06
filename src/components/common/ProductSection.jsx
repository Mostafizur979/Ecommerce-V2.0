"use client"
import ProductCard from "./ProductCard"
import React from 'react';


const ProductSection = ({ products, columns=5}) => {
  return (
    <div className='w-full'>
        <div className={`w-full`}>
          <div className={`w-full pb-4 grid grid-cols-2 gap-3 ${columns==4 ? 'md:grid-cols-3 lg:grid-cols-4' : 'md:grid-cols-4 lg:grid-cols-5'}`}>
            {
              products?.map((product, idx) => {
                return <ProductCard key={idx} data={product}/>
              })
            }
          </div>
        </div>
    </div>
  )
}

export default ProductSection