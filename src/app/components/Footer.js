import React from 'react'
import {FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaDiscord, FaEnvelope} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='contact flex flex-col gap-2'>
        <p>Feel free to reach out for projects, collaborations, or just to say hello!</p>
        <div className='social-icons flex flex-row mr-6 gap-2 justify-center'>
          <a href='https://twitter.com' target='_blank'>
            <FaTwitter />
          </a>
          <a href='https://linkedin.com' target='_blank'>
            <FaLinkedin />
          </a>
          <a href='https://github.com' target='_blank'>
            <FaGithub />
          </a>
          <a href='https://discord.com' target='_blank'>
            <FaDiscord />
          </a>
          <a href='mailto:your-email@example.com'>
            <FaEnvelope />
          </a>
        </div>
      </div>

      <small>Built with Next.js and Vercel. © {currentYear} Aidan Ho. All rights reserved.</small>
    </footer>
  )
}

export default Footer
