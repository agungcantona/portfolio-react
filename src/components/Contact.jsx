import { profile, socials } from '../data/content'
import Section from './Section'
import Reveal from './Reveal'

export default function Contact({ t }) {
  return (
    <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title}>
      <Reveal>
        <div className="contact-card">
          <p className="contact-body">{t.contact.body}</p>

          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            {t.contact.cta}
          </a>

          <div className="contact-links">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-chip"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
