import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router'
function Footer() {
    const footerLinks = {
        product: {
          title: 'Product',
          links: [
            { name: 'Features', href: '/features' },
            { name: 'Design', href: '/design' },
            { name: 'Interactions', href: '/interactions' },
            { name: 'Page Building', href: '/page-building' },
            { name: 'AI Assistant', href: '/ai' }
          ]
        },
        company: {
          title: 'Company',
          links: [
            { name: 'About Us', href: '/about' },
            { name: 'Careers', href: '/careers' },
            { name: 'Press', href: '/press' },
            { name: 'Blog', href: '/blog' },
            { name: 'Contact', href: '/contact' }
          ]
        },
        resources: {
          title: 'Resources',
          links: [
            { name: 'Documentation', href: '/docs' },
            { name: 'Tutorials', href: '/tutorials' },
            { name: 'Community', href: '/community' },
            { name: 'Support', href: '/support' },
            { name: 'API', href: '/api' }
          ]
        }
      };
    
    const socialLinks = [
        { icon: <FaFacebook />, href: 'https://facebook.com' },
        { icon: <FaTwitter />, href: 'https://twitter.com' },
        { icon: <FaInstagram />, href: 'https://instagram.com' },
        { icon: <FaLinkedin />, href: 'https://linkedin.com' },
        { icon: <FaYoutube />, href: 'https://youtube.com' }
      ];
  return (
    <footer className='bg-black text-white pt-20 pb-10'>
        <div className='primary-container'>
            <div className='flex flex-col md:flex-row justify-between md:gap-25 gap-16 mb-16'>
                <div className='md:w-1/3'>
                    <Link to='/' className='mb-4 inline-block'>
                    <span className='text-blue-800 text-xl font-bold'>Aleph</span>Tech
                    </Link>
                    <p className='text-gray-400 md:w-2/3'>
                      Designed with simplicity and efficiency in mind, our platform helps you create stunning websites and applications with ease. 
                    </p>
                </div>

                <div className='md:w-2/3'>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 items-center'>
                    {
                        Object.values(footerLinks).map((section)=>(
                            <div key={section.title}>
                                <h3 className='text-lg font-semibold mb-4'>{section.title}</h3>
                                <ul className='space-y-2 '>
                                    {section.links.map((link)=> (
                                        <li key={link.name}>
                                            <Link to='/' className='text-gray-400 hover:text-white transition-colors'>
                                            {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>

            <div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center'>
            <div className='flex space-x-6 mb-4 md:mb-0'>
                {
                    Object.values(socialLinks).map((links)=>(
                        <Link key={links.icon} className='text-gray-400 hover:text-white transition-colors text-xl'>
                            {links.icon}
                        </Link>
                    ))
                }
            </div>

            <div className='text-gray-400 text-sm'>
                &copy; {new Date().getFullYear()} AlephTech. All rights reserved.
            </div>
            </div>

        </div>
        
    </footer>
  )
}

export default Footer