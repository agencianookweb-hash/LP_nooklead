import React, { useEffect, useState, useRef } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  decimals?: number
}

export default function AnimatedCounter({ end, duration = 2, decimals = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (hasAnimated || !ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          let startTime: number | null = null
          const startValue = 0

          const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime
            const elapsed = (currentTime - startTime) / 1000
            const progress = Math.min(elapsed / duration, 1)

            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const current = startValue + (end - startValue) * easeOutQuart

            setCount(current)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(end)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [end, duration, hasAnimated])

  return <span ref={ref}>{count.toFixed(decimals)}</span>
}
