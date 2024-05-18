import React from 'react'
import {FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaDiscord, FaEnvelope} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='social-icons flex mr-6 gap-2'>
        <a href='https://twitter.com'>
          <FaTwitter />
        </a>
        <a href='https://linkedin.com'>
          <FaLinkedin />
        </a>
        <a href='https://github.com'>
          <FaGithub />
        </a>
        <a href='https://discord.com'>
          <FaDiscord />
        </a>
        <a href='mailto:your-email@example.com'>
          <FaEnvelope />
        </a>
      </div>

      <small>Built with Next.js and Vercel. © {currentYear} Aidan Ho. All rights reserved.</small>
    </footer>
  )
}

export default Footer
