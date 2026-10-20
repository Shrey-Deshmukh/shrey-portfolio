import { useEffect, useState } from "react"

function format(start) {
  const now = new Date()
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())
  if (now.getDate() < start.getDate()) months -= 1
  const y = Math.floor(months / 12)
  const m = months % 12
  return `${y}y ${m}m`
}

// Time since `start`, formatted like "3y 9m". Refreshes hourly.
export default function useUptime(start) {
  const [uptime, setUptime] = useState(() => format(start))
  useEffect(() => {
    const id = setInterval(() => setUptime(format(start)), 60 * 60 * 1000)
    return () => clearInterval(id)
  }, [start])
  return uptime
}
