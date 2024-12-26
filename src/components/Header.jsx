import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GiBookshelf } from "react-icons/gi";
import {AuthContext} from "../utils/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'
function Header() {
  const{user,logOutUser}=useContext(AuthContext);
  //logout
const handleLogout=()=>{
  logOutUser();
}


  const links=<>
    <NavLink to='/' className={ ({isActive})=>isActive?"text-red-500 text-base":"text-base"}>Home</NavLink>
    <NavLink to='/addbooks' className={ ({isActive})=>isActive?"text-red-500 text-base":"text-base"}>Add Books</NavLink>
    <NavLink to='/allbooks' className={ ({isActive})=>isActive?"text-red-500 text-base":"text-base"}>All Books</NavLink>
    <NavLink to={`/borrowedbooks/${user?.email}`} className={ ({isActive})=>isActive?"text-red-500 text-base":"text-base"}>Borrowed Books</NavLink>
  </>
  return (
   <div className="lg:w-[90%] mx-auto">
     <div className="navbar bg-base-100 lg:h-[90px] items-center">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-5 z-50">
        {links}
        <Link to='/login'>
      <button className='bg-red-500 text-white px-8 py-3 hover:bg-black transition md:hidden flex'>Login</button>
    </Link>
    <Link to='/register'>
      <button className='bg-red-500 text-white px-8 py-3 hover:bg-black transition md:hidden flex'>Register</button>
    </Link>
      </ul>
    </div>
    <Link to='/'>
      <div className="flex justify-content items-center gap-2">
      <GiBookshelf className='text-red-500 md:text-4xl text-2xl' />
      <p className='md:text-3xl text-2xl font-bold '>Book <span className='text-red-500'>Worm</span> </p>
      </div>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
    {links}
    </ul>
  </div>
  <div className="navbar-end gap-5">
  {user?
  <>
    <img id="clickable" className='my-anchor-element h-[50px] w-[50px] rounded-full' src={user.photoURL} alt="user" />
   <div className="relative">
   <Tooltip className='z-[60]' anchorSelect=".my-anchor-element ,#clickable" 
     clickable 
    place="bottom">
  <div>
    <p className='text-red-500'>{user.displayName}</p>
    <button onClick={handleLogout} className='bg-red-500 text-white px-8 py-3 hover:bg-black transition'>Logout</button>
  </div>
</Tooltip>
   </div>
  </>:""
 
  }
    <Link to='login'>
      <button className='bg-red-500 text-white px-8 py-3 hover:bg-black transition hidden md:flex'>Login</button>
    </Link>
    <Link to='register'>
      <button className='bg-red-500 text-white px-8 py-3 hover:bg-black transition hidden md:flex'>Register</button>
    </Link>
  </div>
</div>
   </div>
  )
}

export default Header