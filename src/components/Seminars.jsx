import { useEffect, useRef, useState } from 'react'
import { seminars } from '../data/content'

function CertificatePlaceholder() {
  return (
    <div className="cert-thumb cert-empty" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3.5" y="4.5" width="17" height="12" rx="1.5" />
        <path d="M7 8.5h10M7 11.5h6" strokeLinecap="round" />
        <circle cx="16" cy="17.5" r="2.5" />
        <path d="m14.6 19.6-.6 2.4 2-1 2 1-.6-2.4" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function CertificateViewer({ seminar, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (seminar && !dialog.open) dialog.showModal()
    if (!seminar && dialog.open) dialog.close()
  }, [seminar])

  return (
    <dialog
      ref={dialogRef}
      className="cert-viewer"
      aria-label={seminar ? `Certificate for ${seminar.title}` : 'Certificate'}
      onClose={onClose}
      onClick={(e) => {
        // Clicking the backdrop (the dialog itself, not its content) closes it.
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {seminar && (
        <figure>
          <img src={seminar.certificate} alt={`Certificate for ${seminar.title}`} />
          <figcaption>
            <span>{seminar.title}</span>
            <span className="cert-viewer-actions">
              <a href={seminar.certificate} target="_blank" rel="noreferrer">
                Open full size
              </a>
              <button type="button" onClick={onClose}>
                Close
              </button>
            </span>
          </figcaption>
        </figure>
      )}
    </dialog>
  )
}

function Seminars() {
  const [active, setActive] = useState(null)

  return (
    <section id="seminars" className="section">
      <div className="container section-split">
        <h2 className="section-title">Seminars &amp; conferences</h2>
        <ol className="seminar-list">
          {seminars.map((seminar) => (
            <li className="seminar" key={seminar.title}>
              {seminar.certificate ? (
                <button
                  type="button"
                  className="cert-thumb"
                  onClick={() => setActive(seminar)}
                  aria-label={`View certificate for ${seminar.title}`}
                >
                  <img src={seminar.certificate} alt="" loading="lazy" />
                  <span className="cert-zoom" aria-hidden="true">
                    View certificate
                  </span>
                </button>
              ) : (
                <CertificatePlaceholder />
              )}
              <div className="seminar-text">
                <time>{seminar.date}</time>
                <h3>{seminar.title}</h3>
                <p>{seminar.location}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <CertificateViewer seminar={active} onClose={() => setActive(null)} />
    </section>
  )
}

export default Seminars
