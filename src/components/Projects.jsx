import Section from "./Section"

const projectsData = [
  {
    name: "LLM-Assisted Insurance & Survey Automation",
    desc: "Designing a mobile application that uses multimodal LLMs to analyze field images and generate preliminary insurance and survey reports, with optional AI usage and human verification for compliance.",
    //tech: ["Dart", "Flutter", "SQLite", "Google Gemini Multimodal LLM", "CI/CD"],
    //github: "",
    //live: "",
  },
  {
    name: "Chroma Key Image Compositor",
    desc: "Implemented a green screen chroma key algorithm that processes image pixel data to detect and remove a green background, replacing it with transparency or an alternate background using color thresholding logic.", 
    //Canvas API to perform chroma key background removal.",
    //tech: ["HTML5", "CSS3", "Javascript (ES6+), "Canvas API"],
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
