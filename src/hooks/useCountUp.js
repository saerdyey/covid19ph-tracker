import { useEffect, useRef, useState } from 'react'

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

// Animates from the previous value to `end` over `duration` ms.
const useCountUp = (end, duration = 1600) => {
  const [value, setValue] = useState(0)
  const fromRef = useRef(0)

  useEffect(() => {
    if (end == null) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      fromRef.current = end
      setValue(end)
      return
    }
    const from = fromRef.current
    let frame
    let start
    const step = (now) => {
      start ??= now
      const t = Math.min((now - start) / duration, 1)
      const current = Math.round(from + (end - from) * easeOutCubic(t))
      fromRef.current = current
      setValue(current)
      if (t < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [end, duration])

  return value
}

export default useCountUp
