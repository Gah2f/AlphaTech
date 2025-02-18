import React, { useState } from 'react'
import { Link } from 'react-router'
import { MdClose, MdKeyboardArrowDown, MdMenu } from 'react-icons/md';
import { IoGitMerge } from 'react-icons/io5';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen]= useState(false);
  const [activeDropdown, setActiveDropdown]= useState(null);
  const toggleMenu =() =>{
    setIsMenuOpen(!isMenuOpen);
  }
  const toggleDropdown =(menu)=>{
    setActiveDropdown(activeDropdown === menu ? null : menu);
  }
    const menuItems = {
        platform: {
          title: 'Platform',
          sections: [
            {
              title: 'BUILD',
              items: [
                { name: 'Design', desc: 'Build high-performing sites' },
                { name: 'Edit mode', desc: 'Empower your content team' },
                { name: 'Interactions', desc: 'Craft immersive experiences' },
                { name: 'Page building', desc: 'Launch simple landing pages quickly', isNew: true },
              ]
            },
            {
              title: 'MANAGE',
              items: [
                { name: 'CMS', desc: 'Manage content at scale' },
                { name: 'Hosting', desc: 'Host and scale your site without the hassle' },
                { name: 'Localization', desc: 'Customize your site for a worldwide audience' },
                { name: 'Security', desc: 'Ensure your site stays safe' },
              ]
            },
            {
              title: 'OPTIMIZE',
              items: [
                { name: 'Analyze', desc: 'Understand how your site performs', isNew: true },
                { name: 'Optimize', desc: 'Maximize conversions with testing', isNew: true },
                { name: 'SEO', desc: 'Grow your reach with fine-tuned controls' },
              ]
            },
          ]
        },
        solutions: {
          title: 'Solutions',
          items: [
            { name: 'For Enterprise', desc: 'Scale your business' },
            { name: 'For Startups', desc: 'Move faster with CodeTutor' },
            { name: 'For Agencies', desc: 'Win more clients' },
            { name: 'For Marketing', desc: 'Drive more growth' },
          ]
        },
        resources: {
          title: 'Resources',
          items: [
            { name: 'Showcase', desc: 'Get inspired by the community' },
            { name: 'Blog', desc: 'Read latest news and articles' },
            { name: 'Documentation', desc: 'Learn from our resources' },
            { name: 'Community', desc: 'Join the conversation' },
          ]
        }
      };
  return (
    <nav className='bg-black text-white sticky top-0 left-0 right-0 z-10 boder-b border-white/10'>
        <div className='container mx-auto px-4 py-2 sm:px-4 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
                <div>
                    <Link to="/"><span className='text-xl text-blue-800 font-bold'>Aleph</span>Tech</Link>
                </div>
                <div className='hidden lg:flex items-center space-x-4'>
                   {
                      Object.keys(menuItems).map((key)=>(
                        <div key={menuItems[key].title} className='relative'>
                            <button onClick={() => toggleDropdown(key)} className='hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center'>
                                {menuItems [key].title}
                                <MdKeyboardArrowDown className={`ml-2 h-5 w-5 transition-transform ${
    activeDropdown === key ? 'transform rotate-180' : ''
  }`}
/>
                            </button>
                            {
                              activeDropdown === key && (
                                <div className='absolute left-0 mt-2 w-screen max-w-md bg-white rounded-md shadow-lg py-1 text-black'>
                                  <div className='grid md:grid-cols-2 grid-cols-1 g-12 p-4 '>
                                    {
                                      key === 'platform' ? 
                                      (
                                        menuItems[key].sections.map((section, idx)=>(
                                          <div key={idx}>
                                            <h3 className='text-xs font-semibold text-gray-500 tracking-wider mb-2'>{section.title}</h3>
                                            <div>
                                              {
                                                section.items.map((item, itemidx)=> (
                                                  <Link key={itemidx} to={`/${key}/${item.name.toLowerCase()}`} className='group flex items-center p-2 rounded-lg hover:bg-gray-50'>
                                                  <div className='px-4'>
                                                    <p className='text-sm font-medium text-gray-900 flex items-center'>{item.name} {item.isNew && <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-900 '>New</span>} </p>
                                                    <p className='text-sm text-gray-500 '>{item.desc}</p>
                                                  </div>
                                                  </Link>
                                                ))
                                              }
                                            </div>
                                          </div>
                                        ))
                                      ) 
                                      : 
                                      (<div className='space-2 '> 
                                      { menuItems[key].items.map((item, idx)=>(
                                         <Link key={idx} to={`/${key}/${item.name.toLowerCase()}`} className='group flex items-center p-2 rounded-lg hover:bg-gray-50' >
                                         <div className='px-4'>
                                          <p className='text-sm font-medium text-gray-900'>{item.name}</p>
                                          <p className='text-sm text-gray-500 '>{item.desc}</p>
                                         </div>
                                         </Link>
                                        )) }
                                      </div>)
                                    }
                                  </div>
                                </div>
                              )
                            }
                        </div>
                      )
                )
                    }
                  <Link to="/enterprise" className='hover:text-gray-300'>Enterprise</Link>
                  <Link to="/pricing" className='hover:text-gray-300'>Pricing</Link>
                </div>
                <div className='hidden md:flex items-center space-x-4'>
                  <Link to='/login' className='hover:text-gray-300 hidden xl:block'>
                  Log in
                  </Link>             
                  <Link to='/contact' className='hover:text-gray-300 hidden xl:block'>
                  Contact sales
                  </Link>             
                  <Link to='/getstarted' className='hover:text-gray-300 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700'>
                  Get started - it's free
                  </Link>             
                </div>
                <div className='md:hidden '>
                  <button onClick={toggleMenu} className='inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 hover:bg-gray-700'>
                    {
                      !isMenuOpen ? (<MdMenu className='block w-6 h-6'/>) :(<MdClose/>)
                    }
                  </button>
                </div>
            </div>
        </div>

        {
          isMenuOpen && (
            <div className='md:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {
                  Object.keys(menuItems).map((key)=>(
                    <div className='space-y-2'>
                       <button onClick={() => toggleDropdown(key)} className='hover:text-gray-300 px-3 py-2 rounded-md flex items-center'>
                                {menuItems [key].title}
                                <MdKeyboardArrowDown className={`ml-2 h-5 w-5 transition-transform ${
    activeDropdown === key ? 'transform rotate-180' : ''
  }`}
/>
                            </button>
                            {
                              activeDropdown === key && (
                                <div className='bg-white text-black'>
                                  <div className='pl-4'>
                                    {
                                      key === 'platform' ? 
                                      (
                                        menuItems[key].sections.map((section, idx)=>(
                                          <div key={idx} className='py-2 '>
                                            <h3 className='text-xs font-semibold text-gray-500 tracking-wider mb-2'>{section.title}</h3>
                                            <div>
                                              {
                                                section.items.map((item, itemidx)=> (
                                                  <Link key={itemidx} to={`/${key}/${item.name.toLowerCase()}`} className='group flex items-center p-2 rounded-lg hover:bg-gray-50'>
                                                  <div className='px-4'>
                                                    <p className='text-sm font-medium text-gray-900 flex items-center'>{item.name} {item.isNew && <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-900 '>New</span>} </p>
                                             
                                                  </div>
                                                  </Link>
                                                ))
                                              }
                                            </div>
                                          </div>
                                        ))
                                      ) 
                                      : 
                                      (<div className='space-2 '> 
                                      { menuItems[key].items.map((item, idx)=>(
                                         <Link key={idx} to={`/${key}/${item.name.toLowerCase()}`} className='group flex items-center p-2 rounded-lg hover:bg-gray-50' >
                                         <div className='px-4'>
                                          <p className='text-sm font-medium text-gray-900'>{item.name}</p>
                                          <p className='text-sm text-gray-500 '>{item.desc}</p>
                                         </div>
                                         </Link>
                                        )) }
                                      </div>)
                                    }
                                  </div>
                                </div>
                              )
                            }
                    </div>        
                  ))
                }
                <Link to='/enterprises' className='block px-3 py-2 hover:bg-gray-700'>
                Enterprises
                </Link>
                <Link to='/pricing' className='block px-3 py-2 hover:bg-gray-700'>
                Pricing
                </Link>
                <Link to='/login' className='block px-3 py-2 hover:bg-gray-700'>
                Login
                </Link>
                <Link to='/contactsales' className='block px-3 py-2 hover:bg-gray-700'>
                Contact sales
                </Link>
                <Link to='/getstarted' className='block px-3 py-2 bg-blue-600 hover:bg-blue-700 '>
                Get Started- it's free
                </Link>
                
              </div>
            </div>
          )
        }
    </nav>
    
  )
}

export default Navbar