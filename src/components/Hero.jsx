import { profile } from '../data/content'
import Reveal from './Reveal'

export default function Hero({ t }) {
  return (
    <section id="top" className="hero">
      <div className="container">
        <Reveal>
          <span className="badge">
            <span className="badge-dot" />
            {t.hero.available}
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="hero-greeting">{t.hero.greeting}</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">{t.hero.role}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="hero-tagline">{t.hero.tagline}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              {t.hero.ctaPrimary}
            </a>
            <a href={profile.cvUrl} className="btn btn-ghost" download>
              {t.hero.ctaSecondary}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="hero-stats">
            {t.hero.stats.map((stat) => (
              <div key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
