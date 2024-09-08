import React from 'react'
import logo from "../assets/logo.png";
import { navItems } from '../constants';
import {Menu , X} from "lucide-react";
import  {useState} from "react";
const Navbar = () => {
  const [mobileDrawer,setMobileDrawer] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawer(!mobileDrawer)
  }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className='flex justify-between items-center'>
        <div className="flex items-center flex-shrink-0">
        
        <span className=" text-blue-600 text-xl tracking-tight">VirtualReal</span>
      </div>
<ul className='hidden  lg:flex ml-14 space-x-12'>
{navItems.map((item,index) =>(
  <li key={index}>
    <a href={item.href}>{item.label}</a>
  </li>
))}
</ul>
<div className="hidden lg:flex justify-center space-x-12 items-center">
  <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
  <a href='#' className='bg-gradient-to-r from-blue-500 to-blue-900 py-2 px-8 rounded-md'>
    
    Create an account
    </a>
</div>
<div className="lg:hidden md:flex flex-col justify-end">
  <button onClick={toggleNavbar}>
    {mobileDrawer ? <X /> : <Menu/>}
  </button>
</div>
</div>
{mobileDrawer && (
  <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
    <ul>
      {navItems.map((item,index) =>(
        <li key={index}>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
    <div className="flex space-x-6">
      <a href='#' className='py-2 px-3  border rounded-md'>
        Sign in
      </a>
      <div>
      <a href="#" className='bg-gradient-to-r  from-blue-500 to-blue-900 py-3 px-4 mx-3 rounded-md '>
          Start for free
        </a>
        </div>
    </div>
  </div>
)}
      </div>
    </nav>
  )
}

export default Navbar
