'use client'
import {Inter} from 'next/font/google'
import './globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect, useState} from 'react'
import {metadata} from './metadata'
import {toast, Toaster} from 'sonner'
import NavMenu from './components/Nav'
import Footer from './components/Footer'

const inter = Inter({subsets: ['latin']})
export default function RootLayout({children}) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => setDarkMode(e.matches)

    // first load
    let localDarkMode = ''
    try {
      if (localStorage.getItem('darkMode') === null) {
        localDarkMode = mediaQuery.matches
      } else {
        localDarkMode = JSON.parse(localStorage.getItem('darkMode'))
      }
    } catch (error) {
      console.error('Error getting dark mode preference', error)
    }

    setDarkMode(localDarkMode)

    if (localDarkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleDarkMode = () => {
    let localDarkMode = !darkMode
    setDarkMode(localDarkMode)
    localStorage.setItem('darkMode', localDarkMode)

    if (localDarkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <html lang='en' className={darkMode ? 'dark' : 'light'} suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <main>
          <NavMenu toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  )
}
