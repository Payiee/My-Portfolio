import { useEffect, useRef, useState } from 'react'

// Shows a project's app screenshots as a row of phone frames (up to 4).
// If there are more, the last frame shows "+N more". Clicking any frame
// opens a large viewer with previous/next controls for the full set.
const MAX_VISIBLE = 4
function ScreenshotGallery({ name, images }) {
  const dialogRef = useRef(null)
  const [index, setIndex] = useState(null)
  const isOpen = index !== null
  const visible = images.slice(0, MAX_VISIBLE)
  const hidden = images.length - visible.length

  useEffect(() => {
    const dialog = dialogRef.current
    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  const close = () => setIndex(null)
  const step = (delta) => setIndex((i) => (i + delta + images.length) % images.length)

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') step(1)
    if (e.key === 'ArrowLeft') step(-1)
  }

  return (
    <>
      <div className="shots">
        {visible.map((src, i) => {
          const isLast = i === visible.length - 1
          const showMore = isLast && hidden > 0
          return (
            <button
              type="button"
              className="shot"
              key={src}
              onClick={() => setIndex(i)}
              aria-label={
                showMore
                  ? `View all ${images.length} ${name} screenshots`
                  : `View ${name} screenshot ${i + 1} of ${images.length}`
              }
            >
              <img src={src} alt="" loading="lazy" />
              {showMore && (
                <span className="shot-more" aria-hidden="true">
                  +{hidden} more
                </span>
              )}
            </button>
          )
        })}
      </div>

      <dialog
        ref={dialogRef}
        className="shot-viewer"
        aria-label={`${name} screenshots`}
        onClose={close}
        onKeyDown={handleKeyDown}
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
      >
        {isOpen && (
          <div className="shot-viewer-inner">
            <img src={images[index]} alt={`${name} screenshot ${index + 1} of ${images.length}`} />
            <div className="shot-viewer-bar">
              {images.length > 1 && (
                <button type="button" className="icon-button" onClick={() => step(-1)} aria-label="Previous screenshot">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
              )}
              <span className="shot-count">
                {index + 1} / {images.length}
              </span>
              {images.length > 1 && (
                <button type="button" className="icon-button" onClick={() => step(1)} aria-label="Next screenshot">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              )}
              <button type="button" className="btn btn-primary shot-close" onClick={close}>
                Close
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}

export default ScreenshotGallery
