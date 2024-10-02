'use client'

import {Inter} from 'next/font/google'
import './globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect, useState} from 'react'
import {usePathname} from 'next/navigation' // Revert to next/navigation for use in app directory
import {metadata} from './metadata'
import {toast, Toaster} from 'sonner'
import NavMenu from './components/Nav'
import Footer from './components/Footer'

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}) {
  const [darkMode, setDarkMode] = useState(null)
  const [isMounted, setIsMounted] = useState(false)
  const [loading, setLoading] = useState(false) // Set loading to true initially
  const pathname = usePathname()

  // Ensure client-side rendering only
  useEffect(() => {
    setIsMounted(true) // Set mounted to true on client-side
  }, [])

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

    setDarkMode(mediaQuery.matches)

    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [darkMode])

  useEffect(() => {
    setLoading(true)
    const handleComplete = () => setLoading(false)

    handleComplete()

    return () => {
      handleComplete()
    }
  }, [pathname])

  return (
    <html lang='en' className={darkMode ? 'dark' : 'light'} suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <main>
          {loading && <div className='loading'>Loading...</div>}
          <NavMenu />
          {!loading && children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  )
}
