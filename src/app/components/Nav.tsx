'use client'
import React, {useState, useEffect, useRef} from 'react'
import {HoveredLink, Menu, MenuItem, ProductItem} from './ui/navbar-menu'
import {cn} from '../utils/cn'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faNavicon, faMagic, faMagicWandSparkles, faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function NavMenu({setAnimationOn, isAnimationOn}: {setAnimationOn: (value: boolean) => void; isAnimationOn: boolean}) {
  return (
    <div className='relative w-full flex items-center justify-center'>
      <div className='block sm:hidden'>
        <MobileNavbar setAnimationOn={setAnimationOn} isAnimationOn={isAnimationOn} />
      </div>
      <div className='hidden sm:block'>
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
    <div ref={navRef} className={cn('fixed top-0 left-0 w-fit h-full mx-auto z-50 border-b border-neutral-500/[0.2] p-4 m-2', className)}>
      <FontAwesomeIcon icon={faNavicon} size='xl' className='x-2 rounded-sm bg-transparent text-neutral-200 transition duration-200 text-gray-400' onClick={toggleNav} />
      {navOpen && (
        <div className='flex flex-col space-y-4 text-sm bg-ui-background p-4 mt-4 border rounded text-ui-text border-neutral-500/[0.2]'>
          <Link href='/home' className='cursor-pointer text-ui-text hover:opacity-[0.5]'>
            Home
          </Link>
          <Link href='/about' className='cursor-pointer text-ui-text hover:opacity-[0.5]'>
            About
          </Link>
          <Link href='/arts' className='cursor-pointer text-ui-text hover:opacity-[0.5]'>
            Arts
          </Link>
          <Link href='/contact' className='cursor-pointer text-ui-text hover:opacity-[0.5]'>
            Contact
          </Link>
        </div>
      )}
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
        <Link href='/home' className='cursor-pointer text-ui-text hover:opacity-[0.9]'>
          Home
        </Link>
        <Link href='/about' className='cursor-pointer text-ui-text hover:opacity-[0.9]'>
          About
        </Link>
        <Link href='/arts' className='cursor-pointer text-ui-text hover:opacity-[0.9]'>
          Arts
        </Link>
        <MenuItem setActive={setActive} active={active} item='Projects'>
          <div className='flex flex-col space-y-4 text-sm'>
            <HoveredLink href='/hobby'>Hobby</HoveredLink>
            <HoveredLink href='/individual'>Individual</HoveredLink>
            <HoveredLink href='/team'>Team</HoveredLink>
            <HoveredLink href='/enterprise'>Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='Contact'>
          <div className='flex flex-col space-y-4 text-sm'>
            <HoveredLink href='/hobby'>Hobby</HoveredLink>
            <HoveredLink href='/individual'>Individual</HoveredLink>
            <HoveredLink href='/team'>Team</HoveredLink>
            <HoveredLink href='/enterprise'>Enterprise</HoveredLink>
          </div>
        </MenuItem>
        {setAnimationOn && (
          <button className='px-2 rounded-full bg-transparent hover:bg-[#616467] hover:text-white text-neutral-200 transition duration-200 text-ui-text' onClick={() => setAnimationOn(!isAnimationOn)}>
            <FontAwesomeIcon icon={isAnimationOn ? faMagic : faMagicWandSparkles} size='xs' />
          </button>
        )}
        <button className='px-2 rounded-full bg-transparent hover:bg-[#616467] hover:text-white transition duration-200 text-ui-text' onClick={() => setDarkMode(!darkMode)}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size='xs' />
        </button>
      </Menu>
    </div>
  )
}
