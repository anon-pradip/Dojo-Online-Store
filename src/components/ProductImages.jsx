import React from 'react'
import { useState } from 'react'

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={main.url} alt="main image" className='w-[400px] h-[400px] 
      object-cover mb-4' />
      {/* GALLERY */}
      <div className='flex flex-row gap-2 mb-4' >
        {images.map((image, index) => {
          return <img src={image.url} className={`h-[50px] w-[70px] object-cover hover:cursor-pointer ${image.url === main.url ? "border-4 border-black" : null} `} alt={image.filename} key={index} onClick={() => setMain(images[index])} />
        })}
      </div>
    </div>
  )
}

export default ProductImages