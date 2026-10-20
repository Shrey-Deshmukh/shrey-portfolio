import Section from "./Section"
import Pod from "./Pod"
import { projects, otherProjects } from "../data/projects"
import { profile } from "../data/profile"

export default function Projects() {
  return (
    <Section id="projects" index={3} command="kubectl get pods -l owner=shrey" title="Selected Projects">
      <div className="pods">
        {projects.map((p) => (
          <Pod key={p.name} project={p} />
        ))}
      </div>

      <div className="side-projects">
        <p className="eyebrow mono">$ kubectl get pods -n side-projects</p>
        <h3 className="side-title">More Projects</h3>
        <div className="side-grid">
          {otherProjects.map((p) => (
            <article className="card side-card" key={p.name}>
              <h4 className="side-name">{p.name}</h4>
              {p.metric && <p className="side-metric mono">{p.metric}</p>}
              <div className="chips">
                {p.tech.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
              {p.github && (
                <a className="pod-link mono" href={p.github} target="_blank" rel="noreferrer">
                  source on GitHub →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>

      <a className="more-link mono" href={profile.github} target="_blank" rel="noreferrer">
        kubectl get pods --all-namespaces → view everything on GitHub
      </a>
    </Section>
  )
}
