import React from 'react'

const Home = () => {
  return (
    <>
    <section className=' mt-40'>
      
       <div className=' bg-[url("/public/img1.jpg")] h-2/3 w-full bg-cover
        bg-center p-4 md:p-72 relative
        '>
        <div className=' flex justify-end'>
          <div>
        <p className='text-white  md:text-xl font-bold ml-20 '>Welcome to Inspire Her Africa</p>
        <h1 className='text-white  md:text-3xl font-bold'>Mentorship Support Growth</h1>
        <div className=' ml-60'>
        <button className='  w-5/5  bg-text-white mt-4 mb-2 font-semibold  p-0 px-8 bg-white  rounded-md h-12 ' >Explore</button>
        </div>
        </div>
        </div>
        </div>
    </section>
    </>
  )
} 

export default Home;