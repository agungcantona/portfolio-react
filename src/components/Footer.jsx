import { profile } from '../data/content'

export default function Footer({ t }) {
  // new Date().getFullYear() → tahun otomatis update sendiri
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {year} {profile.fullName}. {t.footer.rights}
        </span>
        <span>{t.footer.built}</span>
      </div>
    </footer>
  )
}
