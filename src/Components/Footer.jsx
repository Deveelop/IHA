import React from 'react';
import Logo from './Logo';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="grid md:grid-cols-3 bg-[#f0de7b] relative z-20 text-[#36200F] md:p-8 p-4">

      <div className="flex flex-col col-span-3 md:col-span-1 py-2">
      <img src='/logo.png' alt="Iha" className="w-30 md:w-15" />
            <div className=' md:text-center'>
               <h1 className=' font-Athiti'>CALL US</h1>
               <p className=' font-thin '>+234 806 943 3726</p>
               <h1 className='font-Athiti'>LOCATION</h1>
               <p className='font-thin'>Abuja, Nigeria</p>

               <div className="flex justify-center gap-x-8 col-span-3 md:col-span-1 py-2 mt-8 md:mt-0">
          <a href="http://" target="_blank" rel="noopener noreferrer"> <BsLinkedin size={25} /> </a>
          <a href="http://" target="_blank" rel="noopener noreferrer"> <BsInstagram size={25} /> </a>
          <a href="http://" target="_blank" rel="noopener noreferrer"> <BsTwitter size={25} /> </a>
      </div>
            </div>
      </div>

      <figure className="grid md:grid-cols-1 grid-cols-1 col-span-3 md:col-span-1 py-2">
          <div className=' md:justify-center grid space-y-6'>
          <h1 className=" font-Athiti"> What We Do </h1>
            
              <p> Mentorship program </p>
              <p> Meet Our Teams </p>
              <p> Mentors </p>
              <p> Mentees </p>
              </div>
      </figure>

     
        <div className=' md:w-[60%]  '>
      <h1 className=" font-Athiti">Stay In Touch</h1>
         <p className='font-thin' >Subscribe to get the latest news and what is happening at IHA</p>
         <input className=' w-full bg-inherit border border-[#36200F] placeholder-[#36200F] p-2 my-2 rounded' placeholder='Email address' />
         
          <div className=" flex flex-row py-3 rounded">
            <button className="bg-[#36200F] text-white px-4 py-2 rounded-md w-full" type="submit">Send</button>
          </div>
          </div>
          

      <div className="w-full col-span-3 mt-6">
        <hr className="border-gray-700 mb-6" />
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} Inspire Her Afrika. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

