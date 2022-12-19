import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'


const Product = ({ image, name, price, id }) => {
  return (
    <div className='relative group flex justify-center items-center'>
      <div className='flex flex-col gap-y-2 w-full h-60 mb-4'>
        <img src={image} alt={name} className="w-full h-52 object-cover group-hover:blur-[2px]" />
        <div className='absolute top-20 left-40 md:left-40 hidden group-hover:block'>
          {/* <BiSearchAlt2 /> */}
          <Link to={`/products/${id}`}>
            <button className='bg-gradient-to-l from-purple-500 to-pink-500 text-white px-4 py-2 text-xl rounded-md'>View</button>
          </Link>
        </div>
        <div className='flex justify-between mx-2'>
          <h1 className='font-bold capitalize font-mono'>{name}</h1>
          <h1 className='font-bold font-mono '>{formatPrice(price)}</h1>
        </div>
      </div>
    </div>
  )
}

export default Product