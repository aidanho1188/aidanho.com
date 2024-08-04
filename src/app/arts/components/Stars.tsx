import React, {useMemo} from 'react'
import seedrandom from 'seedrandom'
import {cn} from '../../utils/cn'

const Stars = ({number, isAnimationOn, className, seed}: {number?: number; isAnimationOn: boolean; className?: string; seed: string}) => {
  const stars = useMemo(() => {
    const rng = seedrandom(seed)
    return new Array(number || 100).fill(true).map(() => {
      const size = rng() * 4 + 0.5
      const animationDuration = `${rng() * 3 + 1}s`
      return {
        size,
        animationDuration,
        top: `${rng() * 100}vh`,
        left: `${rng() * 100}vw`,
      }
    })
  }, [number, seed])

  return (
    <>
      {stars.map((star, idx) => (
        <span
          key={'star' + idx}
          className={cn('z-0 fixed rounded-full bg-white', className)}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
          }}
        />
      ))}
    </>
  )
}

export default Stars
