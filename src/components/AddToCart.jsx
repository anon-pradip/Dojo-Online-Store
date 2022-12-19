import React from 'react'
import { useState } from 'react';
import { useCartContext } from '../context/cart_context';
import { FaCheck } from "react-icons/fa"
import { Link } from 'react-router-dom';
import AmountButton from './AmountButton';

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const { addToCart } = useCartContext();

  const [mainColor, setMainColor] = useState(colors[0])
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock
      }
      return tempAmount
    })
  }

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }

  return (
    <div className='flex flex-col'>
      {/* COLORS */}
      <div className='flex gap-12 mt-4'>
        <span className="font-bold">Colors: </span>
        <div className='flex justify-center items-center gap-2'>
          {colors.map((color, index) => {
            return <button className={`h-[14px] w-[14px] rounded-full ${mainColor === color ? "opacity-100" : "opacity-70"}`} style={{ background: color }} key={index} onClick={() => setMainColor(color)}>
              {mainColor === color ? <FaCheck className='h-3 w-3 fill-white' /> : null}
            </button>
          })}
        </div>
      </div>
      {/* CART BUTTONS */}
      <div>
        <AmountButton amount={amount} increase={increase} decrease={decrease} />
      </div>
      <div className='mt-3'>
        <Link to="/cart" className='text-white font-mono tracking-wider font-extrabold bg-amber-900 rounded-md w-max p-2' onClick={() => addToCart(id, amount, mainColor, product)}>ADD TO CART</Link>
      </div>
    </div>
  )
}

export default AddToCart