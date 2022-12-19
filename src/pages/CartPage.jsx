import React from 'react'
import { Link } from 'react-router-dom';
import { PageHero, CartContent } from "../components"
import { useCartContext } from '../context/cart_context'

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <div className='flex min-h-screen flex-col gap-11 justify-center items-center'>
        <h5 className='font-bold text-5xl'>Your cart is currently empty</h5>
        <Link to="/products" className='bg-amber-900 text-white px-3 py-1 tracking-widest uppercase rounded-md'>Fill it</Link>
      </div>
    )
  }

  return (
    <div>
      <PageHero title="Cart" />
      <CartContent />
    </div>
  )
}

export default CartPage