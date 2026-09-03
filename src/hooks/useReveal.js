import { useEffect, useRef, useState } from 'react'

/**
 * CUSTOM HOOK — useReveal
 *
 * Fungsinya: mendeteksi kapan sebuah elemen masuk ke layar,
 * supaya kita bisa memberi animasi "muncul" saat di-scroll.
 *
 * Cara pakai di komponen:
 *   const [ref, isVisible] = useReveal()
 *   return <div ref={ref} className={isVisible ? 'reveal is-visible' : 'reveal'}>...</div>
 *
 * Konsep React yang dipakai di sini:
 * - useRef  : "menunjuk" ke elemen DOM asli tanpa memicu render ulang
 * - useState: menyimpan status terlihat / belum
 * - useEffect: menjalankan kode setelah komponen tampil (di sini: pasang observer)
 */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Sekali muncul, berhenti mengamati. Animasi tidak diulang.
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px', ...options }
    )

    observer.observe(el)

    // Fungsi cleanup: dijalankan saat komponen dilepas dari layar.
    // Wajib, supaya tidak ada observer yang menggantung di memori.
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}
