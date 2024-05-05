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
        <div className='h-screen w-full flex flex-col sm:flex-row items-center m-6'>
          <p className='italic text-center border-l-4 border-gray-500 pl-4 my-8 text-lg sm:text-xl font-semibold z-20 text-ui-text px-8 py-8 sm:w-[100vw] flex justify-center'>{quote.text}</p>
          <div className='h-[20rem] sm:w-[100vw] flex items-center justify-center'>
            <CardStack items={CARDS} />
          </div>
        </div>
      </Background>
      <footer> Built with Next.js and Vercel. © {new Date().getFullYear()} Aidan Ho. All rights reserved.</footer>
    </main>
  )
}

const quote = {
  text: 'Welcome to my website! I am a software developer with a passion for creating and learning. I am always looking for new opportunities to learn and grow. Feel free to check out my projects!',
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
