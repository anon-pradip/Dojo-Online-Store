import React from 'react'
import { services } from "../utils/constants"

const Services = () => {
  return (
    <div className='flex flex-col bg-purple-300 pb-4 md:pb-0 md:bg-white justify-center items-center'>
      <div className='bg-purple-300 py-4 capitalize h-72 w-full'>
        <div className='flex flex-col justify-center items-center md:items-start gap-y-4 md:flex-row md:gap-x-36'>
          <h1 className='font-bold text-2xl mt-4 font-mono'>custom furniture <br /> built only for you</h1>
          <p className='text-slate-600 max-w-lg text-center font-semibold mt-4 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ratione!</p>
        </div>
      </div>
      <div className='flex flex-col gap-4 md:flex-row -mt-20 md:-mt-40'>
        {services.map((service) => {
          const { id, title, text, icon } = service
          return (
            <div className='bg-gradient-to-r hover:bg-gradient-to-l from-purple-500 to-pink-500 rounded-md flex flex-col gap-y-3 px-5 justify-center items-center max-w-sm h-60' key={id}>
              <p className='bg-white p-3 rounded-full'>{icon}</p>
              <p className='capitalize text-white text-lg font-bold tracking-wider'>{title}</p>
              <p className='text-justify text-white'>{text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services