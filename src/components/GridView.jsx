import React from 'react'
import Product from './Product'

const GridView = ({ products }) => {
  return (
    <div className='mx-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        return <Product key={product.id} {...product} />
      })}
    </div>
  )
}

export default GridView