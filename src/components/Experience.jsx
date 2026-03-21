import Section from "./Section"

const experienceData = [
  {
    company: "Hewlett Packard Enterprise (HPE)",
    role: "Software / Cloud Development Engineer I",
    time: "Aug 2023 — Aug 2025",
    points: [
      "Worked with cross-functional teams and engineered CSI control-plane logic in Golang within HPE’s Container Storage Provider (CSP) to orchestrate dynamic provisioning and multi-cluster replication of persistent volumes in Kubernetes deployments.",
      "Designed and implemented Active Peer Persistence using custom Kubernetes CRDs to track array state changes and enable workload rescheduling during inter-array link failures, reducing downtime risk.",
      "Engineered and released an end-to-end Disable Host Deletion safeguard preventing destructive operations on arrays during active replication, reducing accidental deletion-related escalations to near zero post-release.",
      "Led root cause analysis for 12 production escalations across Fortune 500 enterprise CSI deployments; increased unit test coverage from 0% to ~40% overall and ~80% in high-risk modules, significantly improving CSI 3.0 release stability.",
      "Implemented Quick Restore Snapshot for VMFS datastores using array-level fast-copy primitives, reducing recovery and restore time from hours to near-instant and contributing to a $1.1M Disaster Event Recovery engagement.",
      "Collapsed a 5-step manual provisioning workflow into a single automated operation via dynamic datastore expansion, reducing administrative steps by 80%."
    ],
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Software / Cloud Development Engineering Intern",
    time: "Jan 2023 — July 2023",
    points: [
      "Developed a Site Recovery Manager (SRM) integration plugin to automate failover, failback, and migration workflows across replicated storage arrays, eliminating manual DR sequencing and improving recovery consistency.",
      "Implemented multithreaded execution for DR validation and state reconciliation workflows within the SRM plugin, reducing sequential bottlenecks and improving failover readiness by 60% as measured by call logs.",
      "Extended support across multiple storage platforms and modern storage protocols (FC, iSCSI, NVMEoFC).",
      "Designed a CLI tool during the HPE Storage Creative Days 2023 hackathon to detect and recover inconsistent storage states, ranking among the top 10 innovations.",
    ],
  },
  {
    company: "Starbucks",
    role: "Information Technology Intern",
    time: "June 2022 — August 2022",
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
