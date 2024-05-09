import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <small>Built with Next.js and Vercel. © {currentYear} Aidan Ho. All rights reserved.</small>
    </footer>
  )
}

export default Footer
