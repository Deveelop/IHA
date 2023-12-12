import React from 'react'
import Logo from './Logo'
const Header = () => {
    
  return (
  
      <header className='w-screen fixed top-0 left-0 border-b-2 border-[--primary] z-10 font-Athiti'  >
       
        <nav className='bg-[#F7F7F7] md:flex justify-between place-items-center h-20  m-auto px-4'>
        <div className='ml-20'><Logo/></div>
         
        </nav>
        <div className=' flex bg-[--primary]  place-items-center h-20  m-auto px-4'>
        <ul className='md:flex justify-between p-0 hidden text-gray-400  mr-20'>
            <li className=' p-0 px-5 hover:text-white cursor-pointer hover:underline hover:duration-300'>Home</li>
            <li  className=' p-0 px-5 hover:text-white cursor-pointer hover:underline hover:duration-300'>About</li>
            <li  className=' p-0 px-5 hover:text-white cursor-pointer hover:underline hover:duration-300'>Program Overview</li>
            <li  className=' p-0 px-5 hover:text-white cursor-pointer hover:underline hover:duration-300'>Contact Us</li>
          </ul>
        </div>
      </header>
    
  )
}

export default Header;