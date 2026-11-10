import { profile } from '../data/content'
import { MailIcon, LinkedInIcon, GitHubIcon, WhatsAppIcon } from './icons'

const accounts = [
  { label: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon, external: false },
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedInIcon, external: true },
  { label: 'GitHub', href: profile.github.trim(), Icon: GitHubIcon, external: true },
  { label: 'WhatsApp', href: profile.whatsappLink, Icon: WhatsAppIcon, external: true },
]

function ConnectStrip() {
  return (
    <div className="connect-strip">
      <div className="container connect-strip-inner">
        {accounts.map(({ label, href, Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className="connect-item"
          >
            <Icon width="18" height="18" aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ConnectStrip
