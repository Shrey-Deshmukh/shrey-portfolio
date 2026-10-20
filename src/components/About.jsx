import Section from "./Section"
import { profile } from "../data/profile"

export default function About() {
  return (
    <Section id="about" index={1} command="kubectl describe node/shrey" title="About">
      <div className="describe card">
        <dl className="describe-grid mono">
          <dt>Name:</dt>
          <dd>{profile.name}</dd>
          <dt>Role:</dt>
          <dd>{profile.role}</dd>
          <dt>Labels:</dt>
          <dd className="chips">
            {profile.labels.map((l) => (
              <span className="chip" key={l}>{l}</span>
            ))}
          </dd>
          <dt>Certs:</dt>
          <dd className="chips">
            {profile.certifications.map((c) => (
              <span className="chip chip-plain" key={c}>{c}</span>
            ))}
          </dd>
          <dt>Conditions:</dt>
          <dd><span className="pill pill-ok">Ready</span> <span className="pill">OpenToWork</span></dd>
        </dl>

        <div className="describe-prose">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  )
}
