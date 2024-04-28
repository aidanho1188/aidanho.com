import React from 'react'
import {cn} from '../../util/cn'
import clsx from 'clsx'

const Stars = ({number, isAnimationOn, className}: {number?: number; isAnimationOn: boolean; className?: string}) => {
  const stars = new Array(number || 100).fill(true)
  return (
    <>
      {stars.map((el, idx) => {
        const size = Math.random() * 4 + 0.5
        const animationDuration = `${Math.random() * 3 + 1}s`
        return (
          <span
            key={'star' + idx}
            className={cn('fixed rounded-full bg-white', className)}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animation: isAnimationOn && size > 4 ? `dim ${animationDuration} infinite alternate` : 'none',
            }}
          ></span>
        )
      })}
      <style jsx global>{`
        @keyframes dim {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}

export default Stars
