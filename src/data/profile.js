import { projects } from "./projects"

export const profile = {
  name: "Shrey Deshmukh",
  tagline: "Software Engineer · AI and Cloud Researcher",
  status: "Masters in Computer Science @ UC Irvine '26 · Prev-HPE · Open to full-time SWE roles",
  email: "sdeshmu2@uci.edu",
  github: "https://github.com/Shrey-Deshmukh",
  linkedin: "https://www.linkedin.com/in/shrey-deshmukh",
  resume: "/Shrey_Deshmukh_Resume.pdf",
  // Contact section message form (Netlify Forms + reCAPTCHA). Set to true to bring it back;
  // the Netlify form and reCAPTCHA keys stay configured either way.
  contactForm: false,
  careerStart: new Date(2023, 0, 1),
  role: "software-engineer · ai-researcher · cloud-engineer",
  labels: [
    "go", "python", "c++", "kubernetes", "docker", "aws", "gcp",
    "langgraph", "distributed-systems", "storage", "llm-integrations", "cloud-infrastructure", "pytorch",
  ],
  certifications: ["aws-certified-ai-practitioner", "aws-certified-cloud-practitioner"],
  about: [
    "I'm a Master's student in Computer Science at UC Irvine, graduating December 2026, currently working as an AI Research Intern at the ETAD Lab, Calit2, where I build on-device stress detection systems ($300k grant from Asahi Group Holdings). Before that I spent 2.5 years at Hewlett Packard Enterprise building Kubernetes storage, failover, and disaster-recovery software for Fortune 500 clusters.",
    "I like systems that look simple to the people using them and are carefully engineered underneath.",
    "Besides this, I partake in running marathons, observational astronomy, hiking, and playing all kinds of sports.",
  ],
}

export const sections = [
  { id: "about", label: "about", preview: "describe node/shrey" },
  { id: "experience", label: "experience", preview: "ETAD Lab · HPE · Starbucks" },
  { id: "projects", label: "projects", preview: `${projects.length} pods running` },
  { id: "education", label: "education", preview: "MCS UCI · B.Tech Manipal" },
  { id: "leadership", label: "leadership", preview: "captain · VP · mentor" },
  { id: "contact", label: "contact", preview: "ping shrey" },
]
