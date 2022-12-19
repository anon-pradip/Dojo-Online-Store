import React from 'react'
import { PageHero, StripeCheckout } from '../components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <>
      <PageHero title="Checkout" />
      {cart.length < 1 ? <div className='flex min-h-screen flex-col gap-11 justify-center items-center'>
        <h5 className='font-bold text-5xl'>Your cart is currently empty</h5>
        <Link to="/products" className='bg-amber-900 text-white px-3 py-1 tracking-widest uppercase rounded-md'>Fill it</Link>
      </div> : <StripeCheckout />}
    </>
  )
}

export default CheckoutPage