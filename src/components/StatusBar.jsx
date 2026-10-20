import { useState } from "react"
import { profile, sections } from "../data/profile"
import useUptime from "../hooks/useUptime"

export default function StatusBar({ theme, onToggleTheme }) {
  const uptime = useUptime(profile.careerStart)
  const [open, setOpen] = useState(false)

  return (
    <header className="statusbar">
      <div className="statusbar-inner">
        <a className="brand mono" href="#top" onClick={() => setOpen(false)}>
          shrey<span className="accent">.cluster</span>
        </a>

        <ul className="status-meta mono" aria-label="Cluster status">
          <li><span className="dot dot-ok" aria-hidden="true" /> healthy</li>
          <li className="meta-region"><span className="muted">region:</span> irvine-ca</li>
          <li className="meta-uptime"><span className="muted">uptime:</span> {uptime}</li>
          <li className="meta-status"><span className="muted">status:</span> seeking full-time employment</li>
        </ul>

        <button
          className="menu-toggle mono"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕ close" : "☰ nodes"}
        </button>

        <nav id="primary-nav" className={`nav-links mono${open ? " is-open" : ""}`}>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)}>
              {s.label}
            </a>
          ))}
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </nav>
      </div>
    </header>
  )
}
