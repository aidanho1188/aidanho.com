// 'use client'
import React from 'react'
import * as data from '../data'
import NavMenu from '../components/Nav'
import Background from '../components/Background'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import InfoSection from './components/InfoSection'
import Projects from './components/Projects'
import Footer from '../components/Footer'
import Header from './components/Header'
import Seperator from '../components/Seperator'

export default function Home() {
  return (
    <main>
      <NavMenu />
      <Background />
      <div className='h-inherit flex flex-col z-10'>
        <HeroSection data={data} />

        <div className='border-t-2 border-b-2 border-ui-borderui-border bg-ui-background-wo flex flex-col justify-center py-12'>
          <Header title={'Skills'} />
          <Skills data={data} />
          <Seperator />

          <Header title={'Experiences'} />
          <Experiences data={data} />
          <Seperator />

          <Header title={'Educations'} />
          <InfoSection data={data.education} />
          <Seperator />

          <Header title={'Projects'} />
          <Projects data={data.projects} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
