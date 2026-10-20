import { motion, useReducedMotion } from "motion/react"
import { profile } from "../data/profile"
import ClusterMap from "./cluster/ClusterMap"

export default function Hero() {
  const reduce = useReducedMotion()
  const words = profile.name.split(" ")

  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow mono">$ kubectl get node shrey</p>

        <h1 className="hero-title" aria-label={profile.name}>
          {words.map((word, w) => (
            <span className="hero-word" key={word} aria-hidden="true">
              {word.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + (w * 6 + i) * 0.035, duration: 0.35 }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-status mono">
          <span className="dot dot-ok" aria-hidden="true" /> {profile.status}
        </p>

        <div className="hero-actions">
          <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
            Resume ↗
          </a>
          <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn-secondary" href={`mailto:${profile.email}`}>
            Email
          </a>
        </div>
      </div>

      <ClusterMap />
    </section>
  )
}
