import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
const Header = () => {
    
  return (
  
      <header className='w-screen fixed top-0 left-0 border-b-2 border-[--primary] z-10 font-Athiti'  >
       
        <nav className='bg-[#F7F7F7] md:flex justify-between place-items-center h-20  m-auto px-4'>
        <div className='ml-20'><Logo/></div>
         
        </nav>
        <div className=' flex bg-[--primary] justify-center  place-items-center h-20  m-auto px-4'>
        <ul className='md:flex justify-between p-0 hidden text-gray-400  mr-20'>
            <Link to='/' className=' p-0 px-5 hover:text-white cursor-pointer hover:underline hover:duration-300'>Home</Link>
            <Link to='/about' id='about'  className=' p-0 px-5 hover:text-white cursor-pointer hover:underline hover:duration-300'>About</Link>
            <Link to='/mentorship-program'  className=' p-0 px-5 hover:text-white cursor-pointer hover:underline hover:duration-300'>Mentorship Programs</Link>
            <Link to='/resources'  className=' p-0 px-5 hover:text-white cursor-pointer hover:underline hover:duration-300'>Reasources</Link>
            <Link to='/media'  className=' p-0 px-5 hover:text-white cursor-pointer hover:underline hover:duration-300'>Media</Link>
            <Link to='/blog'  className=' p-0 px-5 hover:text-white cursor-pointer hover:underline hover:duration-300'>Blog</Link>
            <Link to='/get-involved'  className=' p-0 px-5 hover:text-white cursor-pointer hover:underline hover:duration-300'>Get Involved</Link>
            <Link to='/contact'  className=' p-0 px-5 hover:text-white cursor-pointer hover:underline hover:duration-300'>Contact Us</Link>
          </ul>
        </div>
      </header>
    
  )
}

export default Header;