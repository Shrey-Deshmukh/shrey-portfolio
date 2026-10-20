// Splits "throughput: ~11,000 tx/s" into a dim label and a highlighted value.
function MetricLine({ line }) {
  const i = line.indexOf(": ")
  if (i === -1) return <li className="metric-value">{line}</li>
  return (
    <li>
      <span className="metric-label">{line.slice(0, i + 1)}</span>{" "}
      <span className="metric-value">{line.slice(i + 2)}</span>
    </li>
  )
}

export default function Pod({ project }) {
  return (
    <article className={`pod card${project.featured ? " pod-featured" : ""}`}>
      <header className="pod-head mono">
        <span className="pod-name">
          pod/{project.name}
          {project.note && <span className="pod-note"> · {project.note}</span>}
        </span>
        <span className="pill pill-ok">
          <span className="dot dot-ok" aria-hidden="true" /> Running
        </span>
      </header>

      <h3 className="card-title">{project.title}</h3>
      <p className="muted">{project.desc}</p>

      <div className="chips">
        {project.tech.map((t) => (
          <span className="chip" key={t}>{t}</span>
        ))}
      </div>

      <div className="pod-logs mono">
        <p className="pod-logs-cmd muted">$ kubectl logs {project.name}</p>
        <ul aria-label={`${project.title} results`}>
          {project.metrics.map((line) => (
            <MetricLine key={line} line={line} />
          ))}
        </ul>
      </div>

      {project.github && (
        <a className="pod-link mono" href={project.github} target="_blank" rel="noreferrer">
          source on GitHub →
        </a>
      )}
    </article>
  )
}
