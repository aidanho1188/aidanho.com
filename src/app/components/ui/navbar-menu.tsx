'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({setActive, active, item, children}: {setActive: (item: string) => void; active: string | null; item: string; children?: React.ReactNode}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className='relative'>
      <motion.p transition={{duration: 0.3}} className='cursor-pointer text-ui-text hover:opacity-[0.9]'>
        {item}
      </motion.p>
      {active !== null && (
        <motion.div initial={{opacity: 0, scale: 0.85, y: 10}} animate={{opacity: 1, scale: 1, y: 0}} transition={transition}>
          {active === item && (
            <div className='absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4'>
              <motion.div
                transition={transition}
                layoutId='active' // layoutId ensures smooth animation
                className='bg-ui-background-wo backdrop-blur-sm rounded-2xl overflow-hidden border border-ui-background-wo shadow-xl'
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className='w-max h-full p-4'
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({setActive, children}: {setActive: (item: string | null) => void; children: React.ReactNode}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className='relative bg-background-color-wo backdrop-blur-sm border-neutral-200 border-ui-border shadow-input flex justify-end space-x-4 px-8 py-6'
    >
      {children}
    </nav>
  )
}

export const ProductItem = ({title, description, href, src}: {title: string; description: string; href: string; src: string}) => {
  return (
    <Link href={href} className='flex space-x-2'>
      <Image src={src} width={140} height={70} alt={title} className='flex-shrink-0 rounded-md shadow-2xl' />
      <div>
        <h4 className='text-xl font-bold mb-1 text-ui-text'>{title}</h4>
        <p className='ui-neutral text-sm max-w-[10rem]'>{description}</p>
      </div>
    </Link>
  )
}

export const HoveredLink = ({children, ...rest}: any) => {
  return (
    <Link {...rest} className='ui-neutral text-ui-text hover:text-gray-500'>
      {children}
    </Link>
  )
}
