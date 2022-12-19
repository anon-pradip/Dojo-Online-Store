import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa"

const AmountButton = ({ amount, increase, decrease }) => {
  return (
    <div className='flex mt-3 gap-4 mb-2 ml-4 items-center'>
      <FaMinus className='text-xs cursor-pointer' onClick={decrease} />
      <p className='text-2xl font-bold'>{amount}</p>
      <FaPlus className='text-xs cursor-pointer' onClick={increase} />
    </div>
  )
}

export default AmountButton