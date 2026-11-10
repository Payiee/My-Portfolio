import { profile } from '../data/content'
import profilePhoto from '../assets/profile-photo.png'

function Hero({ onContact }) {
  const [first, ...rest] = profile.name.split(' ')

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>
            <span>{first}</span>
            <span>{rest.join(' ')}</span>
          </h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              See my projects
            </a>
            <button type="button" className="btn btn-ghost" onClick={onContact}>
              Contact me
            </button>
          </div>
        </div>
        <figure className="hero-portrait">
          <span className="portrait-circle">
            <img src={profilePhoto} alt={profile.name} />
          </span>
          <figcaption>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
            {profile.location}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Hero
