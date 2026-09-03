import { projects } from '../data/content'
import Section from './Section'
import Reveal from './Reveal'

/**
 * Satu kartu project.
 * Dipisah jadi komponen sendiri supaya komponen Projects tetap mudah dibaca.
 */
function ProjectCard({ project, t, lang }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-head">
        <h3 className="project-name">
          {project.name}
          {/* Badge hanya tampil kalau project.inProgress bernilai true */}
          {project.inProgress && (
            <span className="pill-progress">{t.projects.inProgress}</span>
          )}
        </h3>
        <span className="project-year">{project.year}</span>
      </div>

      <p className="project-role">
        {t.projects.roleLabel}: {project.role[lang]}
      </p>

      <p className="project-desc">{project.desc[lang]}</p>

      <ul className="project-highlights">
        {project.highlights[lang].map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <div className="project-footer">
        <ul className="tag-list">
          {project.tech.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
        <span className="project-link">{t.projects.visit} ↗</span>
      </div>
    </a>
  )
}

export default function Projects({ t, lang }) {
  return (
    <Section
      id="projects"
      eyebrow={t.projects.eyebrow}
      title={t.projects.title}
      note={t.projects.note}
    >
      <div className="project-list">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.06}>
            {/* Data dikirim ke komponen anak lewat props */}
            <ProjectCard project={project} t={t} lang={lang} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
