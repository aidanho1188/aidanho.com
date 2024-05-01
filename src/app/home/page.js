'use client'
import React, {useEffect} from 'react'
import Meteors from '../components/ui/Meteors'
import Stars from '../components/ui/Stars'
import Trees from '../components/ui/Trees.js'
import NavMenu from '../components/Nav'
import Image from 'next/image'

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
      <div className='banner' style={{position: 'relative', top: 0, left: 0, width: '100%', height: '90vh', zIndex: 1000}}></div>

      <div className='bg-ui-background rounded w-full mx-auto antialiased px-4 pt-4 relative'>
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className='mb-10 px-2 w-full text-ui-text'>
            <h2 className='bg-ui-background  rounded-full text-sm w-fit px-4 py-1 mb-4'>{item.badge}</h2>

            <p className={'text-xl mb-4'}>{item.title}</p>

            <div className='text-sm prose prose-sm '>
              {item?.image && <Image src={item.image} alt='blog thumbnail' height='1000' width='1000' className='rounded-lg mb-10 object-cover' />}
              {item.description}
            </div>
          </div>
        ))}
      </div>
      {/* <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col'>
        <h1 className='text-4xl font-bold text-center'>Welcome!</h1>
        <p className='text-center'>This page is about me!</p>
      </div> */}
    </main>
  )
}

const dummyContent = [
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa officia
          sint labore. Tempor consectetur excepteur ut fugiat veniam commodo et labore dolore commodo pariatur.
        </p>
        <p>Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad veniam in commodo id reprehenderit adipisicing. Proident duis exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.</p>
        <p>Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod reprehenderit deserunt amet laborum consequat adipisicing officia qui irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud. Amet culpa officia aliquip deserunt veniam deserunt officia adipisicing aliquip proident officia sunt.</p>
      </>
    ),
    badge: 'React',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: (
      <>
        <p>Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.</p>
        <p>In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui proident reprehenderit. Laborum exercitation aliqua reprehenderit ea sint cillum ut mollit.</p>
      </>
    ),
    badge: 'Changelog',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: (
      <>
        <p>Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.</p>
      </>
    ),
    badge: 'Launch Week',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]
