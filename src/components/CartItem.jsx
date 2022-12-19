import React from 'react'
import { MdRemoveCircle } from "react-icons/md"
import { formatPrice } from '../utils/helpers'
import { useCartContext } from '../context/cart_context'
import AmountButton from './AmountButton'
const CartItem = ({ id, name, image, price, amount, color }) => {
  const { toggleAmount, removeItem } = useCartContext();
  const increase = () => {
    toggleAmount(id, 'inc')
  }
  const decrease = () => {
    toggleAmount(id, 'dec')
  }

  return (
    <div className='grid grid-cols-5 gap-[175px] items-center justify-start'>
      {/* image and content */}
      <div className='flex flex-row gap-2 w-[300px] items-center justify-start'>
        {/* IMAGE */}
        <div>
          <img src={image} alt={name} className="h-12 w-16" />
        </div>
        {/* NAME, COLORS NAD PRICE */}
        <div className='flex flex-col justify-start items-start'>
          <h5 className='font-bold capitalize'>{name}</h5>
          <div className='flex justify-center gap-3 items-center'>
            <p>Color: </p>
            <span style={{ background: color }} className="h-3 w-3 rounded-full">&nbsp;</span>
          </div>
          <p className='block md:hidden'>{formatPrice(price)}</p>
        </div>
      </div>
      {/* price */}
      <div className='hidden md:block'>
        <p>{formatPrice(price)}</p>
      </div>
      {/* quantity */}
      <div className='w-max md:ml-0'>
        <AmountButton amount={amount} increase={increase} decrease={decrease} />
      </div>
      {/* subtotal */}
      <div className='grid grid-cols-2 -ml-16 md:ml-5 w-max justify-center items-center space-x-5 md:space-x-20'>
        <div className=''>
          <p>{formatPrice(price * amount)}</p>
        </div>
        {/* icon */}
        <div className='text-2xl'>
          <button onClick={() => removeItem(id)}>
            <MdRemoveCircle />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem