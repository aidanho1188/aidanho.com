import React from 'react'
import NavMenu from '../components/Nav'
import Background from '../components/Background'

export default function Home() {
  return (
    <main>
      <Background>
        <p className='text-4xl sm:text-7xl font-bold relative z-20 text-ui-text py-8'>Welcome</p>
      </Background>
      <NavMenu />
    </main>
  )
}
