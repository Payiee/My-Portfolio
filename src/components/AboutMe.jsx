import { aboutMe } from '../data/content'

function AboutMe() {
  return (
    <section id="about" className="about-me">
      <div className="container about-me-inner">
        <h2 className="section-title">About Me</h2>
        <p>{aboutMe}</p>
      </div>
    </section>
  )
}

export default AboutMe
