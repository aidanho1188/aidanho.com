'use client'
import React, {useState, useEffect, useRef} from 'react'
import {HoveredLink, Menu, MenuItem} from './ui/navbar-menu'
import {cn} from '../utils/cn'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faNavicon, faMagic, faMagicWandSparkles, faMoon, faSun, faX} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import './styles/nav.css'

export default function NavMenu({setAnimationOn, isAnimationOn}: {setAnimationOn: (value: boolean) => void; isAnimationOn: boolean}) {
  return (
    <div className='relative w-full flex items-center justify-center'>
      <div className='block md:hidden'>
        <MobileNavbar setAnimationOn={setAnimationOn} isAnimationOn={isAnimationOn} />
      </div>
      <div className='hidden md:block'>
        <Navbar setAnimationOn={setAnimationOn} isAnimationOn={isAnimationOn} />
      </div>
    </div>
  )
}

function MobileNavbar({className, setAnimationOn, isAnimationOn}: {className?: string; setAnimationOn: (value: boolean) => void; isAnimationOn: boolean}) {
  const [navOpen, setNavOpen] = useState(false)
  const navRef = useRef(null)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={navRef} className={cn('fixed top-0 right-0 w-fit h-full mx-auto z-50 border-b border-neutral-500/[0.2] p-4 m-2', className)}>
      <FontAwesomeIcon icon={faNavicon} size='xl' className='mx-2 rounded-sm bg-transparent transition duration-200 text-gray-400 cursor-pointer' onClick={toggleNav} />
      {/* Add Tailwind animation */}
      <div className={`fixed top-0 right-0 z-50 h-full w-[100%] flex flex-col space-y-12 bg-ui-background-wo text-ui-text ${navOpen ? 'slide-out' : 'slide-in'}`}>
        <div className='flex justify-end'>
          <FontAwesomeIcon icon={faX} size='xl' className='p-4 mt-2 mr-[1.08rem] rounded-sm bg-transparent text-gray-400 cursor-pointer' onClick={toggleNav} />
        </div>
        <nav className='fixed mt-8 w-full h-full flex flex-col overflow-auto scrollbar-hide'>
          <Link href='/home' className='px-12 py-4 cursor-pointer text-ui-text hover:opacity-[0.5]'>
            Home
          </Link>
          <Link href='/about' className='px-12 py-4 cursor-pointer text-ui-text hover:opacity-[0.5]'>
            About
          </Link>
          <Link href='/arts' className='px-12 py-4 cursor-pointer text-ui-text hover:opacity-[0.5]'>
            Arts
          </Link>
          <Link href='/projects' className='px-12 py-4 cursor-pointer text-ui-text hover:opacity-[0.5]'>
            Projects
          </Link>
          <Link href='/contact' className='px-12 py-4 cursor-pointer text-ui-text hover:opacity-[0.5]'>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  )
}

function Navbar({className, setAnimationOn, isAnimationOn}: {className?: string; setAnimationOn: (value: boolean) => void; isAnimationOn: boolean}) {
  const [active, setActive] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = window.localStorage.getItem('darkMode')
      if (savedMode) {
        return JSON.parse(savedMode)
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true
  })

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
      document.body.classList.remove('light-mode')
      window.localStorage.setItem('darkMode', JSON.stringify(true))
    } else {
      document.body.classList.add('light-mode')
      document.body.classList.remove('dark-mode')
      window.localStorage.setItem('darkMode', JSON.stringify(false))
    }
  }, [darkMode])

  return (
    <div className={cn('fixed top-0 inset-x-0 w-full mx-auto z-50 border-b border-neutral-500/[0.2]', className)}>
      <Menu setActive={setActive}>
        <Link href='/home' className='fixed left-10  cursor-pointer text-ui-text'>
          <i className='fas fa-home font-bold font-i text-xl'>AH</i>
        </Link>
        <Link href='/home' className='cursor-pointer text-ui-text hover:opacity-[0.9]'>
          Home
        </Link>
        <Link href='/about' className='cursor-pointer text-ui-text hover:opacity-[0.9]'>
          About
        </Link>
        <Link href='/arts' className='cursor-pointer text-ui-text hover:opacity-[0.9]'>
          Arts
        </Link>
        <Link href='/projects' className='cursor-pointer text-ui-text hover:opacity-[0.9]'>
          Projects
        </Link>
        {/* <MenuItem setActive={setActive} active={active} item='Projects'>
          <div className='flex flex-col space-y-4 text-sm'>
            <HoveredLink href='/hobby'>Hobby</HoveredLink>
            <HoveredLink href='/individual'>Individual</HoveredLink>
            <HoveredLink href='/team'>Team</HoveredLink>
            <HoveredLink href='/enterprise'>Enterprise</HoveredLink>
          </div>
        </MenuItem> */}
        <Link href='/contact' className='cursor-pointer text-ui-text hover:opacity-[0.9]'>
          Contact
        </Link>
        {/* <MenuItem setActive={setActive} active={active} item='Contact'>
          <div className='flex flex-col space-y-4 text-sm'>
            <HoveredLink href='/hobby'>Hobby</HoveredLink>
            <HoveredLink href='/individual'>Individual</HoveredLink>
            <HoveredLink href='/team'>Team</HoveredLink>
            <HoveredLink href='/enterprise'>Enterprise</HoveredLink>
          </div>
        </MenuItem> */}
        {setAnimationOn && (
          <button className='px-2 rounded-full bg-transparent hover:bg-[#616467] hover:text-white text-neutral-200 transition duration-200 text-ui-text' onClick={() => setAnimationOn(!isAnimationOn)}>
            <FontAwesomeIcon icon={isAnimationOn ? faMagic : faMagicWandSparkles} size='xs' />
            <span className='sr-only'>{isAnimationOn ? 'Disable Animation' : 'Enable Animation'}</span>
          </button>
        )}
        <button className='px-2 rounded-full bg-transparent hover:bg-[#616467] hover:text-white transition duration-200 text-ui-text' onClick={() => setDarkMode(!darkMode)}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size='xs' />
          <span className='sr-only'>{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
        </button>
      </Menu>
    </div>
  )
}
