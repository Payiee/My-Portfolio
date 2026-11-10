import { education } from '../data/content'

function Education() {
  return (
    <section id="education" className="section section-tinted">
      <div className="container section-split">
        <h2 className="section-title">Education</h2>
        <div className="degree">
          <div>
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
          </div>
          <span className="degree-period">{education.period}</span>
        </div>
      </div>
    </section>
  )
}

export default Education
