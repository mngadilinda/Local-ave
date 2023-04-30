import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'



const Header = () => {
    const [open, setOpen] = useState(false)

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className='flex justify between cursor: pointer items-center z-[5] sticky top-0 bg-[#000000] w-full h-16  text-gray-500'>
        <h1 className='w-full md:text-3xl sm: text-xl font-bold text-gray-400 ml-3'><Link to='/'>LOCAL - AVE</Link></h1>
        <ul className='hidden md:flex'>
            <li className='p-4 font-semibold'><Link to="/" >HOME</Link></li>
            <li className='p-4 font-semibold'><Link to="/store">STORE</Link></li>
            <li className='p-4 font-semibold'><Link onClick={()=>setOpen(!open)} to="#">CART</Link></li>
            <li className='p-4 font-semibold'><Link to="#">CHECKOUT</Link></li>
            <li className='p-4 font-semibold'><Link to="#">Signup</Link></li>
            <li className='p-4 font-semibold'><Link to="#">Login</Link></li>
            {/* <li className='p-4 font-semibold'><Link to="/logout">Logout</Link></li> */}
        </ul>
        {open && <Cart/>}
        <div onClick={handleNav} className='block md:hidden mr-2'>
            {nav? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            
        </div>
        <div className={ nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] md:hidden ease-in-out duration-500': 'fixed left-[-100%]'}>
            <h1 className='w-full md:text-3xl sm: text-xl font-bold text-gray-400 m-3'><Link to="/" >LOCAL - AVE</Link></h1>
            <ul>
                <li className='p-4 border-b border-b-gray-500'><Link onClick={handleNav} to="/" >HOME</Link></li>
                <li className='p-4 border-b border-b-gray-500'><Link onClick={handleNav} to="/store">STORE</Link></li>
                <li className='p-4 border-b border-b-gray-500'><Link onClick={handleNav} to="#">CART</Link></li>
                <li className='p-4 border-b border-b-gray-500'><Link onClick={handleNav} to="#">Signup</Link></li>
                <li className='p-4 border-b border-b-gray-500'><Link onClick={handleNav} to="#">Login</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header