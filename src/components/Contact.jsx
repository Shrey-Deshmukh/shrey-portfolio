import { useRef, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import Section from "./Section"
import { profile } from "../data/profile"

export default function Contact() {
  const reduce = useReducedMotion()
  const [pings, setPings] = useState([])
  const [sending, setSending] = useState(false)
  const [copied, setCopied] = useState(false)
  const seq = useRef(0)

  function ping() {
    if (sending) return
    setSending(true)
    const time = (Math.random() * 2 + 0.4).toFixed(1)
    seq.current += 1
    const n = seq.current
    setTimeout(() => {
      setPings((p) => [...p.slice(-2), `64 bytes from ${profile.email}: icmp_seq=${n} time=${time}ms`])
      setSending(false)
    }, reduce ? 0 : 700)
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <Section id="contact" index={6} command="ping shrey" title="Contact">
      <div className="card contact">
        <p className="contact-lead">
          Graduating in December 2026 and looking for full-time software engineering roles. The fastest way to reach me is email.
        </p>

        <div className="ping-lane" aria-hidden="true">
          <span className="mono small">you</span>
          <div className="ping-track">
            {sending && !reduce && (
              <motion.span
                className="ping-packet"
                initial={{ left: "0%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            )}
          </div>
          <span className="mono small">shrey</span>
        </div>

        <div className="terminal mono" role="log" aria-live="polite">
          <div><span className="accent">$</span> ping {profile.email}</div>
          {pings.map((line) => (
            <div key={line} className="muted">{line}</div>
          ))}
          {pings.length === 0 && <div className="muted">awaiting packets…</div>}
        </div>

        <div className="hero-actions">
          <button className="btn" onClick={ping} disabled={sending}>
            {sending ? "pinging…" : "ping shrey"}
          </button>
          <a className="btn btn-secondary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <button className="btn btn-secondary" onClick={copyEmail}>
            {copied ? "copied ✓" : "copy email"}
          </button>
          <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </Section>
  )
}
