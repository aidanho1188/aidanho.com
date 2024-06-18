'use client'
import React, {useEffect} from 'react'
import Footer from '../components/Footer'
import Meteors from '../components/ui/Meteors'
import Stars from '../components/ui/Stars'
import Trees from '../components/ui/Trees'
import NavMenu from '../components/Nav'
import Image from 'next/image'

import './style.css'

export default function Arts() {
  const currentYear = new Date().getFullYear()
  const [isAnimationOn, setAnimationOn] = React.useState(true)

  return (
    <main className='h-full w-full bg-art-background flex min-h-screen flex-col items-center justify-start'>
      <Meteors number={10} isAnimationOn={isAnimationOn} />
      <Stars number={400} isAnimationOn={false} />
      <Stars number={100} isAnimationOn={isAnimationOn} />
      <Trees />

      <NavMenu setAnimationOn={setAnimationOn} isAnimationOn={isAnimationOn} />
      <div className='relative top-0 left-0 w-[100%] h-[90vh] z-0' />

      <div className='bg-background-color-wo rounded w-auto antialiased px-12 pt-4 relative m-6'>
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className='mb-10 px-2 w-full text-ui-text'>
            <h2 className='bg-background-color-wo rounded-full text-sm w-fit px-4 py-1 mb-4'>{item.badge}</h2>

            <div className={'text-xl mb-4'}>{item.title}</div>

            <div className='text-sm prose prose-sm '>
              {item?.image && <Image src={item.image} alt='blog thumbnail' height='1000' width='1000' className='rounded-lg mb-10 object-cover' />}
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  )
}

const dummyContent = [
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: (
      <>
        <div>This is my first digital art that I did. I created it through code.org using their &quotTurtle Graphics&quot. It was a final project for our computer science class in high school.</div>
      </>
    ),
    badge: 'Painting',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: (
      <>
        <div>Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.</div>
        {/* <div>In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui proident reprehenderit. Laborum exercitation aliqua reprehenderit ea sint cillum ut mollit.</div> */}
      </>
    ),
    badge: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: (
      <>
        <div>Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.</div>
      </>
    ),
    badge: 'Music Video',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]
