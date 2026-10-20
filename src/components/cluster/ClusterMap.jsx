import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "motion/react"
import { sections } from "../../data/profile"
import Node from "./Node"
import Packet from "./Packet"

const CENTER = { x: 300, y: 230 }
const RADIUS_X = 230
const RADIUS_Y = 165

// Satellite positions around the central "shrey" node.
const nodes = sections.map((s, i) => {
  const angle = (i / sections.length) * Math.PI * 2 - Math.PI / 2
  return {
    ...s,
    x: CENTER.x + Math.cos(angle) * RADIUS_X,
    y: CENTER.y + Math.sin(angle) * RADIUS_Y,
  }
})

// Ring links between neighbouring satellites; used as the failover detour.
const ring = nodes.map((n, i) => [n, nodes[(i + 1) % nodes.length]])

// The neighbour just before a node on the ring carries its traffic during failover.
const peerOf = (id) => {
  const i = nodes.findIndex((n) => n.id === id)
  return nodes[(i - 1 + nodes.length) % nodes.length]
}

const HEALTHY_LOG = `cluster healthy · ${nodes.length + 1}/${nodes.length + 1} nodes ready`

export default function ClusterMap() {
  const reduce = useReducedMotion()
  const wrapRef = useRef(null)
  const lastDownRef = useRef(null)
  const timersRef = useRef([])
  const [visible, setVisible] = useState(true)
  const [hovered, setHovered] = useState(null)
  const [downId, setDownId] = useState(null)
  const [log, setLog] = useState(HEALTHY_LOG)

  // Pause packet animation when the map is off-screen.
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => () => timersRef.current.forEach(clearTimeout), [])

  const animating = visible && !reduce
  const failing = downId !== null
  const target = failing ? nodes.find((n) => n.id === downId) : null
  const peer = failing ? peerOf(downId) : null

  function simulateFailover() {
    if (failing) return
    // Pick a random node, never the same one twice in a row.
    const candidates = nodes.filter((n) => n.id !== lastDownRef.current)
    const next = candidates[Math.floor(Math.random() * candidates.length)]
    const via = peerOf(next.id)
    lastDownRef.current = next.id

    setDownId(next.id)
    setLog(`link down: shrey ↔ ${next.id} · rerouting via ${via.id}…`)
    timersRef.current = [
      setTimeout(() => setLog(`failover complete in 0.4s · traffic via ${via.id} → ${next.id}`), 900),
      setTimeout(() => {
        setDownId(null)
        setLog(`link restored · ${HEALTHY_LOG}`)
      }, 4200),
    ]
  }

  return (
    <div className="cluster" ref={wrapRef}>
      <div className="cluster-stage">
        <svg
          className="cluster-svg"
          viewBox="0 0 600 460"
          role="img"
          aria-label="Diagram of Shrey's portfolio drawn as a cluster: a central node linked to about, experience, projects, education, leadership and contact."
        >
          <defs>
            <radialGradient id="core-glow">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={CENTER.x} cy={CENTER.y} r="110" fill="url(#core-glow)" />

          {ring.map(([a, b]) => {
            const isDetour = failing && a.id === peer.id && b.id === target.id
            return (
              <line
                key={`${a.id}-${b.id}`}
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                className={`edge edge-ring${isDetour ? " edge-detour" : ""}`}
              />
            )
          })}

          {nodes.map((n) => {
            const down = n.id === downId
            const lit = hovered === n.id
            return (
              <line
                key={n.id}
                x1={CENTER.x} y1={CENTER.y} x2={n.x} y2={n.y}
                className={`edge${lit ? " edge-lit" : ""}${down ? " edge-down" : ""}`}
              />
            )
          })}

          {animating &&
            nodes.map((n, i) => {
              if (n.id === downId) return null
              return (
                <Packet
                  key={n.id}
                  from={CENTER}
                  to={n}
                  delay={i * 0.45}
                  reverse={i % 2 === 1}
                />
              )
            })}

          {animating && failing && (
            <>
              <Packet key={`in-${downId}`} from={CENTER} to={peer} delay={0} color="var(--warn)" />
              <Packet key={`hop-${downId}`} from={peer} to={target} delay={0.6} color="var(--warn)" />
            </>
          )}

          <g className="core">
            <circle cx={CENTER.x} cy={CENTER.y} r="44" className="core-ring" />
            <text x={CENTER.x} y={CENTER.y - 4} className="core-label">shrey</text>
            <text x={CENTER.x} y={CENTER.y + 14} className="core-sub">control-plane</text>
          </g>
        </svg>

        {/* Satellite nodes are real links laid over the SVG so they stay keyboard accessible. */}
        {nodes.map((n) => (
          <Node
            key={n.id}
            node={n}
            left={`${(n.x / 600) * 100}%`}
            top={`${(n.y / 460) * 100}%`}
            down={n.id === downId}
            onHover={setHovered}
          />
        ))}
      </div>

      <div className="cluster-console">
        <span className={`dot ${failing ? "dot-warn" : "dot-ok"}`} aria-hidden="true" />
        <span className="mono" role="status">{log}</span>
        <button className="btn-ghost" onClick={simulateFailover} disabled={failing}>
          ▶ simulate failover
        </button>
      </div>
    </div>
  )
}
