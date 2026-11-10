import { aboutMe } from '../data/content'

function AboutMe() {
  return (
    <section id="about" className="section">
      <div className="container section-split">
        <h2 className="section-title">About me</h2>
        <p className="lede">{aboutMe}</p>
      </div>
    </section>
  )
}

export default AboutMe
