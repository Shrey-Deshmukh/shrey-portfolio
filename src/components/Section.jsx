import { motion, useReducedMotion } from "motion/react"

export default function Section({ id, index, command, title, children }) {
  const reduce = useReducedMotion()
  return (
    <motion.section
      id={id}
      className="section"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="eyebrow mono">
        <span className="muted">// {String(index).padStart(2, "0")}</span> {command}
      </p>
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </motion.section>
  )
}
