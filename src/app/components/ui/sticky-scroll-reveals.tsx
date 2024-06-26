'use client'
import React, {useRef} from 'react'
import {useMotionValueEvent, useScroll} from 'framer-motion'
import {motion} from 'framer-motion'
import {cn} from '../../utils/cn'

const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    description: string
    content?: React.ReactNode | any
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)
  const {scrollYProgress} = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ['start start', 'end start'],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index
      }
      return acc
    }, 0)
    setActiveCard(closestBreakpointIndex)
  })

  const backgroundColors = ['var(--slate-900)', 'var(--black)', 'var(--neutral-900)']
  const linearGradients = ['linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))', 'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))', 'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))']
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className='h-[30rem] overflow-y-auto scrollbar-hide flex justify-center relative space-x-10 pb-[100vh]'
      ref={ref}
    >
      <div className='div relative flex items-start px-4'>
        <div className='max-w-2xl'>
          {content.map((item, index) => (
            <div key={item.title + index} className='my-[50%]'>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-2xl font-bold text-slate-100 max-w-md ml-20'
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-kg text-slate-300 max-w-md mt-10 ml-20'
              >
                {item.description}
              </motion.div>
            </div>
          ))}
          <div className='h-20 ' />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn('hidden lg:block h-[60vh] w-[25vw] rounded-xl bg-white fixed top-[20vh] left-0 overflow-hidden', contentClassName)}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  )
}

export default StickyScroll
