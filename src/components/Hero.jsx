import React from 'react'
import { Link } from 'react-router'
function Hero() {
  return (
    <div className='bg-black pt-24 text-white md:pt-32'>
       <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative'>
        <div className='mb-6'>
            <span className='text-[#999999] uppercase tracking-[0.2em] text-sm font-md'> Your Web Dev Journey Starts Here!</span>
        </div>

        <h1 className='text-4xl sm:text-5xl lg:text-8xl font-bold mb-8 md:mb-16 leading-[1.1] tracking-[-0.02em]'>
        Join a Community of Aspiring <span className='text-blue-500'>Web Developers </span> & <br className='md:block hidden'/> Start Coding Today!
        </h1>
       <div className='flex md:flex-row items-center flex-col justify-between gap-8'>
        <p className='text-[#999999] md:text-xl mb-8 md:mb-0 leading-relaxed'>
        AlphaTech is your all-in-one platform to learn web development, from the basics of HTML to advanced full-stack projects. Start coding today and build real-world applications! 
        </p>
        <div className='flex sm:flex-row flex-wrap gap-8 shrink-0'>
            <Link to='/startbuilding' className='bg-[#4353FF] hover:bg-blue-700 text-white px-8 py-4 rounded text-lg font-medium transition-colors duration-200'>
            Start building
            </Link>
        </div>
       </div>
       </div>
    </div>
  )
}

export default Hero