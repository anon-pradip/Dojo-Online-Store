import React from 'react'
import Loading from "./Loading"
import Error from "./Error"
import Product from './Product'

import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  const { products_loading: loading, products_error: error, featured_products: featured } = useProductsContext();

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <div className='mt-16 lg:mt-24 pb-20 bg-rose-100 text-center flex flex-col justify-center items-center'>
      <p className='font-bold text-5xl capitalize mt-8'>Featured Products</p>
      <div className='h-1 w-20 bg-black mb-16 mt-2 rounded-md'></div>
      <div className='grid md:grid-cols-3 items-center justify-center gap-x-20'>
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
      <Link to="/products" className='rounded-sm px-2 py-1 tracking-widest bg-amber-900 text-white mt-6 '>All Products</Link>
    </div>
  )
}

export default FeaturedProducts