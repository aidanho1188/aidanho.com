'use client'
import {useRef} from 'react'
import NavMenu from '../components/Nav'
import Footer from '../components/Footer'
import Background from '../components/Background'
import * as data from '../data'
import CardHoverEffectDemo from './components/CardHoverEffect'

export default function Projects() {
  return (
    <main>
      <NavMenu />
      <Background />
      <div className='h-inherit flex flex-col z-10 mt-20'>
        <h2 className='text-center text-3xl font-bold mt-5'>Current Projects</h2>
        <CardHoverEffectDemo data={data.currentProjects} />
        <h2 className='text-center text-3xl font-bold mt-5'>Projects</h2>
        <CardHoverEffectDemo data={data.projects} />
      </div>
      <Footer />
    </main>
  )
}
