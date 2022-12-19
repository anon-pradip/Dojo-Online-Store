import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import logo from "../assests/logo.png"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FiUserMinus, FiUserPlus } from "react-icons/fi"
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const Navbar = () => {
  const { total_items, clearCart } = useCartContext();
  const [active, setActive] = useState(false)
  const { loginWithRedirect, logout, myUser } = useUserContext();
  const showSidebar = () => {
    setActive(!active);
  }

  return (
    <nav >
      <div className='hidden md:flex max-w-3xl mx-auto mt-4 items-center justify-between'>
        {/* logo */}
        <Link to="/" className='md:group'>
          <img src={logo} alt="logo" className='h-14 w-20 border-black border-b-2 border-opacity-0 group-hover:border-opacity-100 duration-500' />
        </Link>
        {/* content */}

        {/* home about products */}
        <div className='flex gap-x-6'>
          <Link to="/" className='border-black border-b-2 border-opacity-0 hover:border-opacity-100 duration-500'>Home
          </Link>
          <Link to="/about" className='border-black border-b-2 border-opacity-0 hover:border-opacity-100 duration-500'>About
          </Link>
          <Link to="/products" className='border-black border-b-2 border-opacity-0 hover:border-opacity-100 duration-500'>Products
          </Link>
          {myUser && <Link to="/checkout" className='border-black border-b-2 border-opacity-0 hover:border-opacity-100 duration-500' onClick={showSidebar}>Checkout
          </Link>}
        </div>

        {/* Cart and login buttons with icons at right */}
        <div className='flex justify-center items-center gap-x-4'>
          <div className='flex h-max justify-center items-center gap-x-1 border-black border-b-2 border-opacity-0 hover:border-opacity-100 duration-500'>
            <Link to="/cart">Cart</Link>
            <AiOutlineShoppingCart />
            <p className='bg-yellow-400 rounded-full h-1 w-6 -mt-5 -ml-2 text-center pb-6'>{total_items}</p>
          </div>
          <div className='flex justify-center items-center  border-black border-b-2 border-opacity-0 hover:border-opacity-100 duration-500'  >
            {myUser ? <button className='flex justify-center items-center gap-2' onClick={() => {
              clearCart();
              logout({ returnTo: window.location.origin })
            }

            }>
              Logout
              <FiUserMinus />
            </button> : <button className='flex mr-1 justify-center items-center gap-2' onClick={loginWithRedirect}>
              Login
              <FiUserPlus />
            </button>}
          </div>
        </div>
      </div>
      <Sidebar showSidebar={showSidebar} active={active} myUser={myUser} loginWithRedirect={loginWithRedirect} logout={logout} total_items={total_items} />

    </nav>
  )
}

export default Navbar