import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext()
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <div className='flex flex-col mt-2 justify-center items-center max-w-sm mx-auto'>
      <div className='p-4 rounded-md flex flex-col border border-slate-400 shadow-lg'>
        <div>
          <span className='font-bold mr-32'>Subtotal: </span>
          <span className='font-bold'>{formatPrice(total_amount)}</span>
        </div>
        <div className='my-4'>
          <span className='font-semibold text-slate-600 mr-[102px]'>Shipping Fee:</span>
          <span className='font-semibold text-slate-600'>{formatPrice(shipping_fee)}</span>
        </div>
        <hr className='my-3 border-black' />
        <div>
          <span className='font-bold text-lg mr-[99px]'>Order Total:</span>
          <span className='font-bold text-lg'>{formatPrice(total_amount + shipping_fee)}</span>
        </div>
      </div>
      <div className='bg-amber-900 rounded-sm mb-4 font-semibold tracking-wider uppercase text-sm py-2 w-full mt-6 text-center'>
        {myUser ? <Link to="/checkout" className=' text-white'>Proceed to checkout</Link> : <button type='button' onClick={loginWithRedirect} className="text-white">Login</button>}

      </div>
    </div>
  )
}

export default CartTotals