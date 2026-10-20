// `metrics` are real results from the resume, written as "label: value" log lines.
export const projects = [
  {
    name: "surveyops-plus",
    note: "capstone project",
    title: "SurveyOps+ · Multimodal AI Report Automation",
    desc: "A multimodal LLM pipeline and mobile app that turn marine surveyors' field photos and notes into structured inspection reports, with human-in-the-loop review and every finding traced to its source image. Now in testing at Philadelphia Shipyard.",
    tech: ["Python", "FastAPI", "Gemini 3 Pro", "LangGraph", "PostgreSQL", "React Native", "Expo", "Docker"],
    github: "https://github.com/Shrey-Deshmukh/SurveyOpsPlus",
    featured: true,
    metrics: [
      "turnaround: days → minutes",
      "llm-as-judge: 82.5% match vs expert surveys (66/80)",
      "quantitative accuracy: 100%",
    ],
  },
  {
    name: "product-research-agent",
    note: "client · production",
    title: "Sustainable Product Design Research Agent",
    desc: "A 7-node LangGraph research agent shipped to production for Live Good, Inc., orchestrating retrieval, synthesis, and verification. Deployed on GCP Cloud Run and Pub/Sub entirely through Terraform, behind API-key auth and least-privilege IAM.",
    tech: ["Python", "LangGraph", "FastAPI", "Gemini", "GCP", "Terraform", "Docker"],
    github: "https://github.com/Shrey-Deshmukh/sustainable-design-agent",
    featured: true,
    metrics: [
      "citations: 90–93% claim-level coverage · 182 sources",
      "grounding violations: 0",
      "coverage < 80% → retrieval re-triggered (max 3)",
    ],
  },
  {
    name: "txn-engine",
    title: "Transaction Processing Engine",
    desc: "A multithreaded OLTP engine on RocksDB with a hand-written parser and evaluator for a custom transaction language, using Optimistic Concurrency Control and Conservative 2PL.",
    tech: ["C++", "Python", "RocksDB", "Multithreading"],
    github: "https://github.com/Shrey-Deshmukh/transaction-processing-engine",
    metrics: [
      "throughput: ~11,000 tx/s under contention",
      "latency: p99 12ms",
      "deadlocks: 0 across 120 configs",
    ],
  },
  {
    name: "dr-adapter",
    note: "used at HPE",
    title: "Disaster Recovery Adapter",
    desc: "A Go CLI that wraps HPE storage REST APIs into one guided disaster-recovery workflow, with pre-failover validation and auto-sequenced recovery. Later adopted by HPE support, sales engineering, and R&D.",
    tech: ["Go", "gRPC", "REST APIs", "CLI", "Linux"],
    github: "https://github.com/Shrey-Deshmukh/Recovery-Adapter",
    metrics: [
      "RTO: hours → minutes",
      "pre-failover checks: 14+ failure cases",
    ],
  },
  {
    name: "intersection-dqn",
    title: "Autonomous Vehicle Intersection Navigation",
    desc: "A Deep Q-Learning agent trained with curriculum learning to cross an unsignalized intersection behind a rule-based collision shield, validated at 8, 12, and 16 vehicles with transfer learning.",
    tech: ["Python", "PyTorch", "Deep Q-Learning", "Curriculum Learning"],
    github: "https://github.com/Shrey-Deshmukh/autonomous-intersection-navigation-drl",
    metrics: [
      "episodes: 35,000",
      "success: 85% with 16 vehicles",
    ],
  },
]

export const otherProjects = [
  {
    name: "Face Mask Detection",
    metric: "95.77% accuracy on live video",
    tech: ["Python", "TensorFlow/Keras", "MobileNetV2", "OpenCV"],
  },
  {
    name: "Live Web Code Sandbox",
    metric: "Live HTML, CSS & JS preview with no page reloads",
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    github: "https://github.com/Shrey-Deshmukh/live-web-code-sandbox",
  },
  {
    name: "Android Fitness Metrics Calculator",
    metric: "Real-time pacing metrics in a native Android app",
    tech: ["Java", "Android SDK", "Gradle"],
    github: "https://github.com/Shrey-Deshmukh/android-fitness-metrics-calculator",
  },
  {
    name: "Image Effects Lab",
    metric: "10+ real-time pixel-level effects via the Canvas API",
    tech: ["JavaScript", "HTML Canvas", "CSS"],
    github: "https://github.com/Shrey-Deshmukh/image-effects-lab",
  },
  {
    name: "Chroma Key Image Compositor",
    metric: "Real-time green-screen keying with adjustable RGB thresholds",
    tech: ["JavaScript", "HTML Canvas", "CSS"],
    github: "https://github.com/Shrey-Deshmukh/chroma-key-image-compositor",
  },
  {
    name: "GridHop",
    metric: "Real-time terminal game on a randomized 50-slot grid",
    tech: ["Python"],
    github: "https://github.com/Shrey-Deshmukh/Rabbit-Carrot-Hole-Game/tree/master",
  },
]
