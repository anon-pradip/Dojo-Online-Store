import React from 'react'

const CartColumns = () => {
  return (
    <div className='flex flex-col mt-4'>
      <div className="hidden md:grid grid-cols-5 justify-items-start gap-52 ">
        {/* item, price quantity, subtotal, empty */}
        <span className='font-bold text-lg'>Item</span>
        <span className='font-bold text-lg'>Price</span>
        <span className='font-bold text-lg'>Quantity</span>
        <span className='col-span-2 font-bold text-lg'>Subtotal</span>
      </div>
      <hr className='h-1 w-full border-slate-400' />
    </div>
  )
}

export default CartColumns