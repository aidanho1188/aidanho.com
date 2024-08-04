import {useRef} from 'react'
import Trees from './Trees'
import {useEffect} from 'react'

export default function Background() {
  const resizeCanvas = () => {
    const canvas = document.getElementById('canvas')
    if (canvas) {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
  }

  useEffect(() => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawBackground(ctx)
    }

    function drawBackground(ctx) {
      const backgroundImage = new Image()
      const starsImage = new Image()
      starsImage.src = '/images/arts/stars.png'
      backgroundImage.src = '/images/arts/grass.png'

      starsImage.onload = () => {
        const pattern = ctx.createPattern(starsImage, 'repeat')
        ctx.fillStyle = pattern
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
      backgroundImage.onload = () => {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, window.innerHeight)
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <>
      <Trees />
      <canvas id='canvas'></canvas>
    </>
  )
}
