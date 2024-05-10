import React from 'react'
import * as data from '../data'
import NavMenu from '../components/Nav'
import Background from '../components/Background'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Educations from './components/Educations'
import Projects from './components/Projects'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <NavMenu />
      <Background />
      <div className='h-inherit flex flex-col z-10'>
        <HeroSection data={data} />

        {/* <ContactForm data={data} /> */}
        <div className='bg-ui-background-wo flex flex-col items-center justify-center'>
          <Skills data={data} />
          <Experiences data={data} />
          <Educations data={data} />
          <Projects data={data} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
