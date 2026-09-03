import { experience, education, certifications } from '../data/content'
import Section from './Section'
import Reveal from './Reveal'

export default function Experience({ t, lang }) {
  return (
    <Section id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title}>
      {/* --- Timeline pekerjaan --- */}
      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.id} delay={i * 0.08}>
            <div className="timeline-item">
              <p className="timeline-period">
                {job.period} · {job.location}
              </p>
              <h3 className="timeline-title">{job.title[lang]}</h3>
              <p className="timeline-company">{job.company}</p>
              <ul className="timeline-points">
                {job.points[lang].map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* --- Pendidikan & sertifikasi, dua kolom --- */}
      <div className="edu-grid">
        <Reveal>
          <div className="edu-card">
            <p className="facts-title">{t.experience.educationTitle}</p>
            {education.map((item) => (
              <div key={item.id} className="edu-item">
                <div className="edu-head">
                  <strong>{item.school}</strong>
                  <span className="edu-year">{item.period}</span>
                </div>
                <p className="edu-detail">{item.detail[lang]}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="edu-card">
            <p className="facts-title">{t.experience.certificationsTitle}</p>
            {certifications.map((item) => (
              <div key={item.id} className="edu-item">
                <div className="edu-head">
                  <strong>{item.name[lang]}</strong>
                  <span className="edu-year">{item.year}</span>
                </div>
                <p className="edu-detail">{item.issuer}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
