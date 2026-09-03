# Portfolio — React + Vite

Website portfolio satu halaman, dua bahasa (EN/ID), tema dark.
Dibuat dengan **React 18 + Vite**, tanpa framework CSS — semua styling pakai CSS biasa
supaya kamu bisa lihat langsung apa yang terjadi.

---

## 1. Cara menjalankan

Butuh **Node.js versi 18 ke atas** ([download di sini](https://nodejs.org)).

Buka terminal di folder ini, lalu:

```bash
npm install      # install dependency, cukup sekali di awal
npm run dev      # jalankan mode development
```

Buka `http://localhost:5173` di browser. Setiap kali kamu save file,
halaman langsung update sendiri tanpa reload (namanya *hot reload*).

Perintah lain:

```bash
npm run build    # bikin versi production ke folder /dist
npm run preview  # cek hasil build sebelum di-upload
```

---

## 2. Struktur folder

```
portfolio/
├── index.html              ← file HTML satu-satunya. Judul & meta SEO ada di sini
├── package.json            ← daftar dependency & perintah npm
├── vite.config.js          ← konfigurasi build
└── src/
    ├── main.jsx            ← titik masuk: React "menempel" ke <div id="root">
    ├── App.jsx             ← komponen utama, menyimpan state bahasa
    ├── index.css           ← SEMUA styling + variabel warna
    ├── data/
    │   └── content.js      ← ★ SEMUA TEKS & DATA ADA DI SINI ★
    ├── hooks/
    │   ├── useReveal.js        ← animasi muncul saat di-scroll
    │   └── useActiveSection.js ← menandai menu navbar yang aktif
    └── components/
        ├── Nav.jsx         ← navbar + menu mobile + toggle bahasa
        ├── Hero.jsx        ← bagian paling atas
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── Section.jsx     ← kerangka section yang dipakai ulang
        └── Reveal.jsx      ← pembungkus animasi
```

**Aturan praktis:** mau ubah *teks* → edit `src/data/content.js`.
Mau ubah *tampilan* → edit `src/index.css`.
Mau ubah *susunan/logika* → edit file di `src/components/`.

---

## 3. Yang masih perlu kamu lengkapi

Data dari CV (nama, kontak, LinkedIn, riwayat kerja, pendidikan, sertifikasi, skill)
**sudah terisi semua** di `src/data/content.js`. Sisanya tinggal:

1. **File CV** — buat folder `public/`, taruh `cv.pdf` di dalamnya.
   Tombol "Download CV" langsung jalan. Alternatif: ganti `profile.cvUrl`
   dengan link Google Drive.
2. **GitHub** *(opsional)* — isi `profile.github` di `content.js`.
   Selama masih kosong, chip GitHub otomatis tidak ditampilkan.
3. **Foto profil** *(opsional)* — taruh di `public/`, lalu panggil di `Hero.jsx`
   dengan `<img src="/foto.webp" alt="Agung Cantona" />`.

Cek juga bagian `hero.stats` kalau angkanya mau diubah.

---

## 4. Konsep React yang dipakai di project ini

Semua ini sudah ada di dalam kode, lengkap dengan komentar penjelasan.

### a. Komponen
Fungsi JavaScript yang mengembalikan tampilan (JSX). Contoh paling sederhana ada di `Footer.jsx`.
Nama komponen **selalu diawali huruf besar**.

### b. JSX
Terlihat seperti HTML, tapi ini JavaScript. Bedanya dari HTML:
- `class` → `className`
- Isi variabel ditulis dalam kurung kurawal: `{profile.name}`
- Wajib satu elemen pembungkus (boleh `<>...</>`)

### c. Props — mengirim data ke komponen anak
```jsx
<Hero t={t} />                        // App.jsx mengirim
export default function Hero({ t }) { // Hero.jsx menerima
```
Props mengalir **satu arah**: dari atas ke bawah.

### d. State (`useState`) — data yang bisa berubah
Ada di `App.jsx`:
```jsx
const [lang, setLang] = useState('en')
```
`lang` = nilainya sekarang, `setLang` = cara mengubahnya.
Begitu `setLang('id')` dipanggil, React otomatis merender ulang seluruh halaman
dengan teks bahasa Indonesia. Kamu **tidak perlu** menyentuh DOM sama sekali — ini
perbedaan terbesar dibanding jQuery / JavaScript biasa yang biasa kamu pakai di WordPress.

### e. Effect (`useEffect`) — efek samping
Kode yang dijalankan setelah render, misalnya memasang event listener:
```jsx
useEffect(() => {
  window.addEventListener('scroll', onScroll)
  return () => window.removeEventListener('scroll', onScroll)  // cleanup
}, [])
```
Array di akhir (`[]`) menentukan kapan effect dijalankan ulang:
`[]` = sekali saja, `[lang]` = tiap `lang` berubah.
Fungsi `return` di dalamnya = *cleanup*, dijalankan saat komponen dilepas.

### f. Custom hook — logika yang bisa dipakai ulang
`useReveal.js` dan `useActiveSection.js`. Namanya **wajib** diawali `use`.
Ini cara React membagi logika, sama seperti komponen membagi tampilan.

### g. Rendering daftar (`.map()`)
```jsx
{projects.map((project) => <ProjectCard key={project.id} project={project} />)}
```
`key` wajib dan harus unik — itu cara React melacak elemen mana yang berubah.

### h. Rendering kondisional
```jsx
{project.inProgress && <span>Dalam pengembangan</span>}
```
Tampil hanya kalau kondisinya `true`.

---

## 5. Latihan lanjutan (kalau mau nambah jam terbang)

1. **Simpan pilihan bahasa** — pakai `localStorage` di `App.jsx` supaya pilihan
   bahasa tidak balik ke EN saat halaman di-reload.
2. **Tombol dark/light mode** — tambah state `theme`, ganti `data-theme` di `<html>`,
   lalu tambahkan set variabel warna terang di `index.css`.
3. **Ganti prop drilling dengan Context** — `t` dan `lang` sekarang dikirim manual ke tiap
   komponen. Pelajari `createContext` + `useContext` untuk menghilangkan itu.
4. **Form kontak beneran** — pakai [Formspree](https://formspree.io) atau
   webhook GoHighLevel, dengan `useState` untuk menyimpan isi field.
5. **Filter project** — tambah tombol filter (All / Web Dev / Marketing) memakai
   satu state tambahan dan `.filter()`.
6. **Pecah CSS per komponen** — pelajari CSS Modules (`Hero.module.css`).

---

## 6. Cara deploy

### Vercel / Netlify (paling gampang, gratis)
1. Push folder ini ke GitHub
2. Import repo-nya di [vercel.com](https://vercel.com) atau [netlify.com](https://netlify.com)
3. Build command `npm run build`, output directory `dist`
4. Selesai — tiap `git push` langsung auto-deploy

### Hostinger (hosting yang sudah kamu punya)
1. `npm run build`
2. Upload **isi** folder `dist/` ke `public_html/` (atau ke subfolder, misal `public_html/portfolio/`)
3. Karena `base: './'` sudah diset di `vite.config.js`, jalan di subfolder pun aman

---

## 7. Catatan

- Belum ada gambar/foto sama sekali — kalau mau tambah foto profil atau screenshot
  project, taruh di folder `public/` lalu panggil dengan `<img src="/nama-file.webp" />`.
- Semua warna diatur lewat CSS variable di bagian `:root` (`src/index.css`).
  Ganti `--accent` saja sudah cukup untuk mengubah nuansa seluruh situs.
- Font diambil dari Google Fonts lewat `index.html` (Inter + JetBrains Mono).
