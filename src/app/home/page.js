'use client'
import React, {useEffect} from 'react'
import Meteors from '../components/ui/Meteors'
import Stars from '../components/ui/Stars'
import Trees from '../components/ui/Trees.js'

import './style.css'

export default function Home() {
  const [isAnimationOn, setAnimationOn] = React.useState(true)

  return (
    <main className='flex min-h-screen flex-col items-center justify-start w-full p-24'>
      <Meteors number={10} isAnimationOn={isAnimationOn} />
      <Stars number={500} isAnimationOn={isAnimationOn} />
      <Trees />

      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col'>
        <button className='shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200' onClick={() => setAnimationOn(!isAnimationOn)}>
          {isAnimationOn ? 'Turn off animation' : 'Turn on animation'}
        </button>
        <h1 className='text-4xl font-bold text-center'>Code with Art</h1>
        <p className='text-center'>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </main>
  )
}
