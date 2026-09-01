import { profile } from '../data/content'
import { MailIcon, LinkedInIcon, GitHubIcon, WhatsAppIcon } from './icons'

const accounts = [
  { label: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon, external: false },
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedInIcon, external: true },
  { label: 'GitHub', href: profile.github, Icon: GitHubIcon, external: true },
  { label: 'WhatsApp', href: profile.whatsappLink, Icon: WhatsAppIcon, external: true },
]

function ConnectStrip() {
  return (
    <section className="connect-strip">
      <div className="container connect-strip-inner">
        {accounts.map(({ label, href, Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className="connect-item"
            aria-label={label}
          >
            <Icon />
          </a>
        ))}
      </div>
    </section>
  )
}

export default ConnectStrip
