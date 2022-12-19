import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import CartColumns from "./CartColumns"
import CartItem from "./CartItem"
import CartTotals from './CartTotals'

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <div className='flex flex-col gap-4 max-w-5xl mx-auto'>
      <div className='flex flex-col gap-4  mx-3'>
        <CartColumns />
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
        <hr className='h-1 w-full border-slate-400' />
        <div className='flex flex-row justify-between'>
          <Link to="/products" className='bg-amber-900  text-white px-3 py-1 capitalize tracking-wider w-max rounded-md'>continue shopping</Link>
          <button className='bg-black  text-white px-3 py-1 capitalize tracking-wider w-max rounded-md' onClick={clearCart}>clear cart</button>
        </div>
      </div>
      <CartTotals />
    </div>
  )
}

export default CartContent