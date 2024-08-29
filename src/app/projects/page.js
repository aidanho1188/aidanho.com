'use client'
import {useEffect, useState} from 'react'
import NavMenu from '../components/Nav'
import Footer from '../components/Footer'
import Background from '../components/Background'
import CardHoverEffectDemo from './components/CardHoverEffect'
import fetchProjects from '../services/fetchProjects'

export default function Projects() {
  const [recentProjects, setRecentProjects] = useState([])
  const [projects, setProjects] = useState([])

  // TODO: (backend) sort projects from newest to oldest based on the last commit date using github API
  useEffect(() => {
    fetchProjects().then((projectsData) => {
      const recentProjects = projectsData.filter((project) => project.recentProjects)
      const otherProjects = projectsData.filter((project) => !project.recentProjects)
      setRecentProjects(recentProjects)
      setProjects(otherProjects)
      console.log({recentProjects, otherProjects})
    })
  }, [])
  return (
    <>
      <Background />
      <div className='h-inherit flex flex-col z-10 mt-20'>
        <h2 className='text-center text-3xl font-bold mt-5'>Recent Projects</h2>
        <CardHoverEffectDemo data={recentProjects} />
        <h2 className='text-center text-3xl font-bold mt-5'>Projects</h2>
        <CardHoverEffectDemo data={projects} />
      </div>
    </>
  )
}
