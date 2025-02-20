import React, { useEffect, useRef, useState } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router'
function About() {
  const aboutFeatures = [
    {
      id: "ai-1",
      title: "Craft Stunning Designs in Moments",
      description:
        "Whether you're trying to build even faster or you're just new to AlephTech, you can use AI Assistant to generate new page sections using your site's existing design system.",
      link: "https://help.webflow.com/hc/en-us/articles/34205154436243",
      linkText: "Explore documentation",
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/design-assistant-ai.mp4",
      poster:
        "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/6705703132e8c6c85119c96d_design-assistant.avif",
    },
    {
      id: "ai-2",
      title: "Speed Up Your Content Creation",
      description:
        "Quickly and easily create new content, natively within AlephTech. From generating first-pass content to publishing at speed, the AI Assistant can help you develop variations with just a few clicks.",
      link: "https://help.webflow.com/hc/articles/34295931022099",
      linkText: "Explore documentation",
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/writing-assistant-square.mp4",
      poster:
        "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67057031236cd506cd0ae632_writing-assistant.avif",
    },
    {
      id: "ai-3",
      title: "Design Like a Pro, Fast",
      description:
        "Quickly and easily create new content, natively within AlephTech. From generating first-pass content to publishing at speed, the AI Assistant can help you develop variations with just a few clicks.",
      link: "https://help.webflow.com/hc/articles/34295931022099",
      linkText: "Explore documentation",
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/writing-assistant-square.mp4",
      poster:
        "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67057031236cd506cd0ae632_writing-assistant.avif",
    },
  ];

  const [activeFeature, setActiveFeature] =useState(0);
  const featureRef = useRef(null);
  const observerRef = useRef (null);

  useEffect(()=>{
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    observerRef.current = new IntersectionObserver((entries)=> {
      entries.forEach((entry)=>{
        if(entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const index = aboutFeatures.findIndex((feature)=>feature.id === id);

          if(index !== -1 ){
            setActiveFeature (index);
            const video = document.querySelector(`video[data-feature="${id}"]`);

            if(video) video.play();
          }
        }
      })
    }, options)

    const featureElement = document.querySelectorAll(".feature-item");
    featureElement.forEach((feature)=> observerRef.current.observe(feature))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    }
  },[])

  return (
    <div className='bg-black text-white py-24'>
        <div className='primary-container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-8'>
                <div className='md:mb-24'>
                    <h2 className='text-5xl md:text-7xl font-bold mb-8 max-w-[50rem]'>Aleph <span className='text-blue-600'>First</span> </h2>
                </div>
                <div className='mb-24'>
                  <p className='text-xl text-gray-300 mb-8 max-w-[35rem]'>
                    At AlphaTech, we are passionate about teaching web development in a simple and structured way. Our goal is to equip learners with the skills and confidence to build modern, responsive websites and applications. Whether you're a beginner or looking to level up, we provide the guidance and resources you need to succeed in the ever-evolving tech industry.
                  </p>
                  <Link className='inline-flex items-center text-white hover:text-gray-300 text-lg font-medium transition-colors'>
                   Discover AI at AlephTech <HiArrowRight className='ml-2 w-5 h-5'/>
                  </Link>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-32 gap-8'>
              <div>
                <div className='sticky top-24 '>
                  <div className='aspect-square rounded-lg overflow-hidden border border-white/20'>
                    <video src={aboutFeatures[activeFeature].video} key={aboutFeatures[activeFeature].id} poster={aboutFeatures[activeFeature].poster}
                     className='w-full h-full object-cover' muted playsInline loop autoPlay></video> 
                  </div>
                </div>
              </div>
            <div>
             <div className='md:mb-28 mb-16 md:h-72 border-white/10 pb-16'>  
                <div className='max-w-[35ch] mb-4'>
                  <h3 className='text-2xl font-semibold'>Generate styled content quickly</h3>
                </div>
            
                  <p className='text-xl text-gray-300 mb-8 max-w-[35rem]'>Leverage the power of AI to instantly create beautifully styled web content. Our intelligent system understands your needs and generates high-quality, responsive designs in seconds. </p>
                  <Link className='inline-flex items-center text-white hover:text-gray-300 text-lg font-medium transition-colors'>
                   Discover AI at AlephTech <HiArrowRight className='ml-2 w-5 h-5'/>
                  </Link>
              </div>
                
                <div ref={featureRef} className='space-y-24'>
                  {
                    aboutFeatures.map((feature, index)=>(
                      <div key={feature.id} id={feature.id} className='feature-item scroll-mt-24 md:h-72 border-b border-white/10 pb-16'>
                         <div className='max-w-[35ch] mb-4'>
                         <h3 className='text-2xl font-semibold'>{feature.title}</h3>
                         </div>
            
                        <p className='text-xl text-gray-300 mb-8 max-w-[35rem]'> {feature.description} </p>
                        <Link className='inline-flex items-center text-white hover:text-gray-300 text-lg font-medium transition-colors'>
                         {feature.linkText} <HiArrowRight className='ml-2 w-5 h-5'/>
                         </Link>
                      </div>
                    ))
                  }

                </div>
            </div>
             
            </div>
        </div>
    </div>
  )
}

export default About