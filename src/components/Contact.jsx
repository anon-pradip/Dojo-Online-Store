import React from 'react'

const Contact = () => {
  return (
    <div className='pt-16 pb-28 flex flex-col justify-center items-center md:flex-row gap-x-12'>
      <div className='flex flex-col gap-y-6'>
        <p className='text-2xl font-bold'>Join our newsletter and get 20% off</p>
        <p className='max-w-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis voluptas, vitae magnam necessitatibus ipsa.</p>
      </div>
      <form action='https://formspree.io/f/maykzpkb' method='POST' className='flex justify-center items-center'>
        <input name='_replyto' type="email" className=' px-1 rounded-sm
        rounded-r-none border-black border-2 placeholder:text-black placeholder:font-semibold placeholder:text-sm placeholder:tracking-wider' placeholder='Enter Email' />
        <button type='submit' className='w-max h-[28px]  px-2 pb-1 bg-purple-900 rounded-r-sm text-white'>Subscribe</button>
      </form>
    </div>
  )
}

export default Contact