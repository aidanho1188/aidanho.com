// 'use client'
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

        <div className='bg-ui-background-wo flex flex-col items-center justify-center py-12'>
          <div data-aos='fade-up'>
            <h1 className='text-3xl font-bold text-ui-text-primary m-6'>Resume</h1>
          </div>
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
