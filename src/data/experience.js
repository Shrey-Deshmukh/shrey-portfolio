export const experience = [
  {
    company: "StressDX - ETAD Lab, Calit2",
    role: "AI Research Intern · $300k grant from Asahi Group Holdings",
    time: "Jun 2026 — Present",
    stats: [
      { prefix: "$", value: 300, suffix: "k", label: "research grant" },
      { value: 100, suffix: "%", label: "on-device, no cloud offload" },
    ],
    points: [
      "Building on-device inference for StressDX, a chronic stress detection system that classifies Apple Watch and Garmin physiological signals for continuous background monitoring with no cloud offload.",
      "Reduced inference time to milliseconds by implementing Resonator Networks and Neural Vector-Symbolic Architectures in PyTorch and TorchHD, extending hyperdimensional representations.",
      "Training and evaluating models on GPU and TPU while keeping the system interpretable and privacy-preserving by processing physiological signals entirely on-device.",
    ],
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Software Engineer · Hybrid Cloud & OCTO Team",
    time: "Aug 2023 — Aug 2025",
    stats: [
      { value: 14, suffix: "PB", label: "enterprise data provisioned" },
      { value: 12, suffix: "+", label: "escalations closed, 0 reopened" },
      { prefix: "0→", value: 80, suffix: "%", label: "test coverage, owned modules" },
      { prefix: "$", value: 1.1, decimals: 1, suffix: "M", label: "disaster recovery engagement" },
    ],
    points: [
      "Automated provisioning across distributed Kubernetes clusters managing 14PB of enterprise data by building and containerizing Go microservices with Docker, released through Helm on Jenkins CI/CD pipelines.",
      "Wrote the Go controllers and Kubernetes CRDs behind automatic failover (Active Peer Persistence), so workloads reschedule when the link between two arrays drops. Shipped across 6 storage platforms in HPE's open-source CSI Driver v3.0.0.",
      "Closed 12+ customer-critical escalations on Fortune 500 Kubernetes deployments in aerospace, telecom, and manufacturing with zero reopened cases, and fixed 10+ production defects in the CSI driver and CSP.",
      "Designed Disable Host Deletion, a guardrail that blocks destructive operations during active replication, bringing accidental-deletion escalations to near zero after release.",
      "Led C#/.NET feature development for Windows Admin Center 1.1.30 on a 2-person team, shipped to the Microsoft Azure feed with real-time IOPS, throughput, and latency dashboards.",
      "Cut VMware datastore recovery from hours to near-instant with Quick Restore Snapshot for a $1.1M disaster recovery engagement, and collapsed a 5-step vSphere datastore expansion into one automated step.",
      "Led team adoption of AI-assisted development with GitHub Copilot and GoMonkey mocks, raising unit test coverage on owned Go modules from 0% to 80% and cutting test authoring from 3 days to 1.",
      "Co-founded HPE Innovation Connect, taking engineering ideas from hackathon to TechCon. All 4 teams we supported won at TechCon 2025.",
    ],
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Software Engineer Intern · Hybrid Cloud & OCTO Team",
    time: "Jan 2023 — Jul 2023",
    stats: [
      { prefix: "8→", value: 1, label: "runbook steps automated" },
      { prefix: "−", value: 60, suffix: "%", label: "manual recovery checks" },
      { prefix: "Top ", value: 5, label: "of 200 teams, HPE hackathon" },
    ],
    points: [
      "Replaced an 8-step manual disaster recovery runbook with one automated workflow and removed 60% of manual recovery checks, measured against support call logs, by building a multithreaded Python and Go site recovery plugin.",
      "Extended the plugin across 4 array families with iSCSI, Fibre Channel, and NVMe-oF support, and wrote unit tests for VMware SRM Prepare Reverse Replication workflows.",
      "Placed Top 5 of 200 teams at HPE's All India Hackathon 2023 with a guided Go CLI over storage REST APIs, with safety checks across 14+ edge cases.",
    ],
  },
  {
    company: "Starbucks",
    role: "Information Technology Intern",
    time: "Jun 2022 — Aug 2022",
    stats: [
      { value: 150, suffix: "+", label: "bugs logged pre-launch" },
      { value: 500, suffix: "+", label: "menu items configured" },
    ],
    points: [
      "Logged 150+ bugs with reproduction steps across devices, OS versions, and network conditions while running QA and UAT on the Starbucks India mobile app ahead of its national rollout.",
      "Validated the store, menu, cart, and order APIs behind checkout in Postman, and configured 500+ menu items in the kitchen order system.",
      "Added search and filter tags and SVG assets to the app's menu experience.",
    ],
  },
]
