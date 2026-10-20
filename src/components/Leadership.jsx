import Section from "./Section"
import { leadership } from "../data/leadership"

export default function Leadership() {
  return (
    <Section id="leadership" index={5} command="kubectl get sidecars" title="Leadership & Activities">
      <div className="sidecars">
        {leadership.map((item) => (
          <div className="card" key={item.title}>
            <p className="mono muted small">
              {["sidecar", item.org, item.time].filter(Boolean).join(" · ")}
            </p>
            <h3 className="card-title">{item.title}</h3>
            <ul className="list">
              {item.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            {item.link && (
              <a className="pod-link mono sidecar-link" href={item.link.url} target="_blank" rel="noreferrer">
                {item.link.label} →
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
