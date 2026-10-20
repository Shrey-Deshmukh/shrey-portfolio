import Section from "./Section"
import { education, publication } from "../data/education"

export default function Education() {
  return (
    <Section id="education" index={4} command="kubectl get pv" title="Education">
      {education.map((e) => (
        <div className="card volume" key={e.volume}>
          <header className="row">
            <div>
              <p className="mono muted small">volume/{e.volume} · Bound</p>
              <h3 className="card-title">{e.degree}</h3>
              <p className="muted">
                {e.school}
                {e.detail && ` · ${e.detail}`}
              </p>
            </div>
            <div className="volume-meta mono small">
              <p className="muted">{e.time}</p>
              <p className="accent">{e.grade}</p>
            </div>
          </header>
          <div className="chips">
            {e.coursework.map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
        </div>
      ))}

      <div className="card volume">
        <p className="mono muted small">configmap/publication</p>
        <h3 className="card-title">{publication.title}</h3>
        <p className="muted">
          {publication.role} · {publication.venue}
        </p>
        <a className="pod-link mono" href={publication.url} target="_blank" rel="noreferrer">
          read on IOPscience →
        </a>
      </div>
    </Section>
  )
}
