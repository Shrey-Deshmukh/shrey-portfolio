import Section from "./Section"

export default function Education() {
  return (
    <Section id="education" title="Education">
    <div className="card">
        <div className="row">
            <div>
                <h3 className="card-title">
                  Master of Computer Science
                </h3>
                <p className="muted">University of California, Irvine</p>
            </div>

                <p className="muted">2025 — 2026</p>
        </div>

            <p className="muted">
              Relevant coursework: Artificial Intelligence, Algorithms, Advanced Programming, Data Structures, Distributed Systems
            </p>
    </div>
    </Section>
  )
}
