import React from 'react'
import {FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaDiscord, FaEnvelope} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='contact flex flex-col gap-2'>
        <p>Feel free to reach out for projects, collaborations, or just to say hello!</p>
        <div className='social-icons flex flex-row mr-6 gap-2 justify-center'>
          {/* <a href='https://twitter.com' target='_blank'>
            <FaTwitter />
          </a> */}
          <a href='https://www.linkedin.com/in/aidan-ho/' target='_blank'>
            <FaLinkedin />
          </a>
          <a href='https://github.com/aidanho1188' target='_blank'>
            <FaGithub />
          </a>
          <a href='https://discord.com/users/1172334442702983202' target='_blank'>
            <FaDiscord />
          </a>
          <a href='mailto:aidanho23657@gmail.com'>
            <FaEnvelope />
          </a>
        </div>
      </div>

      <small>Built with Next.js and Vercel. © {currentYear} Aidan Ho. All rights reserved.</small>
    </footer>
  )
}

export default Footer
