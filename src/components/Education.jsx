import { education, seminars } from '../data/content'

function Education() {
  return (
    <section id="education" className="education">
      <div className="container education-grid">
        <div>
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <h3>{education.degree}</h3>
            <p className="education-school">{education.school}</p>
            <p className="education-period">{education.period}</p>
          </div>
        </div>

        <div>
          <h2 className="section-title">Seminars &amp; Conferences</h2>
          <ul className="seminar-list">
            {seminars.map((seminar) => (
              <li className="seminar-item" key={seminar.title}>
                <h3>{seminar.title}</h3>
                <p>
                  {seminar.date} · {seminar.location}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Education
