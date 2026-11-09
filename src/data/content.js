// =============================================================
//  SEMUA TEKS WEBSITE ADA DI FILE INI.
//  Mau ganti isi website? Edit di sini saja, jangan di komponen.
//
//  Struktur: content.en = versi Inggris, content.id = versi Indonesia.
//  Kedua object HARUS punya key yang sama persis, hanya isinya beda bahasa.
// =============================================================

// --- Data yang tidak perlu diterjemahkan (sama di kedua bahasa) ---
export const profile = {
  name: "Agung Cantona",
  fullName: "I Gede Agung Cantona Suryabisana",
  initials: "AC",
  email: "agungcantona.work@gmail.com",
  phone: "+62 812 3966 3155",
  whatsapp: "6281239663155",
  location: "Denpasar, Bali",
  linkedin: "https://www.linkedin.com/in/agung-cantona/",
  github: "https://github.com/agungcantona",
  cvUrl: "/cv.pdf",
};

// .filter(Boolean) membuang entri kosong — jadi GitHub otomatis tidak tampil
// selama profile.github masih kosong.
export const socials = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}` },
  { label: "LinkedIn", href: profile.linkedin },
  profile.github && { label: "GitHub", href: profile.github },
].filter(Boolean);

// --- Daftar project ---
export const projects = [
  {
    id: "bvr",
    name: "Bali Villa Realty",
    url: "https://balivillarealty.com",
    year: "2024 — now",
    role: { en: "Web & CRM Developer", id: "Web & CRM Developer" },
    desc: {
      en: "Property marketplace for the iLot Property group. Built section by section: advanced multi-filter property search, area guides, investor resources and an ROI calculator, plus a custom mobile drawer navigation and listing layouts on top of the Houzez theme.",
      id: "Marketplace properti untuk grup iLot Property. Dibangun section demi section: pencarian properti multi-filter, area guide, investor resources dan ROI calculator, plus navigasi drawer mobile custom dan layout listing di atas tema Houzez.",
    },
    highlights: {
      en: [
        "Maintain technical SEO performance in close collaboration with the SEO specialist",
        "Improved PageSpeed Insights scores through caching, image optimisation and script tuning",
        "Continuously improving the site — new sections, custom mobile drawer navigation and scroll-triggered animations",
      ],
      id: [
        "Menjaga performa SEO teknikal bersama SEO specialist",
        "Meningkatkan skor PageSpeed Insights lewat caching, optimasi gambar, dan penataan script",
        "Terus mengembangkan situs — section baru, navigasi drawer mobile custom, dan animasi scroll",
      ],
    },
    tech: [
      "WordPress",
      "Elementor Pro",
      "Houzez",
      "PHP",
      "JavaScript",
      "Yoast / Rank Math",
      "Cloudflare",
    ],
    inProgress: true,
  },
  {
    id: "ilot",
    name: "iLot Property Bali",
    url: "https://ilotpropertybali.com",
    year: "2024 — now",
    role: { en: "Web & CRM Developer", id: "Web & CRM Developer" },
    desc: {
      en: "Corporate site for a Belgian-owned property group covering development, architecture, construction, legal and villa management. Focused on turning international investor traffic into booked consultations.",
      id: "Website korporat grup properti milik Belgia yang mencakup development, arsitektur, konstruksi, legal, dan villa management. Fokus mengubah trafik investor asing menjadi booking konsultasi.",
    },
    highlights: {
      en: [
        "AI chatbot for WhatsApp and social media with a lead-qualification flow, connected to the CRM",
        "WhatsApp widget with native webhook form, country-code selector and spam protection",
        "Full tracking stack: GA4 + Google Tag Manager + Meta Pixel with conversion events",
      ],
      id: [
        "AI chatbot untuk WhatsApp dan social media dengan alur kualifikasi lead, terhubung ke CRM",
        "Widget WhatsApp dengan form webhook native, pemilih kode negara, dan proteksi spam",
        "Tracking lengkap: GA4 + Google Tag Manager + Meta Pixel beserta conversion event",
      ],
    },
    tech: [
      "WordPress",
      "Elementor Pro",
      "GoHighLevel",
      "AI Automation",
      "GA4",
      "GTM",
    ],
  },
  {
    id: "bna",
    name: "BNA Property",
    url: "https://bnaproperty.com",
    year: "2025",
    role: { en: "Web Developer", id: "Web Developer" },
    desc: {
      en: "Villa sales, rental and property management site. Searchable listings filtered by location, bedrooms, price and ownership type (freehold / leasehold), with area guides for the main Bali hotspots.",
      id: "Website jual villa, rental, dan property management. Listing dengan filter lokasi, jumlah kamar, harga, dan tipe kepemilikan (freehold / leasehold), plus area guide untuk lokasi utama di Bali.",
    },
    highlights: {
      en: [
        "Listing architecture with multi-criteria search and filtering",
        "Multi-channel enquiry routing: form, WhatsApp, phone and email",
      ],
      id: [
        "Arsitektur listing dengan pencarian dan filter multi-kriteria",
        "Routing enquiry multi-channel: form, WhatsApp, telepon, dan email",
      ],
    },
    tech: ["WordPress", "Elementor", "ACF", "SEO"],
  },
  {
    id: "wpp",
    name: "We Provide Property",
    url: "https://weprovideproperty.com",
    year: "2026",
    role: { en: "Web Developer", id: "Web Developer" },
    desc: {
      en: "Property investment platform covering sales, leasehold and rentals across Canggu, Seminyak, Ubud, Uluwatu and Kerobokan, with listings extending to Jakarta, Lombok and Sumbawa.",
      id: "Platform investasi properti untuk penjualan, leasehold, dan sewa di Canggu, Seminyak, Ubud, Uluwatu, dan Kerobokan, dengan listing yang meluas sampai Jakarta, Lombok, dan Sumbawa.",
    },
    highlights: {
      en: [
        "Property search with filters for type, ownership status, location, bedrooms and price range",
        "ROI simulator and property comparison tool for investors",
        "Listing detail pages with photo galleries, full specs and enquiry CTAs",
      ],
      id: [
        "Pencarian properti dengan filter tipe, status kepemilikan, lokasi, jumlah kamar, dan rentang harga",
        "ROI simulator dan fitur perbandingan properti untuk investor",
        "Halaman detail listing dengan galeri foto, spesifikasi lengkap, dan CTA enquiry",
      ],
    },
    tech: ["WordPress", "Elementor", "ACF", "SEO"],
  },
];

// tambah ini jika masih tahap development
// tech: ["In development"],

// --- Skill dikelompokkan per kategori ---
export const skillGroups = [
  {
    id: "dev",
    title: { en: "Web Development", id: "Web Development" },
    items: [
      "PHP",
      "JavaScript",
      "Laravel",
      "Node.js",
      "React",
      "Tailwind CSS",
      "HTML / CSS",
      "Git & GitHub",
    ],
  },
  {
    id: "cms",
    title: { en: "CMS & Hosting", id: "CMS & Hosting" },
    items: [
      "WordPress",
      "Elementor Pro",
      "ACF",
      "Web Hosting",
      "Cloudflare",
      "VS Code",
    ],
  },
  {
    id: "crm",
    title: { en: "CRM & Automation", id: "CRM & Automation" },
    items: [
      "GoHighLevel",
      "HubSpot",
      "AI Chatbot",
      "AI Automation",
      "Lead Nurturing Workflow",
      "ClickUp",
    ],
  },
  {
    id: "marketing",
    title: { en: "SEO & Analytics", id: "SEO & Analytics" },
    items: [
      "Technical & On-page SEO",
      "Yoast / Rank Math",
      "Google Search Console",
      "Google Analytics 4",
      "Google Tag Manager",
      "Meta Pixel",
      "KPI Reporting",
    ],
  },
];

// --- Riwayat kerja (dari CV) ---
export const experience = [
  {
    id: "ilot",
    company: "iLot Property Bali",
    location: "Canggu, Bali",
    period: "Mar 2024 — Present",
    title: { en: "Web & CRM Developer", id: "Web & CRM Developer" },
    points: {
      en: [
        "Design and develop the company websites across the group’s property brands",
        "Manage and maintain all company websites, including performance and technical SEO",
        "Develop, integrate and manage the CRM stack (GoHighLevel, HubSpot)",
        "Build and maintain the AI chatbot for WhatsApp and social media",
        "Work alongside the SEO specialist to keep the sites indexable and ranking",
      ],
      id: [
        "Merancang dan membangun website perusahaan untuk brand-brand properti dalam grup",
        "Mengelola dan merawat seluruh website perusahaan, termasuk performa dan SEO teknikal",
        "Mengembangkan, mengintegrasikan, dan mengelola CRM (GoHighLevel, HubSpot)",
        "Membangun dan merawat AI chatbot untuk WhatsApp dan social media",
        "Berkolaborasi dengan SEO specialist untuk menjaga indexability dan ranking situs",
      ],
    },
  },
  {
    id: "kib",
    company: "PT Karya Inti Bersatu",
    location: "Seminyak, Bali",
    period: "May 2023 — Mar 2024",
    title: {
      en: "Web Developer / Programmer",
      id: "Web Developer / Programmer",
    },
    points: {
      en: [
        "Designed and built new websites for clients from scratch",
        "Maintained a portfolio of live client websites",
        "Added new features and revised existing sites to fit changing client needs",
      ],
      id: [
        "Merancang dan membangun website baru untuk klien dari nol",
        "Merawat sejumlah website klien yang sedang berjalan",
        "Menambah fitur baru dan merevisi website yang sudah ada sesuai kebutuhan klien",
      ],
    },
  },
  {
    id: "hokky",
    company: "IAMBEHOKKY",
    location: "Denpasar, Bali",
    period: "Dec 2021 — Feb 2022",
    title: {
      en: "Front-End WordPress Developer — Internship",
      id: "Front-End WordPress Developer — Magang",
    },
    points: {
      en: [
        "Built client websites with WordPress",
        "Advised clients on UI/UX decisions during the design process",
        "Revised and improved existing websites",
      ],
      id: [
        "Membangun website klien menggunakan WordPress",
        "Memberi masukan UI/UX kepada klien selama proses desain",
        "Merevisi dan memperbaiki website yang sudah berjalan",
      ],
    },
  },
];

// --- Pendidikan (dari CV) ---
export const education = [
  {
    id: "stikom",
    school: "ITB STIKOM Bali",
    period: "2019 — 2023",
    detail: {
      en: "Bachelor of Information Systems — GPA 3.85 / 4.00",
      id: "S1 Sistem Informasi — IPK 3,85 / 4,00",
    },
  },
  {
    id: "bangkit",
    school: "Bangkit Academy",
    period: "2022",
    detail: {
      en: "Cloud Computing path by Google, GoTo & Traveloka — ML API deployment and cloud infrastructure",
      id: "Jalur Cloud Computing oleh Google, GoTo & Traveloka — deployment ML API dan infrastruktur cloud",
    },
  },
  {
    id: "smk",
    school: "SMK TI Bali Global",
    period: "2016 — 2019",
    detail: {
      en: "Computer Network Engineering",
      id: "Teknik Komputer dan Jaringan",
    },
  },
];

// --- Sertifikasi (dari CV) ---
export const certifications = [
  {
    id: "dicoding",
    name: {
      en: "Becoming a Front-End Web Developer Expert",
      id: "Becoming a Front-End Web Developer Expert",
    },
    issuer: "Dicoding",
    year: "2023",
  },
  {
    id: "udemy-seo",
    name: {
      en: "The Ultimate SEO Training + SEO for WordPress",
      id: "The Ultimate SEO Training + SEO for WordPress",
    },
    issuer: "Udemy",
    year: "2024",
  },
];

// --- Semua teks statis per bahasa ---
export const content = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      themeLight: "Switch to light mode",
      themeDark: "Switch to dark mode",
    },
    hero: {
      available: "Open to new opportunities",
      greeting: "Hi, I am",
      role: "Web & CRM Developer · Digital Marketing",
      tagline:
        "I build and maintain property websites in Bali — from the front-end and the CMS to the SEO, tracking, CRM and AI automation that turn visitors into qualified leads.",
      ctaPrimary: "View projects",
      ctaSecondary: "Download CV",
      stats: [
        { value: "3+", label: "Years experience" },
        // { value: "5+", label: "Websites" },
        { value: "3.85", label: "GPA / 4.00" },
      ],
    },
    about: {
      eyebrow: "01 — About",
      title: "A developer who understands marketing",
      body: [
        "I am Agung Cantona, an Information Systems graduate from ITB STIKOM Bali, now working as a Web & CRM Developer for a Belgian-owned property group in Canggu.",
        "I started out building WordPress sites for clients, first as an intern and then at an agency in Seminyak. Today I handle the full digital operation of a property group: building the websites, keeping them fast and indexable, wiring up the tracking, and running the CRM and AI chatbot behind every enquiry.",
        'That mix means I do not stop at "the page looks good". I care whether the form fires the conversion event, whether the canonical tag survives a permalink migration, and whether the lead actually lands in the CRM with the right tag.',
        "Right now I am going deeper into modern front-end — React, component thinking and clean state management — so I can build interfaces from scratch instead of working around a theme.",
      ],
      factsTitle: "Quick facts",
      facts: [
        { k: "Based in", v: "Denpasar, Bali" },
        { k: "Current role", v: "Web & CRM Developer" },
        { k: "Industry", v: "Real Estate / Property" },
        { k: "Languages", v: "Indonesian, English" },
      ],
    },
    skills: {
      eyebrow: "02 — Skills",
      title: "What I work with",
      note: "Tools I use regularly, grouped by what they are for.",
    },
    projects: {
      eyebrow: "03 — Projects",
      title: "Selected work",
      note: "Property websites I built and maintain.",
      visit: "Visit site",
      roleLabel: "Role",
      inProgress: "In development",
    },
    experience: {
      eyebrow: "04 — Experience",
      title: "Where I have worked",
      educationTitle: "Education",
      certificationsTitle: "Certifications",
    },
    contact: {
      eyebrow: "05 — Contact",
      title: "Let's work together",
      body: "Open to roles as a Web & CRM Developer, Digital Marketing Specialist or Marketing Executive — remote or based in Bali. The fastest way to reach me is email or WhatsApp.",
      cta: "Send an email",
    },
    footer: {
      built: "Built with React and Vite.",
      rights: "All rights reserved.",
    },
  },

  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Project",
      experience: "Pengalaman",
      contact: "Kontak",
      themeLight: "Ganti ke mode terang",
      themeDark: "Ganti ke mode gelap",
    },
    hero: {
      available: "Terbuka untuk peluang baru",
      greeting: "Halo, saya",
      role: "Web & CRM Developer · Digital Marketing",
      tagline:
        "Saya membangun dan merawat website properti di Bali — dari sisi front-end dan CMS sampai SEO, tracking, CRM, dan AI automation yang mengubah pengunjung menjadi lead berkualitas.",
      ctaPrimary: "Lihat project",
      ctaSecondary: "Unduh CV",
      stats: [
        { value: "3+", label: "Tahun pengalaman" },
        { value: "4", label: "Website properti" },
        { value: "3,85", label: "IPK / 4,00" },
      ],
    },
    about: {
      eyebrow: "01 — Tentang",
      title: "Developer yang paham marketing",
      body: [
        "Saya Agung Cantona, lulusan Sistem Informasi ITB STIKOM Bali, saat ini bekerja sebagai Web & CRM Developer untuk grup properti milik Belgia di Canggu.",
        "Saya memulai karier dengan membangun website WordPress untuk klien — awalnya sebagai anak magang, lalu di sebuah agency di Seminyak. Sekarang saya menangani seluruh operasional digital sebuah grup properti: membangun websitenya, menjaga performa dan indexability, memasang tracking, serta mengelola CRM dan AI chatbot di balik setiap enquiry.",
        'Kombinasi itu membuat saya tidak berhenti di "halamannya sudah bagus". Saya peduli apakah form-nya benar-benar memicu conversion event, apakah canonical tag selamat setelah migrasi permalink, dan apakah lead-nya benar-benar masuk ke CRM dengan tag yang tepat.',
        "Saat ini saya sedang mendalami front-end modern — React, cara berpikir berbasis komponen, dan state management yang rapi — supaya bisa membangun interface dari nol, bukan sekadar mengakali tema.",
      ],
      factsTitle: "Info singkat",
      facts: [
        { k: "Domisili", v: "Denpasar, Bali" },
        { k: "Posisi saat ini", v: "Web & CRM Developer" },
        { k: "Industri", v: "Real Estate / Properti" },
        { k: "Bahasa", v: "Indonesia, Inggris" },
      ],
    },
    skills: {
      eyebrow: "02 — Keahlian",
      title: "Tools yang saya pakai",
      note: "Tools yang rutin saya gunakan, dikelompokkan berdasarkan fungsinya.",
    },
    projects: {
      eyebrow: "03 — Project",
      title: "Pilihan project",
      note: "Website properti yang saya bangun dan kelola.",
      visit: "Kunjungi situs",
      roleLabel: "Peran",
      inProgress: "Dalam pengembangan",
    },
    experience: {
      eyebrow: "04 — Pengalaman",
      title: "Riwayat pekerjaan",
      educationTitle: "Pendidikan",
      certificationsTitle: "Sertifikasi",
    },
    contact: {
      eyebrow: "05 — Kontak",
      title: "Mari bekerja sama",
      body: "Terbuka untuk posisi Web & CRM Developer, Digital Marketing Specialist, atau Marketing Executive — remote maupun di Bali. Cara tercepat menghubungi saya lewat email atau WhatsApp.",
      cta: "Kirim email",
    },
    footer: {
      built: "Dibuat dengan React dan Vite.",
      rights: "Seluruh hak cipta dilindungi.",
    },
  },
};
