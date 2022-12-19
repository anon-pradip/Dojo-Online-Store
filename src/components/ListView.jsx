import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'

const ListView = ({ products }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      {products.map((product) => {
        const { image, id, price, name, description } = product
        return (
          <div className='flex flex-col justify-center items-center mb-10 md:mb-6 gap-x-0 gap-y-2 md:flex-row md:gap-x-6 md:gap-y-0'>
            {/* Image */}
            <div className="flex justify-center items-center">
              <img src={image} alt={name} className="w-80 h-64 object-cover" />
            </div>
            {/* Content */}
            <div className='flex flex-col gap-2 justify-center items-center md:items-start md:gap-1'>
              <h5 className='capitalize font-bold text-xl md:text-lg tracking-wide'>{name}</h5>
              <h5 className='font-bold font-sans text-orange-600'>{formatPrice(price)}</h5>
              <h1 className='text-justify md:text-start text-slate-500 max-w-sm'>{description.substring(0, 150)}...</h1>
              <Link to={`/products/${id}`}>
                <button className="bg-indigo-700 text-sm font-semibold text-white rounded-sm px-2 py-1 tracking-widest -mt-1 md:mt-3 ">DETAILS</button>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListView