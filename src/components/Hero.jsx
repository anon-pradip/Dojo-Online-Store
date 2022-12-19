import React from 'react'
import { Link } from 'react-router-dom'
import bcg from "../assests/hero-bcg.jpeg"
import bcg2 from "../assests/hero-bcg-2.jpeg"


const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-32 lg:mt-14 max-w-4xl px-4 py-4 gap-x-28 mx-auto md:flex-row'>
      {/* Text content */}
      <div className='flex flex-col max-w-sm justify-center items-center -mt-28'>
        <h1 className='text-5xl font-bold font-serif capitalize'>
          design your <br /> comfort zone
        </h1>
        <p className='mt-4 text-justify text-slate-500'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa placeat perspiciatis maxime. Repellat neque illum labore corrupti natus ratione aliquam.
        </p>
        <Link to="/products" className='mt-4 text-white bg-gray-700 px-4 py-2 text-center w-32 rounded-md'>
          Shop now
        </Link>
      </div>
      {/* Image content */}
      <div className='hidden md:flex md:flex-col relative'>
        <img src={bcg} alt="" className='' />
        <img src={bcg2} alt="second pic" className='h-20 w-32 -mt-20 -ml-11' />
      </div>
    </div>
  )
}

export default Hero