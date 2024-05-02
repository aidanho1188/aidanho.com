'use client'
import React, {useState, useEffect} from 'react'
import {HoveredLink, Menu, MenuItem, ProductItem} from './ui/navbar-menu'
import {cn} from '../utils/cn'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagic, faMagicWandSparkles, faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function NavMenu({setAnimationOn, isAnimationOn}: {setAnimationOn: (value: boolean) => void; isAnimationOn: boolean}) {
  return (
    <div className='relative w-full flex items-center justify-center'>
      <Navbar setAnimationOn={setAnimationOn} isAnimationOn={isAnimationOn} />
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
    return false
  })

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
      document.body.classList.remove('light-mode')
      window.localStorage.setItem('darkMode', JSON.stringify(darkMode))
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
