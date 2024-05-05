import React from 'react'
import NavMenu from '../components/Nav'
import Background from '../components/Background'
import CardStack from '../components/ui/card-stack'
import Highlight from '../components/ui/highlight'

export default function Home() {
  const currentYear = new Date().getFullYear()
  return (
    <main>
      <NavMenu />
      <Background>
        <div className='flex flex-col sm:flex-row w-[100vw] items-center m-6'>
          <p className='text-4xl font-bold z-20 text-ui-text px-8 py-8 w-[50vw] sm:w-[100vw] '>This is a wise quote!</p>
          <div className='h-[20rem] w-[50vw] sm:w-[100vw] flex items-center justify-center'>
            <CardStack items={CARDS} />
          </div>
        </div>
      </Background>
      <footer> Built with Next.js and Vercel. © {new Date().getFullYear()} Aidan Ho. All rights reserved.</footer>
    </main>
  )
}

const CARDS = [
  {
    id: 0,
    name: 'Project name',
    designation: 'Link to project page',
    content: (
      <p>
        Project <Highlight>Name</Highlight> description...
      </p>
    ),
  },
  {
    id: 1,
    name: 'Project name',
    designation: 'Link to project page',
    content: (
      <p>
        Project <Highlight>Name</Highlight> description...
      </p>
    ),
  },
  {
    id: 2,
    name: 'Project name',
    designation: 'Link to project page',
    content: (
      <p>
        Project <Highlight>Name</Highlight> description...
      </p>
    ),
  },
]
