import { profile } from '../data/content'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Educational' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="logo">
          {profile.name.toUpperCase()}
        </a>
        <nav className="nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
