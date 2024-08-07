'use client'
import {Inter} from 'next/font/google'
import './globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect, useState} from 'react'
import {metadata} from './metadata'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavMenu from './components/Nav'
import Footer from './components/Footer'

const inter = Inter({subsets: ['latin']})
export default function RootLayout({children}) {
  const [darkMode, setDarkMode] = useState(null)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
  }, [])

  useEffect(() => {
    // first load
    let localDarkMode = ''
    if (localStorage.getItem('darkMode') === null) {
      localDarkMode = matchMedia('(prefers-color-scheme: dark)').matches
    } else {
      localDarkMode = JSON.parse(localStorage.getItem('darkMode'))
    }
    if (localDarkMode) {
      document.documentElement.classList.add('dark-mode')
      document.documentElement.classList.remove('light-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
      document.documentElement.classList.add('light-mode')
    }
    localStorage.setItem('darkMode', localDarkMode)
    setDarkMode(localDarkMode)
  }, [])

  const toggleDarkMode = () => {
    let localDarkMode = !darkMode
    setDarkMode(localDarkMode)
    localStorage.setItem('darkMode', localDarkMode)
    if (localDarkMode) {
      document.documentElement.classList.add('dark-mode')
      document.documentElement.classList.remove('light-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
      document.documentElement.classList.add('light-mode')
    }
  }

  return (
    <html lang='en'>
      <head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </head>
      <body className={inter.className}>
        <main>
          <NavMenu toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          {children}
          <Footer />
        </main>
        <ToastContainer />
      </body>
    </html>
  )
}
