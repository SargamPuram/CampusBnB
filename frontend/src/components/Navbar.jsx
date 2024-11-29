import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-yellow-400 p-4 sticky top-0 z-10'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold text-black-600'>
          <Link to="/">Dormly</Link>
        </div>

        {/* Navigation Links */}
        <div className='hidden md:flex space-x-8 items-center'>
        <Link to="/gallery" className='text-gray-700 hover:text-pink-600 transition duration-200'>Browse</Link>
          <Link to="/photo-upload" className='text-gray-700 hover:text-pink-600 transition duration-200'>List</Link>
          <Link to="/login" className='text-gray-700 hover:text-pink-600 transition duration-200'>Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button className='text-gray-700 focus:outline-none'>
            {/* Icon for Mobile Menu (Optional: Add actual functionality) */}
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
