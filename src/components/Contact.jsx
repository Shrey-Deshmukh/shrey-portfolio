import Section from "./Section"

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="card">
            <ul className="list">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:sdeshmu2@uci.edu">
                  sdeshmu2@uci.edu
                </a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/shrey-deshmukh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/shrey-deshmukh
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/Shrey-Deshmukh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Shrey-Deshmukh
                </a>
              </li>
            </ul>
      </div>
    </Section>
  )
}
