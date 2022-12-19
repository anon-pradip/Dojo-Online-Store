import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assests/logo.png"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FiUserPlus, FiUserMinus } from "react-icons/fi"
import { AiOutlineMenu } from "react-icons/ai"
import { FaWindowClose } from "react-icons/fa"

const Sidebar = ({ showSidebar, active, loginWithRedirect, logout, myUser, total_items }) => {
  return (
    <div className="md:hidden flex flex-col justify-center items-center">
      <div className='flex w-full flex-row justify-between items-center px-4'>
        <Link to="/" className='group'>
          <img src={logo} alt="logo" className='h-14 w-20 border-black border-b-2 border-opacity-0 group-hover:border-opacity-100 duration-500' />
        </Link>
        <button onClick={showSidebar} className={"md:hidden  h-max "}>
          {!active ? <AiOutlineMenu className='text-xl mt-1' /> : <FaWindowClose className='text-3xl -mr-3' />}
        </button>
      </div>
      <div className={active ? 'md:hidden flex flex-col mt-4 px-4' : "hidden"}>
        {/* home about products */}
        <div className='flex flex-col justify-center items-center mt-4 gap-y-6'>
          <Link to="/" className='border-black border-b-2 border-opacity-0 hover:border-opacity-100 duration-500' onClick={showSidebar}>Home
          </Link>
          <Link to="/about" className='border-black border-b-2 border-opacity-0 hover:border-opacity-100 duration-500' onClick={showSidebar}>About
          </Link>
          <Link to="/products" className='border-black border-b-2 border-opacity-0 hover:border-opacity-100 duration-500' onClick={showSidebar}>Products
          </Link>
          {myUser && <Link to="/checkout" className='border-black border-b-2 border-opacity-0 hover:border-opacity-100 duration-500' onClick={showSidebar}>Checkout
          </Link>}
        </div>

        {/* Cart and login buttons with icons at right */}
        <div className='flex mt-8  justify-center items-center gap-x-4'>
          <div className='flex justify-center items-center gap-x-1 border-black border-b-2 border-opacity-0 hover:border-opacity-100 duration-500' onClick={showSidebar}>
            <Link to="/cart">Cart</Link>
            <AiOutlineShoppingCart />
            <p className='bg-yellow-400 rounded-full h-1 w-6 -mt-5 -ml-2 text-center pb-6'>{total_items}</p>
          </div>
          <div className='flex gap-x-2 justify-center items-center  border-black border-b-2 border-opacity-0 hover:border-opacity-100 duration-500' onClick={showSidebar}>
            {myUser ? <button className='flex justify-center items-center gap-2' onClick={() => logout({ returnTo: window.location.origin })}>
              Logout
              <FiUserMinus />
            </button> : <button className='flex mr-1 justify-center items-center gap-2' onClick={loginWithRedirect}>
              Login
              <FiUserPlus />
            </button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar