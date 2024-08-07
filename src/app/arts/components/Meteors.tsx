import {cn} from '../../utils/cn'
import clsx from 'clsx'
import React from 'react'

const Meteors = ({number, isAnimationOn, className}: {number?: number; isAnimationOn: boolean; className?: string}) => {
  const meteors = new Array(number || 20).fill(true)
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
          style={{
            top: -5,
            left: Math.floor(Math.random() * 200 - 20) + 'vw',
            animationDelay: Math.floor(Math.random() * 20 + 2) + 's',
            animationDuration: Math.floor(Math.random() * (10 - 5) + 10) + 's',
          }}
        ></span>
      ))}
    </>
  )
}

export default Meteors
