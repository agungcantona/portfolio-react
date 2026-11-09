import { useEffect, useState } from 'react'
import { content } from './data/content'

import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // ---- SATU-SATUNYA STATE UTAMA APLIKASI INI ----
  // `lang` menyimpan bahasa aktif: 'en' atau 'id'.
  // Setiap kali setLang dipanggil, React merender ulang seluruh halaman
  // dengan teks bahasa yang baru. Inilah inti cara kerja React.
  const [lang, setLang] = useState('en')

  // `t` = teks untuk bahasa aktif (t singkatan dari "translations").
  // Dikirim ke setiap komponen lewat props.
  const t = content[lang]

  // Sinkronkan atribut lang di tag <html> — penting untuk SEO & screen reader.
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang]) // [lang] = jalankan ulang hanya saat nilai lang berubah

  // ---- TEMA: 'dark' atau 'light' ----
  // Nilai awal dibaca dari <html data-theme>, yang sudah dipasang oleh
  // script kecil di index.html (pilihan tersimpan, atau setting OS pengunjung).
  // Fungsi di dalam useState hanya dijalankan sekali saat render pertama.
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'dark'
  )

  // Setiap tema berubah: pasang ke <html> (CSS membaca atribut ini)
  // dan simpan ke localStorage supaya diingat saat halaman dibuka lagi.
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // localStorage bisa diblokir (mode private) — tema tetap jalan, hanya tidak diingat
    }
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Nav
        t={t}
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} lang={lang} />
        <Projects t={t} lang={lang} />
        <Experience t={t} lang={lang} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </>
  )
}
