'use client'
import React, {useEffect, useState, useRef} from 'react'
import Footer from '../components/Footer'
import Meteors from './components/Meteors'
import Stars from './components/Stars'
import Trees from './components/Trees'
import Background from './components/Background'
import NavMenu from '../components/Nav'
import Image from 'next/image'
import {LinkPreview} from '../components/ui/link-preview'
import ScrollDownIndicator from '../components/ui/ScrollIndicator'

import './style.css'

export default function Arts() {
  const currentYear = new Date().getFullYear()
  const contentsRef = useRef(null)

  return (
    <div className='art-layout'>
      <Meteors number={10} isAnimationOn={true} />
      <Background />

      {/* Empty Banner */}
      {/* Maybe I can add something here? and a cue for scrolling for more content */}
      <div className='relative top-0 left-0 w-[100%] h-[90vh] z-0' />

      {/* Let make it more dynamic and use different cue for mobile and desktop */}
      <ScrollDownIndicator contentsRef={contentsRef} color='white' />

      <div ref={contentsRef} className='art-content bg-background-color-wo rounded w-auto antialiased px-12 pt-4 relative m-6'>
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className='mb-10 px-2 w-full text-ui-text'>
            <h2 className='bg-background-color-wo rounded-full text-sm w-fit px-4 py-1 mb-4'>{item.badge}</h2>

            <div className={'text-xl mb-4'}>{item.title}</div>

            <div className='text-sm prose prose-sm '>
              {item?.image && <Image src={item.image} alt='blog thumbnail' height={item.height || 1000} width={item.width || 1000} className='rounded-lg mb-10 object-cover mx-auto' priority={item.image === '/images/arts/first-digital-art.jpg'} />}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const dummyContent = [
  {
    title: 'First Digital Art',
    description: (
      <>
        <div>This page is based on my first digital art that I did in high school. I created this piece through code.org using their &quot;Turtle Graphics&quot;. </div>
      </>
    ),
    badge: 'Digital Art',
    image: '/images/arts/first-digital-art.jpg',
    height: 260,
    width: 260,
  },
  {
    title: 'Abstract Painting of Kennebunkport',
    description: (
      <>
        <div>
          {' '}
          This painting is based on our favorite fishing spot,{' '}
          <LinkPreview url='https://kennebunkportmainelodging.com/spring-photos-and-images/colony-beach-6/' className='text-ui-text font-bold'>
            Colony Beach
          </LinkPreview>{' '}
          in Kennebunk, Maine. This piece was created using{' '}
          <LinkPreview url='https://www.sketchbook.com/' className='text-ui-text font-bold'>
            Sketchbook
          </LinkPreview>
        </div>
      </>
    ),
    badge: 'Digital Art',
    image: '/images/arts/beach.jpg',
    height: 500,
    width: 500,
  },
  {
    title: 'Painting About Me',
    description: (
      <>
        <div>
          {' '}
          This painting is a painting about me which is based on a picture I taken at{' '}
          <LinkPreview url='https://www.tripadvisor.com/Tourism-g40517-Biddeford_Pool_Maine-Vacations.html' className='text-ui-text font-bold'>
            Biddeford Pool
          </LinkPreview>
          . I was able to finish this piece in one sitting which is a personal record for me.
        </div>
      </>
    ),
    badge: 'Personal Art',
    image: '/images/arts/biddeford-pool.jpg',
    height: 500,
    width: 500,
  },
  // {
  //   title: 'Lorem Ipsum Dolor Sit Amet',
  //   description: (
  //     <>
  //       <div>Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.</div>
  //     </>
  //   ),
  //   badge: 'Music Video',
  //   image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // },
]
