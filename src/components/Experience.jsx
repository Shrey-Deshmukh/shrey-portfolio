import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"
import Section from "./Section"
import StatChip from "./StatChip"
import { experience } from "../data/experience"

export default function Experience() {
  const trackRef = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 60%"],
  })
  const packetTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <Section id="experience" index={2} command="kubectl rollout history shrey" title="Experience">
      <div className="timeline" ref={trackRef}>
        <div className="timeline-line" aria-hidden="true">
          {!reduce && (
            <motion.span className="timeline-fill" style={{ scaleY: scrollYProgress }} />
          )}
          {!reduce && <motion.span className="timeline-packet" style={{ top: packetTop }} />}
        </div>

        {experience.map((exp) => (
          <article className="timeline-item" key={`${exp.role}-${exp.time}`}>
            <span className="timeline-node" aria-hidden="true" />
            <div className="card">
              <header className="row">
                <div>
                  <h3 className="card-title">{exp.company}</h3>
                  <p className="muted">{exp.role}</p>
                </div>
                <p className="mono muted small">{exp.time}</p>
              </header>

              {exp.stats.length > 0 && (
                <div className="stats">
                  {exp.stats.map((s) => (
                    <StatChip key={s.label} {...s} />
                  ))}
                </div>
              )}

              <ul className="list">
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
