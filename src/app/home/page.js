import React from 'react'
import NavMenu from '../components/Nav'
import Background from '../components/Background'

export default function Home() {
  const currentYear = new Date().getFullYear()
  return (
    <main>
      <NavMenu />
      <Background>
        <p className='text-4xl sm:text-7xl font-bold relative z-20 text-ui-text py-8'>Welcome</p>
      </Background>
      <footer> Built with Next.js and Vercel. © {new Date().getFullYear()} Aidan Ho. All rights reserved.</footer>
    </main>
  )
}
