import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router'
import video from '../assets/banner-video.mp4'
import bannerleft from '../assets/banner-left.avif'
import bannerRight from '../assets/banner-right.png'

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
        <p className='text-[#999999] md:w-3/5 md:text-xl mb-8 md:mb-0 leading-relaxed'>
        AlphaTech is your all-in-one platform to learn web development, from the basics of HTML to advanced full-stack projects. Start coding today and build real-world applications! 
        </p>
        <div className='flex sm:flex-row flex-wrap gap-8 shrink-0'>
            <Link to='/startbuilding' className='bg-[#4353FF] hover:bg-blue-700 text-white px-8 py-4 rounded text-lg font-medium transition-colors duration-200'>
            Start building
            </Link>
            <Link to='/startbuilding' className=' text-white group flex items-center hover:text-white/40 px-8 py-4 rounded text-lg font-medium transition-colors duration-200'>
           Contact sales <HiArrowRight className='ml-3 w-5 h-5 group-hover:translate-1 transition-transform duration-200'/>
            </Link>
        </div>
       </div>
       <div className='w-full h-full mt-16 relative'>
        <video src={video} autoPlay muted loop className='w-full h-full object-cover'/>
        <div className='absolute top-1/2 xl:-left-20 md:-left-0 z-20 xl:block hidden'>
          <img src={bannerleft} alt="Left banner" className='lg:h-32 md:h-24 h-20 w-full object-cover' />
        </div>
        <div className='absolute bottom-1/5 -xl:-right-20 md:-right-0 z-20 xl:block hidden'>
          <img src={bannerRight} alt="Right banner" className='lg:h-44 md:h-32 h-28 w-full object-cover' />
        </div>
       </div>

       <div className='absolute bottom-0 left-0 right-0 h-1/2 z-10 bg-gradient-to-t from-black to-transparent hidden md:block '>

       </div>
       </div>
    </div>
  )
}

export default Hero