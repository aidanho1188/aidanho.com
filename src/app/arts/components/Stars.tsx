import React, {useEffect, useMemo} from 'react'

const Stars = ({number, isAnimationOn, className, seed}: {number?: number; isAnimationOn: boolean; className?: string; seed: string}) => {
  // const stars = useMemo(() => {
  //   const rng = seedrandom(seed)
  //   return new Array(number || 100).fill(true).map(() => {
  //     const size = rng() * 4 + 0.5
  //     const animationDuration = `${rng() * 3 + 1}s`
  //     return {
  //       size,
  //       animationDuration,
  //       top: `${rng() * 100}vh`,
  //       left: `${rng() * 100}vw`,
  //     }
  //   })
  // }, [number, seed])

  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const ctx = canvas.getContext('2d')

    if (ctx) {
      const starsImage = new Image()
      starsImage.src = '/images/art/stars.jpg'
      starsImage.onload = () => {
        ctx.drawImage(starsImage, 0, 0, canvas.width, canvas.height)
        const backgroundCanvas = document.getElementById('backgroundCanvas') as HTMLCanvasElement
        if (backgroundCanvas) {
          const backgroundCtx = backgroundCanvas.getContext('2d')
          if (backgroundCtx) {
            backgroundCtx.drawImage(starsImage, 0, 0, backgroundCanvas.width, backgroundCanvas.height)
          }
        }
      }
    }
  }, [])

  return (
    // <>
    //   {stars.map((star, idx) => (
    //     <span
    //       key={'star' + idx}
    //       className={cn('z-0 fixed rounded-full bg-white', className)}
    //       style={{
    //         width: `${star.size}px`,
    //         height: `${star.size}px`,
    //         top: star.top,
    //         left: star.left,
    //       }}
    //     />
    //   ))}
    // </>
    <>
      <canvas id='backgroundCanvas' width={window.innerWidth} height={window.innerHeight} style={{position: 'absolute', top: 0, left: 0, zIndex: -1}} />
    </>
  )
}

export default Stars
