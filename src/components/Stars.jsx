import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (<BsStarFill className='fill-orange-500' />) : stars > number ? (<BsStarHalf className='fill-orange-500' />) : (<BsStar className='fill-orange-500' />)}</span>
    )
  })
  return (
    <div className='flex flex-col mt-2 mb-2'>
      <div className='flex flex-row mb-2'>
        {tempStars}
      </div>
      <p className='text-slate-500'>({reviews} customer reviews)</p>
    </div>
  )
}

export default Stars