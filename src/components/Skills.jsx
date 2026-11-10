import { skillGroups, softSkills } from '../data/content'

function Skills() {
  return (
    <section id="skills" className="section section-tinted">
      <div className="container section-split">
        <h2 className="section-title">Skills</h2>
        <div>
          <dl className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.name}>
                <dt>{group.name}</dt>
                <dd>
                  <ul className="chip-list">
                    {group.items.map((item) => (
                      <li className="chip" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
          <p className="soft-skills">
            <strong>How I work.</strong> {softSkills.join(', ')}.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
