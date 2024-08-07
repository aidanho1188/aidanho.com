'use client'
import React, {useRef, useEffect} from 'react'
import * as data from '../data'
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
  const contentsRef = useRef(null)
  return (
    <>
      <Background />
      <div className='h-inherit flex flex-col z-10'>
        <HeroSection data={data} contentsRef={contentsRef} />

        <div ref={contentsRef} className='border-t-[1px] border-b-[1px] border-ui-border bg-background-color flex flex-col justify-center py-16'>
          <Header title={'Skills'} />
          <Skills data={data} />
          <Seperator />

          <Header title={'Experience'} />
          <Experiences data={data.experiences} />
          <Seperator />

          <Header title={'Education'} />
          <InfoSection data={data.education} />
          <Seperator />

          <Header title={'Projects'} />
          <Projects data={data.projects} />
        </div>
      </div>
    </>
  )
}
