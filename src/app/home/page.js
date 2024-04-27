'use client'
import React, {useEffect} from 'react'
import Meteors from '../components/ui/Meteors'
import Stars from '../components/ui/Stars'

import './style.css'

export default function Home() {
  // useEffect(() => {
  //   bg()
  // }, [])

  return (
    <main className='flex min-h-screen flex-col items-center justify-between w-full p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <h1 className='text-4xl font-bold text-center'>Code with Art</h1>
        <p className='text-center'>
          This is a simple example of a meteor shower effect using Tailwind CSS and React. The meteors are created using the <code>radial-gradient</code> property of Tailwind CSS. The stars are created using the <code>conic-gradient</code> property of Tailwind CSS. The meteors are animated using the <code>@keyframes</code> property of Tailwind CSS.
        </p>
      </div>

      {/* <canvas id='canvas'></canvas> */}
      <Meteors number={5} />
      <Stars number={500} />
    </main>
  )
}
