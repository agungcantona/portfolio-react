import { skillGroups } from '../data/content'
import Section from './Section'
import Reveal from './Reveal'

export default function Skills({ t, lang }) {
  return (
    <Section
      id="skills"
      eyebrow={t.skills.eyebrow}
      title={t.skills.title}
      note={t.skills.note}
    >
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          // delay dikali index → kartu muncul bergantian, bukan bersamaan
          <Reveal key={group.id} delay={i * 0.08}>
            <div className="skill-card">
              {/* group.title menyimpan dua bahasa: { en: '...', id: '...' }
                  jadi kita ambil sesuai bahasa yang sedang aktif. */}
              <h3>{group.title[lang]}</h3>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
