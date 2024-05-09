import React from 'react'
import NavMenu from '../components/Nav'
import Background from '../components/Background'
import HeroSection from './components/HeroSection'
import * as data from '../data'
import Footer from '../components/Footer'

export default function Home() {
  const currentYear = new Date().getFullYear()
  return (
    <main>
      <NavMenu />
      <Background>
        <div className='flex flex-col overflow-y-hidden z-20'>
          <HeroSection />
          <div className='bg-ui-background-wo flex flex-col items-center justify-center'>
            <div className='flex flex-row flex-wrap items-center justify-center mt-8 w-full'>
              Skills:
              {data.skills.map((skill) => (
                <div key={skill.id} className='flex flex-col items-center justify-center mx-4'>
                  <p>{skill.name}</p>
                  <p>{skill.experience}</p>
                </div>
              ))}
            </div>
            <div className='flex flex-col items-center justify-center mt-8 w-full'>
              Experience:
              {data.experiences.map((exp) => (
                <div key={exp.id} className='flex flex-col items-center justify-center mx-4'>
                  <p>{exp.name}</p>
                  <p>{exp.company}</p>
                  <p>{exp.duration}</p>
                </div>
              ))}
            </div>
            {data.education.map((edu) => (
              <div key={edu.id} className='flex flex-col items-center justify-center mx-4'>
                <p>{edu.name}</p>
                <p>{edu.degree}</p>
                <p>{edu.duration}</p>
              </div>
            ))}
            {data.projects.map((project) => (
              <div key={project.id} className='flex flex-col items-center justify-center mx-4'>
                <p>{project.name}</p>
                <p>{project.description}</p>
                <p>{project.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </Background>
      <Footer />
    </main>
  )
}

// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import HeroSection from './components/HeroSection'
// import AboutMe from './components/AboutMe'
// import Skills from './components/Skills'
// import Projects from './components/Projects'
// import ContactForm from './components/ContactForm'
