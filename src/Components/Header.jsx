import React from 'react'
import Logo from './Logo'
const Header = () => {
    
  return (
  
      <header className='w-screen fixed top-0 left-0 border-b-2 z-10'  >
        <div className=' flex bg-[--primary] justify-end  place-items-center h-20  m-auto px-4'>
          <span className=' mr-28'>
          <a className=' text-white'>http://insipireherafrika.org</a>
          </span>
        </div>
        <nav className='bg-[#F7F7F7] md:flex hidden justify-between place-items-center h-20  m-auto px-4'>
        <div className='ml-20'><Logo/></div>
          <ul className='md:flex justify-between p-0 hidden text-[--secondary]  mr-20'>
            <li className=' p-0 px-5 hover:font-bold cursor-pointer hover:underline hover:duration-300'>Home</li>
            <li  className=' p-0 px-5 hover:font-bold cursor-pointer hover:underline hover:duration-300'>About</li>
            <li  className=' p-0 px-5 hover:font-bold cursor-pointer hover:underline hover:duration-300'>Program Overview</li>
            <li  className=' p-0 px-5 hover:font-bold cursor-pointer hover:underline hover:duration-300'>Contact Us</li>
          </ul>
        </nav>
      </header>
    
  )
}

export default Header;