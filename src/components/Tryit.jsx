import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router'
function Tryit() {
  return (
    <div className='bg-black text-white py-20'>
        <div className='primary-container '>
            <div className='flex flex-col md:flex-row justify-between gap-16'>
                <div className='md:w-3/5 '>
                    <div>
                        <h2 className='text-4xl md:text-7xl font-bold mb-8'>Try it for <br /> <span className='text-blue-600'>free</span></h2>
                        <p className='text-xl mb-8 md:max-w-lg text-gray-300'>With our free trial, you can explore all the features AlephTech has to offer without any commitments. Whether you’re building a new project or optimizing an existing one, dive in and start generating styled content effortlessly. </p>
                        <Link to='/getstarted' className='hover:text-gray-300 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700'>
                            Get started - it's free
                        </Link> 
                    </div>
                </div>
                <div className='md:w-2/5 space-y-12'>
                    <div className=''>
                        <h3 className='text-lg md:text-xl leading-relaxed font-medium mb-4'>Unlock the full potential of AlephTech with a free trial! Experience the ease of generating stunning web designs and content, powered by AI. </h3>
                    </div>
                    <div className='space-y-2'>
                        <h2 className='font-bold text-xl '>Contact Sales</h2>
                        <p className='text-gray-300'>Have specific needs or want to explore how AlephTech can work for you? Contact our sales team for a personalized demo or consultation.</p>
                        <Link to='/' className='inline-flex items-center text-white hover:text-gray-300  hover:underline transition-colors'>
                          Contact Sales <HiArrowRight className='ml-2 w-5 h-5'/>
                        </Link>
                    </div>
                    <div className='space-y-2'>
                        <h2 className='font-bold text-xl '>Find a Certified Partner Near You</h2>
                        <p className='text-gray-300'>Whether you're looking for a partner to help with a single project or long-term support, we’ll help you find the right expert to meet your needs.</p>
                        <Link to='' className='inline-flex items-center text-white hover:text-gray-300  hover:underline transition-colors'>
                          Find a partner <HiArrowRight className='ml-2 w-5 h-5'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Tryit