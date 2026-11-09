import { useEffect, useState } from 'react'
import { profile } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

// Daftar id section, ditulis di luar komponen supaya array-nya
// tidak dibuat ulang setiap render (penting karena dipakai di useEffect).
const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'contact']

// Ikon matahari & bulan (SVG inline, warnanya ikut `color` tombol lewat currentColor)
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Nav({ t, lang, setLang, theme, toggleTheme }) {
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

          {/* Toggle tema: tampilkan ikon tema TUJUAN (bulan saat terang, matahari saat gelap) */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
            title={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

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
