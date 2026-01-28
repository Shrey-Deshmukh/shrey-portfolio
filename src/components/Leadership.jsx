import Section from "./Section"

const leadershipData = [
  {
    title: "Athletics & Cross Country Team | Captain",
    org: "University Level",
    //time: "2021 — 2023",
    points: [
      //"Represented the university at Inter-University Cross Country Nationals Championship 2023",
      "Led and mentored 30+ team members, overseeing training programs while balancing academic commitments.",
      "Planned and executed logistics for the university, coordinating across departments and vendors.",
    ],
  },
  {
    title: "Mentor (Physics & Computer Science)",
    org: "Research Society Manipal",
    //time: "2021 — 2022",
    points: [
      "Authored review papers on Computing algorithms and foundational Quantum Mechanics topics.",
      "Guided weekly discussions and evaluations to improve research quality and conceptual clarity.",
    ],
  },
  {
    title: "Vice President",
    org: "Astronomy Club Manipal",
    //time: "2021 — 2022",
    points: [
      "Mentored 50+ students on technical projects including radio telescopes, data science models, and tracking systems.",
      //"Organized offline events and webinars featuring leading professionals in astronomy and science.",
      "Managed club operations, documentation, and coordination of skywatches and outreach activities"
    ],
  },
//   {
//     title: "Volunteer Coordinator",
//     org: "Nahar Medical Center Vaccination Camps",
//     time: "2021 — 2022",
//     points: [
//       "Coordinated volunteers and managed on-ground logistics for large-scale vaccination drives.",
//       "Ensured smooth operations under time-sensitive and high-pressure conditions.",
//     ],
//   },
]

export default function Leadership() {
  return (
    <Section id="leadership" title="Leadership & Activities">
      {leadershipData.map((item, index) => (
        <div className="card" key={index}>
          <div className="row">
            <div>
              <h3 className="card-title">{item.title}</h3>
              <p className="muted">{item.org}</p>
            </div>

            <p className="muted">{item.time}</p>
          </div>

          <ul className="list">
            {item.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  )
}
