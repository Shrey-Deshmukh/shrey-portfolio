import Section from "./Section"

const experienceData = [
  {
    company: "Hewlett Packard Enterprise (HPE)",
    role: "Software / Cloud Development Engineer I",
    time: "Aug 2023 — Aug 2025",
    points: [
      "Developed enterprise Kubernetes Container Storage Provider (CSP) features using CSI.",
      "Engineered high-availability workflows with custom Kubernetes CRDs and policy-based replication.",
      "Contributing to ∼ $1.1M Disaster Event Recovery solution by implementing fast snapshot restore workflows"
    ],
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Software / Cloud Development Engineering Intern",
    time: "Jan 2023 — July 2024",
    points: [
      "Developed disaster recovery automation for VMware SRM across all HPE storage systems.",
      "Extended support across multiple storage platforms and modern storage protocols.",
      "Designed a CLI tool during the HPE Storage Creative Days 2023 hackathon to detect and recover inconsistent storage states, ranking among the top 10 innovations.",
    ],
  },
  {
    company: "Starbucks",
    role: "Summer IT Intern",
    time: "June 2022 — July 2022",
    points: [
      "Contributed to feature development and launch of the Starbucks mobile application.",
      "Performed QA and User Acceptance Testing (UAT) to validate functionality and user workflows.",
      "Improved application stability and user experience through structured defect reporting.",
    ],
  },
]

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {experienceData.map((exp, index) => (
        <div className="card" key={index}>
          <div className="row">
            <div>
              <h3 className="card-title">{exp.company}</h3>
              <p className="muted">{exp.role}</p>
            </div>

            <p className="muted">{exp.time}</p>
          </div>

          <ul className="list">
            {exp.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  )
}
