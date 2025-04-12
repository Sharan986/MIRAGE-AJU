import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/LOGO1.jpeg'

const Nav = () => {
  return (
   <>
   <div className='flex justify-between items-center h-24 p-5 sticky top-0 bg-white z-10'>
   <div>
   <h1>
    <Link to="/">
    <img src={logo} alt="logo" className='w-50 h-10' />
    </Link>
   </h1>
   </div> {/* logo */}

   <div className='flex justify-between items-center gap-8'>
    <h1 className='text-xl cursor-pointer'>
        <Link to="/dashboard">Dashboard</Link>
    </h1>
    <h1 className='text-xl cursor-pointer'>
      <Link to="/records">Records</Link>
    </h1>
    <h1 className='text-xl cursor-pointer'>
    <Link to="/consultation">Consultation</Link>
    </h1>
    <h1 className='text-xl cursor-pointer'>
    <Link to="/medicine">Medicine</Link>
    </h1>
    <h1 className='text-xl cursor-pointer'>
    <Link to="/emergency">Emergency</Link>

    </h1>

   </div> {/* middle links */}

   <div className='flex justify-between items-center gap-4'>
    <button className='text-blue-500 '>
      <Link to="/login">  Login</Link>
    </button>
    <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
      <Link to="/Signup">Get Started</Link>
    </button>
   </div> {/* button */}

   </div> {/* nav */}
   </>
  )
}

export default Nav
