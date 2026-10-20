import useCountUp from "../hooks/useCountUp"

export default function StatChip({ prefix = "", value, suffix = "", decimals = 0, label }) {
  const [ref, shown] = useCountUp(value, decimals)
  return (
    <div className="stat" ref={ref}>
      <span className="stat-value mono">
        {prefix}{shown}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  )
}
