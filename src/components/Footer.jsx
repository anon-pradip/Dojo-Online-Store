import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black tracking-wider mt-auto text-white flex flex-col items-center justify-center py-6'>
      <div className='flex flex-row'>
        <h5>&copy;</h5>
        <h5>{new Date().getFullYear()}</h5>
        <h5 className='ml-1 text-purple-500'>Dojo</h5>
      </div>
      <div>
        All rights reserved
      </div>
    </div>
  )
}

export default Footer