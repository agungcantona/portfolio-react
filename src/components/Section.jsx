import Reveal from './Reveal'

/**
 * Kerangka yang dipakai ulang oleh semua section (About, Skills, dst).
 * Tujuannya supaya jarak, judul, dan eyebrow konsisten
 * dan tidak perlu ditulis berulang-ulang di tiap komponen.
 */
export default function Section({ id, eyebrow, title, note, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          {/* Tanda && artinya: tampilkan hanya kalau `note` ada isinya */}
          {note && <p className="section-note">{note}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
