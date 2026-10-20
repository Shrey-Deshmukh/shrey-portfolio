import { useEffect, useRef, useState } from "react"
import { animate, useInView, useReducedMotion } from "motion/react"

// Counts from 0 to `target` the first time the returned ref scrolls into view.
export default function useCountUp(target, decimals = 0) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? target : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: setValue,
    })
    return () => controls.stop()
  }, [inView, reduce, target])

  return [ref, (reduce ? target : value).toFixed(decimals)]
}
