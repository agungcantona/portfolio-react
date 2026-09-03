import { useEffect, useState } from 'react'
import { profile } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

// Daftar id section, ditulis di luar komponen supaya array-nya
// tidak dibuat ulang setiap render (penting karena dipakai di useEffect).
const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'contact']

export default function Nav({ t, lang, setLang }) {
  // State: menu mobile terbuka atau tidak
  const [isOpen, setIsOpen] = useState(false)
  // State: halaman sudah di-scroll atau belum (untuk garis bawah navbar)
  const [isScrolled, setIsScrolled] = useState(false)

  const activeId = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    // cleanup: lepas listener saat komponen dilepas
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          {profile.initials}
        </a>

        {/* .map() mengubah array data menjadi array elemen JSX.
            `key` wajib ada supaya React tahu elemen mana yang berubah. */}
        <nav className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${activeId === id ? 'is-active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          {/* Toggle bahasa: mengubah state `lang` yang dimiliki App */}
          <div className="lang-toggle">
            {['en', 'id'].map((code) => (
              <button
                key={code}
                type="button"
                className={`lang-btn ${lang === code ? 'is-active' : ''}`}
                onClick={() => setLang(code)}
                aria-label={`Switch language to ${code.toUpperCase()}`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className={`nav-burger ${isOpen ? 'is-open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
