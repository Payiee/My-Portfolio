import { profile } from '../data/content'

function Footer({ onContact }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <h2>Have a project or an internship in mind?</h2>
          <div className="footer-actions">
            <button type="button" className="btn btn-light" onClick={onContact}>
              Contact me
            </button>
            <a className="footer-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>
        <p className="footer-meta">
          © {new Date().getFullYear()} {profile.name}, {profile.location}
        </p>
      </div>
    </footer>
  )
}

export default Footer
