import Section from './Section'
import Reveal from './Reveal'

export default function About({ t }) {
  return (
    <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title}>
      <div className="about-grid">
        <Reveal className="about-body">
          {/* Paragraf dibuat dari array teks di content.js.
              Karena isinya statis, index aman dipakai sebagai key. */}
          {t.about.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="facts-card">
            <p className="facts-title">{t.about.factsTitle}</p>
            {t.about.facts.map((fact) => (
              <div key={fact.k} className="fact-row">
                <span className="fact-key">{fact.k}</span>
                <span className="fact-value">{fact.v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
