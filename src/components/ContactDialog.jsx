import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/content'

// FormSubmit.co forwards the form (including attachments) to the email below.
// Files must total 10 MB or less.
const MAX_BYTES = 10 * 1024 * 1024

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function ContactDialog({ open, onClose }) {
  const dialogRef = useRef(null)
  const fileRef = useRef(null)
  const [title, setTitle] = useState('')
  const [files, setFiles] = useState([])
  const [fileError, setFileError] = useState('')

  useEffect(() => {
    const dialog = dialogRef.current
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const handleFiles = (e) => {
    const picked = Array.from(e.target.files)
    const total = picked.reduce((sum, f) => sum + f.size, 0)
    if (total > MAX_BYTES) {
      setFileError(`These files add up to ${formatSize(total)}. The limit is 10 MB, so remove some or pick smaller ones.`)
    } else {
      setFileError('')
    }
    setFiles(picked)
  }

  const clearFiles = () => {
    fileRef.current.value = ''
    setFiles([])
    setFileError('')
  }

  const handleSubmit = (e) => {
    if (fileError) e.preventDefault()
  }

  // After sending, FormSubmit sends the visitor back here with ?sent=1.
  const returnUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}?sent=1`
      : ''

  return (
    <dialog
      ref={dialogRef}
      className="contact-dialog"
      aria-labelledby="contact-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <form
        className="contact-form"
        action={`https://formsubmit.co/${profile.contactFormEmail}`}
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="contact-head">
          <h2 id="contact-title">Contact me</h2>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <p className="contact-intro">
          Send me a message and attach any files that help explain it. It goes straight to my inbox.
        </p>

        {/* FormSubmit settings */}
        <input type="hidden" name="_subject" value={`Portfolio message: ${title || 'New message'}`} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value={returnUrl} />
        <input type="text" name="_honey" className="visually-hidden" tabIndex={-1} autoComplete="off" />

        <label className="field">
          <span>Your email</span>
          <input type="email" name="email" required autoComplete="email" placeholder="you@example.com" />
          <small>So I can reply to you.</small>
        </label>

        <label className="field">
          <span>Title</span>
          <input
            type="text"
            name="title"
            required
            maxLength={120}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Internship opportunity"
          />
        </label>

        <label className="field">
          <span>Description</span>
          <textarea name="description" required rows={5} placeholder="What would you like to talk about?" />
        </label>

        <div className="field">
          <span id="file-label">Attachments (optional)</span>
          <label className="file-drop">
            <input
              ref={fileRef}
              type="file"
              name="attachment"
              multiple
              onChange={handleFiles}
              aria-labelledby="file-label"
              aria-describedby="file-hint"
            />
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.5 12.6 21a5.5 5.5 0 0 1-7.8-7.8l8.5-8.5a3.7 3.7 0 0 1 5.2 5.2l-8.5 8.5a1.8 1.8 0 0 1-2.6-2.6l7.9-7.9" />
            </svg>
            <span>{files.length ? 'Choose different files' : 'Choose files'}</span>
          </label>
          {files.length > 0 && (
            <ul className="file-list">
              {files.map((f) => (
                <li key={f.name + f.size}>
                  <span>{f.name}</span>
                  <span>{formatSize(f.size)}</span>
                </li>
              ))}
              <li>
                <button type="button" className="text-button" onClick={clearFiles}>
                  Remove files
                </button>
              </li>
            </ul>
          )}
          {fileError ? (
            <small className="field-error" role="alert">{fileError}</small>
          ) : (
            <small id="file-hint">Up to 10 MB in total.</small>
          )}
        </div>

        <div className="contact-actions">
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={Boolean(fileError)}>
            Send message
          </button>
        </div>
      </form>
    </dialog>
  )
}

export default ContactDialog
