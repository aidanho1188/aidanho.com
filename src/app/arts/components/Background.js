import {useRef} from 'react'
import Trees from './Trees'
import {useEffect, useState} from 'react'

export default function Background() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const resizeCanvas = () => {
    const canvas = document.getElementById('canvas')
    if (canvas) {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
  }

  useEffect(() => {
    const canvas = document.getElementById('ground-canvas')
    const ctx = canvas.getContext('2d')

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Adjust the width as needed
    }
    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGround()
      drawSky()
    }

    function drawSky() {
      const skyCanvas = document.getElementById('sky-canvas')
      const skyCtx = skyCanvas.getContext('2d')

      // Set canvas dimensions to match the window dimensions
      skyCanvas.width = window.innerWidth
      skyCanvas.height = window.innerHeight

      const starsImage = new Image()
      starsImage.src = '/images/arts/stars.png'
      starsImage.onload = () => {
        const pattern = skyCtx.createPattern(starsImage, 'repeat')
        if (pattern) {
          skyCtx.fillStyle = pattern
          skyCtx.fillRect(0, 0, skyCanvas.width, skyCanvas.height)
        } else {
          console.error('Failed to create pattern')
        }
      }

      starsImage.onerror = () => {
        console.error('Failed to load image')
      }
    }

    function drawGround() {
      const groundCanvas = document.getElementById('ground-canvas')
      const groundCtx = groundCanvas.getContext('2d')
      const groundImage = new Image()
      groundImage.src = '/images/arts/grass.png'
      groundImage.onload = () => {
        groundCtx.drawImage(groundImage, 0, 0, groundCanvas.width, groundCanvas.height)
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  if (isMobile) {
    return (
      <>
        {/* <canvas id='canvas'></canvas> */}
        <canvas id='sky-canvas'></canvas>
        <canvas id='ground-canvas'></canvas>
      </>
    )
  } else {
    return (
      <>
        <Trees />
        <canvas id='canvas'></canvas>
        <canvas id='sky-canvas'></canvas>
        <canvas id='ground-canvas'></canvas>
      </>
    )
  }
}
