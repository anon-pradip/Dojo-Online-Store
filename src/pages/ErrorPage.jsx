import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='bg-purple-400 min-h-[calc(100vh-9.5rem)] flex flex-col px-3 gap-4 justify-center items-center'>
      <h1 className='text-9xl font-bold'>404</h1>
      <p className='font-bold font-mono text-xl'>Sorry, the page you tried cannot be found.</p>
      <button className='bg-slate-800 text-white font-mono rounded-sm px-2 py-2 uppercase tracking-widest'>
        <Link to="/" >Back Home</Link>
      </button>
    </div>
  )
}

export default ErrorPage