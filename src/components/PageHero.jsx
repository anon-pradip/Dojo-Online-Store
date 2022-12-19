import React from 'react'
import { Link } from 'react-router-dom'

const PageHero = ({ title }) => {
  return (
    <div className='flex w-full mt-2 gap-x-1 font-sans justify-center items-center h-40 text-lg font-semibold text-gray-600 text-capitalize bg-pink-400'>
      <Link to="/">Home</Link>
      <p>/</p>
      <p className='capitalize'>{title}</p>
    </div>
  )
}

export default PageHero