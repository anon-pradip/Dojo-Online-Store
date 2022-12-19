import React from 'react'
import PageHero from '../components/PageHero'
import heroImg from "../assests/hero-bcg.jpeg"

const AboutPage = () => {
  return (
    <div>
      <PageHero title="About" />
      <div className='flex flex-col md:flex-row md:space-x-5 md:items-start justify-center items-center mt-11 mb-4'>
        <img src={heroImg} alt="nice desk" className='h-72 w-72 rounded-md mt-4 md:h-96 md:w-96' />
        {/* Text Content */}
        <div className='mt-4 flex flex-col px-4 justify-center items-center md:justify-start md:mt-0 md:items-start '>
          <h2 className='font-bold text-3xl mt-2'>Our Story</h2>
          <p className='bg-black h-1  w-16 rounded-md -ml-16 md:ml-0'></p>
          <p className='max-w-md mt-4 p-2 text-justify text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dolore quam eaque illo ratione, perferendis eveniet, perspiciatis fuga reprehenderit aut tempora, quae consequatur labore similique facilis voluptas iste nesciunt est.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage