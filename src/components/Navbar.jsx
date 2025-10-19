/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/Favicon/favicon.png'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true) // Start as true to show on Intro
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false) // Track if navbar should be sticky

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after clicking
  }

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.getElementById('intro')
      if (introSection) {
        const introHeight = introSection.offsetHeight
        
        if (window.scrollY > introHeight - 100) {
          // Past intro section, show sticky navbar
          setShowNavbar(true)
          setIsSticky(true)
        } else if (window.scrollY < 50) {
          // At the very top, show navbar in intro
          setShowNavbar(true)
          setIsSticky(false)
        } else {
          // Scrolling within intro, hide navbar
          setShowNavbar(false)
          setIsSticky(false)
          setIsMobileMenuOpen(false)
        }
      }
    }

    // Show navbar on initial load
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            initial={{ y: isSticky ? -100 : 0, opacity: isSticky ? 0 : 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`${isSticky ? 'fixed top-2 left-2 right-2 md:left-6 md:right-6' : 'relative'} flex justify-between items-center rounded-2xl bg-black/70 backdrop-blur-md text-white z-50 shadow-lg`}
          >
            {/* logo and text */}
            <button onClick={() => scrollToSection('intro')} className='flex p-2 m-2 rounded hover:opacity-80 transition-opacity'>
              <img className='h-5' src={logo} alt="MotionStore Logo"></img>
              <span className='font-semibold ml-2'>MotionStore</span>
            </button>

            {/* Desktop navigation items */}
            <div className='flex-wrap hidden lg:flex'>
              <ul className='flex gap-10 p-2 m-2 font-light'>
                <li>
                  <button 
                    onClick={() => scrollToSection('intro')}
                    className='hover:text-orange-500 cursor-pointer transition-colors'
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('work')}
                    className='hover:text-orange-500 cursor-pointer transition-colors'
                  >
                    Work
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className='hover:text-orange-500 cursor-pointer transition-colors'
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className='hover:text-orange-500 cursor-pointer transition-colors'
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className='hover:text-orange-500 cursor-pointer transition-colors'
                  >
                    Testimonials
                  </button>
                </li>
              </ul>
            </div>

            {/* Desktop Get Started Button */}
            <div className='hidden lg:flex items-center'>
              <button 
                onClick={() => scrollToSection('footer')}
                className='bg-orange-500 hover:bg-white hover:text-black text-white font-semibold py-2 px-4 m-2 rounded transition-colors'
              >
                Get Started
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='lg:hidden p-2 m-2 text-2xl hover:text-orange-500 transition-colors'
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {showNavbar && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className={`${isSticky ? 'fixed top-20' : 'absolute top-16'} right-2 left-2 md:left-auto md:w-80 bg-black/95 backdrop-blur-md rounded-2xl p-6 z-40 shadow-2xl`}
          >
            <nav className='flex flex-col gap-4'>
              <button
                onClick={() => scrollToSection('intro')}
                className='text-white hover:text-orange-500 text-left py-3 px-4 rounded-lg hover:bg-white/10 transition-all'
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className='text-white hover:text-orange-500 text-left py-3 px-4 rounded-lg hover:bg-white/10 transition-all'
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className='text-white hover:text-orange-500 text-left py-3 px-4 rounded-lg hover:bg-white/10 transition-all'
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className='text-white hover:text-orange-500 text-left py-3 px-4 rounded-lg hover:bg-white/10 transition-all'
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className='text-white hover:text-orange-500 text-left py-3 px-4 rounded-lg hover:bg-white/10 transition-all'
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('footer')}
                className='bg-orange-500 hover:bg-white hover:text-black text-white font-semibold py-3 px-4 rounded-lg transition-colors mt-2'
              >
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
