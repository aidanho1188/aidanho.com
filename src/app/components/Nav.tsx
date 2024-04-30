'use client'
import React, {useState, useEffect} from 'react'
import {HoveredLink, Menu, MenuItem, ProductItem} from './ui/navbar-menu'
import {cn} from '../util/cn'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagic, faMagicWandSparkles, faMoon, faSun} from '@fortawesome/free-solid-svg-icons'

export default function NavMenu({setAnimationOn, isAnimationOn}: {setAnimationOn: (value: boolean) => void; isAnimationOn: boolean}) {
  return (
    <div className='relative w-full flex items-center justify-center'>
      <Navbar setAnimationOn={setAnimationOn} isAnimationOn={isAnimationOn} />
    </div>
  )
}

function Navbar({className, setAnimationOn, isAnimationOn}: {className?: string; setAnimationOn: (value: boolean) => void; isAnimationOn: boolean}) {
  const [active, setActive] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
      document.body.classList.remove('light-mode')
    } else {
      document.body.classList.add('light-mode')
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])
  return (
    <div className={cn('fixed top-0 inset-x-0 w-full mx-auto z-50', className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item='Home'>
          <div className='flex flex-col space-y-4 text-sm '>
            <HoveredLink href='/web-dev'>Web Development</HoveredLink>
            <HoveredLink href='/interface-design'>Interface Design</HoveredLink>
            <HoveredLink href='/seo'>Search Engine Optimization</HoveredLink>
            <HoveredLink href='/branding'>Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='About'>
          {/* <div className='  text-sm grid grid-cols-2 gap-10 p-4'>
            <ProductItem title='Algochurn' href='https://algochurn.com' src='https://assets.aceternity.com/demos/algochurn.webp' description='Prepare for tech interviews like never before.' />
            <ProductItem title='Tailwind Master Kit' href='https://tailwindmasterkit.com' src='https://assets.aceternity.com/demos/tailwindmasterkit.webp' description='Production ready Tailwind css components for your next project' />
            <ProductItem title='Moonbeam' href='https://gomoonbeam.com' src='https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png' description='Never write from scratch again. Go from idea to blog in minutes.' />
            <ProductItem title='Rogue' href='https://userogue.com' src='https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png' description='Respond to government RFPs, RFIs and RFQs 10x faster using AI' />
          </div> */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='Contact Me'>
          <div className='flex flex-col space-y-4 text-sm'>
            <HoveredLink href='/hobby'>Hobby</HoveredLink>
            <HoveredLink href='/individual'>Individual</HoveredLink>
            <HoveredLink href='/team'>Team</HoveredLink>
            <HoveredLink href='/enterprise'>Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <button className='px-1 rounded-full bg-transparent hover:bg-[#616467] hover:text-white text-neutral-200 transition duration-200 text-ui-text' onClick={() => setAnimationOn(!isAnimationOn)}>
          <FontAwesomeIcon icon={isAnimationOn ? faMagic : faMagicWandSparkles} size='xs' />
        </button>
        <button className='px-1 rounded-full bg-transparent hover:bg-[#616467] hover:text-white transition duration-200 text-ui-text' onClick={() => setDarkMode(!darkMode)}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size='xs' />
        </button>
      </Menu>
    </div>
  )
}
