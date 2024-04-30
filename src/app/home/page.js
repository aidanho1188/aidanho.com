'use client'
import React, {useEffect} from 'react'
import Meteors from '../components/ui/Meteors'
import Stars from '../components/ui/Stars'
import Trees from '../components/ui/Trees.js'
import NavMenu from '../components/Nav'

import './style.css'

export default function Home() {
  const [isAnimationOn, setAnimationOn] = React.useState(true)

  return (
    <main className='flex min-h-screen flex-col items-center justify-start w-full p-24'>
      <Meteors number={10} isAnimationOn={isAnimationOn} />
      <Stars number={400} isAnimationOn={false} />
      <Stars number={100} isAnimationOn={isAnimationOn} />
      <Trees />

      <NavMenu setAnimationOn={setAnimationOn} isAnimationOn={isAnimationOn} />
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col'>
        <h1 className='text-4xl font-bold text-center'>Code with Art</h1>
        <p className='text-center'>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </main>
  )
}
