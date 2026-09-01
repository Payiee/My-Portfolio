import { techSkills, softSkills } from '../data/content'

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <h3 className="skills-subtitle">Technical</h3>
        <ul className="chip-list">
          {techSkills.map((skill) => (
            <li className="chip" key={skill}>
              {skill}
            </li>
          ))}
        </ul>

        <h3 className="skills-subtitle">Soft Skills</h3>
        <ul className="chip-list">
          {softSkills.map((skill) => (
            <li className="chip chip-outline" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
