import { useEffect, useState } from 'react'

/**
 * CUSTOM HOOK — useActiveSection ("scrollspy")
 *
 * Menerima daftar id section, lalu mengembalikan id section
 * yang sedang berada di layar. Dipakai navbar untuk menandai menu aktif.
 *
 *   const activeId = useActiveSection(['about', 'skills', 'projects'])
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Ambil section yang paling banyak terlihat di layar
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveId(visible.target.id)
      },
      // rootMargin atas -30% supaya section dianggap aktif
      // saat sudah cukup masuk ke tengah layar, bukan baru menyentuh tepi.
      { threshold: [0.15, 0.4, 0.7], rootMargin: '-30% 0px -45% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}
