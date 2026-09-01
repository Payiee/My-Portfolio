import { profile } from '../data/content'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Hi There!</p>
          <h1>I'm {profile.name}</h1>
          <span className="badge">{profile.role}</span>
          <p className="hero-tagline">{profile.tagline}</p>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">Photo</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
