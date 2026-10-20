import { motion } from "motion/react"

// A small dot travelling along a straight edge, looping forever.
export default function Packet({ from, to, delay = 0, reverse = false, color = "var(--accent)" }) {
  const [a, b] = reverse ? [to, from] : [from, to]
  return (
    <motion.circle
      r="3.5"
      fill={color}
      initial={{ cx: a.x, cy: a.y, opacity: 0 }}
      animate={{ cx: [a.x, b.x], cy: [a.y, b.y], opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 1.8,
        delay,
        repeat: Infinity,
        repeatDelay: 0.9,
        ease: "easeInOut",
        opacity: { duration: 1.8, delay, repeat: Infinity, repeatDelay: 0.9, times: [0, 0.15, 0.85, 1] },
      }}
    />
  )
}
