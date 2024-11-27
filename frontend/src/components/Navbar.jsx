import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-8 space-x-2 bg-yellow-300'>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/home"> Home </Link>
    </div>
    
  )
}

export default Navbar