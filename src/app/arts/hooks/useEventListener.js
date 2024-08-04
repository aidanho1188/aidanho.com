import {useEffect} from 'react'

function useEventListener(eventName, handler, element) {
  useEffect(() => {
    const targetElement = element || (typeof window !== 'undefined' ? window : null)

    if (!targetElement || !targetElement.addEventListener) {
      return
    }

    targetElement.addEventListener(eventName, handler)

    return () => {
      targetElement.removeEventListener(eventName, handler)
    }
  }, [eventName, handler, element])
}

export {useEventListener}
