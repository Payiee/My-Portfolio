import { useState } from 'react'
import { profile } from '../data/content'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#seminars', label: 'Seminars' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="logo" onClick={close}>
          {profile.name}
        </a>
        <button
          type="button"
          className={`nav-toggle${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav${menuOpen ? ' is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
