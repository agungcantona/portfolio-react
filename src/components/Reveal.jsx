import { useReveal } from '../hooks/useReveal'

/**
 * Komponen pembungkus untuk animasi "muncul saat di-scroll".
 *
 * Contoh: <Reveal><h2>Halo</h2></Reveal>
 *
 * `children` adalah prop bawaan React: apa pun yang ditulis
 * di antara <Reveal> ... </Reveal> masuk ke variabel ini.
 * `delay` (dalam detik) untuk membuat efek muncul bergantian.
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, isVisible] = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
