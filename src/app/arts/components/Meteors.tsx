import style from 'styled-jsx/style'
import {cn} from '../../utils/cn'
import React from 'react'

// Using seed to prevent server and client style mismatch between render
const seedRandom = (seed: number) => {
  let x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const generateStyle = (index: number, seed: number) => {
  const random1 = seedRandom(seed + index)
  const random2 = seedRandom(seed + index + 1)
  const random3 = seedRandom(seed + index + 2)

  const top = '-5px'
  const left = `${Math.floor(random1 * 200 - 20) + index}vw`
  const animationDelay = `${Math.floor(random2 * 20 + 2) + index}s`
  const animationDuration = `${Math.floor(random3 * (10 - 5) + 10) + index}s`

  return {
    top,
    left,
    animationDelay,
    animationDuration,
  }
}

const Meteors = ({number, isAnimationOn, className}: {number?: number; isAnimationOn: boolean; className?: string}) => {
  const meteors = new Array(number || 20).fill(true)
  const seed = 42
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={'meteor' + idx}
          className={cn(
            {
              'animate-meteor-effect': isAnimationOn,
            },
            'fixed top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-meteors-color shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]',
            "before:content-[''] before:fixed before:top-1/2 before:transform before:-translate-y-[100%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[white] before:to-transparent",
            className,
          )}
          style={generateStyle(idx, seed)}
        ></span>
      ))}
    </>
  )
}

export default Meteors
