'use client'
import {Inter} from 'next/font/google'
import './globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import {metadata} from './metadata'
const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}) {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
  }, [])
  return (
    <html lang='en'>
      <head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
