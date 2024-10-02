'use client'

import React, {useState, useEffect} from 'react'
import {HoveredLink, Menu, MenuItem} from './ui/navbar-menu'
import {cn} from '../utils/cn'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFile, faFileAlt, faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import './styles/nav.css'

export default function NavMenu() {
  return (
    <div className='relative w-full flex items-center justify-center'>
      <div className='block md:hidden'>
        <MobileNavbar />
      </div>
      <div className='hidden md:block'>
        <Navbar />
      </div>
    </div>
  )
}

function MobileNavbar({className}: {className?: string}) {
  const [navOpen, setNavOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  const handleToggle = () => {
    setNavOpen(!navOpen)
  }

  const handleLinkClick = () => {
    setNavOpen(false)
  }

  return (
    <div className={cn('flex flex-col top-0 inset-x-0 w-full mx-auto z-50 border-b border-neutral-500/[0.2]', className)}>
      <div className='menu-container'>
        <Menu setActive={setActive}>
          <Link href='/home' className='fixed top-8 left-10 cursor-pointer text-ui-text'>
            <i className='fas fa-home font-bold font-i text-xl' aria-label='Home'>
              AH
            </i>
          </Link>
          <button className={`toggle-button mx-2 rounded-sm bg-transparent transition duration-200 text-gray-400 cursor-pointer ${navOpen ? 'active' : ''}`} id='toggleButton' aria-label='Toggle Menu' onClick={handleToggle}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </button>
        </Menu>
      </div>
      <div className={`fixed bottom-0 right-0 z-50 h-full w-full flex flex-col items-center space-y-12 bg-background-color text-ui-text ${!navOpen ? 'slide-in' : 'slide-out'}`}>
        <nav className='mobile-bar'>
          <Link href='/home' className='mobile-bar-link' onClick={handleLinkClick}>
            Home
          </Link>
          <Link href='/about' className='mobile-bar-link' onClick={handleLinkClick}>
            About
          </Link>
          <Link href='/arts' className='mobile-bar-link' onClick={handleLinkClick}>
            Arts
          </Link>
          <Link href='/projects' className='mobile-bar-link' onClick={handleLinkClick}>
            Projects
          </Link>
          <Link href='/contact' className='mobile-bar-link' onClick={handleLinkClick}>
            Contact
          </Link>
          <Link target='_blank' href='https://drive.google.com/file/d/1cremZQd1HmPCqq3XucJLl0qw60AriqXa/view?usp=sharing' className='mobile-bar-link' onClick={handleLinkClick}>
            Resume
          </Link>
        </nav>
      </div>
    </div>
  )
}

function Navbar({className}: {className?: string}) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className={cn('fixed top-0 inset-x-0 w-full mx-auto z-50 border-b border-neutral-500/[0.2]', className)}>
      <Menu setActive={setActive}>
        <Link href='/home' className='fixed left-10  cursor-pointer text-ui-text'>
          <i className='fas fa-home font-bold font-i text-xl' aria-label='Home'>
            AH
          </i>
        </Link>
        <Link href='/home' className='cursor-pointer text-ui-text hover:opacity-[0.9]'>
          <span aria-label='Home'>Home</span>
        </Link>
        <Link href='/about' className='cursor-pointer text-ui-text hover:opacity-[0.9]'>
          <span aria-label='About'>About</span>
        </Link>
        <Link href='/arts' className='cursor-pointer text-ui-text hover:opacity-[0.9]'>
          <span aria-label='Arts'>Arts</span>
        </Link>
        <Link href='/projects' className='cursor-pointer text-ui-text hover:opacity-[0.9]'>
          <span aria-label='Projects'>Projects</span>
        </Link>
        <Link href='/contact' className='cursor-pointer text-ui-text hover:opacity-[0.9]'>
          <span aria-label='Contact'>Contact</span>
        </Link>
        <Link target='_blank' href='https://drive.google.com/file/d/1cremZQd1HmPCqq3XucJLl0qw60AriqXa/view?usp=sharing' className='cursor-pointer text-ui-text hover:opacity-[0.9]'>
          <span aria-label='Resume'>
            <FontAwesomeIcon icon={faFileAlt} size='xs' />
          </span>
        </Link>
      </Menu>
    </div>
  )
}
