import React from 'react'
import { Hero, FeaturedProducts, Contact, Services } from '../components'

const HomePage = () => {
  return (
    <div className=''>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </div>
  )
}

export default HomePage