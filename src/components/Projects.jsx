import Section from "./Section"

const projectsData = [
  {
    name: "LLM-Assisted Insurance & Survey Automation",
    desc: "Designed an AI-assisted inspection workflow system to automate marine container inspection reporting using multimodal LLMs with structured outputs and human-in-the-loop validation.",
    tech: ["Python", "Flutter", "SQLite", "Google Gemini API Integration", "CI/CD"],
    github: "https://github.com/Shrey-Deshmukh/survey_ops_plus_poc",
    //live: "",
  },
  {
    name: "Recovery Adapter",
    desc: "Built a Golang-based CLI integrating with storage REST APIs to identify and remediate inconsistent storage states post-failover, eliminating manual multi-step replication operations.",
    tech: ["Golang", "CLI", "REST API", "JSON"],
    github: "",
    //live: "",
  },
  {
    name: "Android Fitness Metrics Calculator",
    desc: "Android application implementing speed and pace computation for fitness metric interpretation.",
    tech: ["Java", "Android SDK", "Gradle"],
    github: "https://github.com/Shrey-Deshmukh/android-fitness-metrics-calculator",
    //live: "",
  },
  {
    name: "Chroma Key Image Compositor",
    desc: "Implemented a green screen chroma key algorithm that processes image pixel data to detect and remove a green background, replacing it with transparency or an alternate background using color thresholding logic.", 
    //Canvas API to perform chroma key background removal.",
    tech: ["HTML5", "CSS3", "Javascript (ES6+)"],
    github: "https://github.com/Shrey-Deshmukh/chroma-key-image-compositor",
    //live: "",
  },
  {
    name: "Image Effects Lab",
    desc: "A browser-based image effects lab that applies visual transformations to images using pixel-level manipulation.",
    //tech: ["HTML5", "CSS3", "Javascript (ES6+)"],
    github: "https://github.com/Shrey-Deshmukh/image-effects-lab",
    //live: "",
  },
]

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      {projectsData.map((p, index) => (
        <div className="card" key={index}>
          <h3 className="card-title">{p.name}</h3>
          <p className="muted">{p.desc}</p>

          {/* <div className="chips">
            {p.tech.map((t, i) => (
              <span className="chip" key={i}>
                {t}
              </span>
            ))}
          </div> */}

          <div className="links">
            <a href={p.github} target="_blank" rel="noreferrer">
              GitHub Link
            </a>

            {/* {p.live ? (
              <a href={p.live} target="_blank" rel="noreferrer">
                Live →
              </a>
             ) : (
               <span className="muted">Live: Coming Soon</span>
             )
            } */}
          </div>
        </div>
      ))}
    </Section>
  )
}
