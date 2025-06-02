# 🏴‍☠️ Captain's Portfolio - Pirate Themed Developer Portfolio

Portfolio website dengan tema bajak laut yang dibangun menggunakan Next.js 15, TypeScript, dan Framer Motion untuk animasi 3D yang menakjubkan.

## ✨ Fitur Utama

- **🎬 Animasi 3D & Motion**: Menggunakan Framer Motion untuk animasi yang smooth dan interaktif
- **🏴‍☠️ Tema Bajak Laut**: Design unik dengan elemen-elemen bajak laut yang keren
- **📱 Responsive Design**: Tampil sempurna di semua device
- **⚡ Performance Optimized**: Dibangun dengan Next.js 15 untuk performa maksimal
- **🎨 Modern UI/UX**: Glassmorphism, gradients, dan micro-interactions
- **♿ Accessibility**: Support untuk screen readers dan keyboard navigation
- **🌙 Dark Theme**: Theme gelap yang nyaman untuk mata

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 atau lebih baru
- npm atau yarn atau pnpm

### Installation

1. **Clone atau download project**
```bash
git clone <repository-url>
cd pirate-portfolio
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
# atau
pnpm install
```

3. **Jalankan development server**
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

4. **Buka browser**
   Navigasi ke [http://localhost:3000](http://localhost:3000)

## 📝 Kustomisasi

### 1. Data Personal

Edit file `src/app/page.tsx` pada bagian data berikut:

```typescript
const personalData: PersonalData = {
  name: "Captain [Nama Anda]", // Ganti dengan nama Anda
  title: "Full Stack Developer & Digital Pirate", // Ganti dengan title Anda
  bio: "Deskripsi tentang Anda...", // Ganti dengan bio Anda
  contact: {
    email: "your-email@domain.com", // Email Anda
    phone: "+62 812-3456-7890", // Nomor telepon Anda
    github: "yourgithub", // Username GitHub
    linkedin: "yourlinkedin", // Username LinkedIn
    location: "Kota Anda, Indonesia" // Lokasi Anda
  }
};
```

### 2. Data Pendidikan

```typescript
const educationData: Education[] = [
  {
    id: "1",
    institution: "Nama Universitas", // Nama institusi
    degree: "Gelar Anda", // Gelar yang diperoleh
    period: "2020 - 2024", // Periode pendidikan
    gpa: "3.85", // IPK (opsional)
    description: "Deskripsi singkat" // Deskripsi tambahan
  }
  // Tambahkan data pendidikan lainnya
];
```

### 3. Data Proyek

```typescript
const projectData: Project[] = [
  {
    id: "1",
    name: "Nama Proyek", // Nama proyek
    description: "Deskripsi proyek...", // Deskripsi detail
    technologies: ["Next.js", "TypeScript"], // Teknologi yang digunakan
    period: "Jan 2024 - Mar 2024", // Periode pengerjaan
    status: "completed", // Status: completed, ongoing, planned
    link: "https://github.com/yourproject" // Link proyek (opsional)
  }
  // Tambahkan proyek lainnya
];
```

### 4. Data Organisasi

```typescript
const organizationData: Organization[] = [
  {
    id: "1",
    name: "Nama Organisasi", // Nama organisasi
    position: "Jabatan Anda", // Posisi/jabatan
    period: "2022 - 2023", // Periode keterlibatan
    description: "Deskripsi peran...", // Deskripsi peran
    achievements: [ // Pencapaian (opsional)
      "Pencapaian 1",
      "Pencapaian 2"
    ]
  }
  // Tambahkan organisasi lainnya
];
```

### 5. Menambahkan Foto

1. Tambahkan foto Anda ke folder `public/images/`
2. Update `personalData.image` dengan path foto:
```typescript
const personalData: PersonalData = {
  // ... data lainnya
  image: "/images/your-photo.jpg" // Path ke foto Anda
};
```

## 🎨 Kustomisasi Styling

### Warna Tema

Edit file `src/app/globals.css` untuk mengubah warna tema:

```css
:root {
  --accent-gold: 251, 146, 60; /* Warna emas */
  --accent-yellow: 250, 204, 21; /* Warna kuning */
}
```

### Animasi Custom

Tambahkan animasi custom di `globals.css`:

```css
@keyframes your-animation {
  0% { /* start state */ }
  100% { /* end state */ }
}

.your-class {
  animation: your-animation 2s ease-in-out infinite;
}
```

## 📱 Mobile Optimization

Website sudah dioptimasi untuk mobile dengan:
- Responsive breakpoints
- Touch-friendly interactions
- Optimized font sizes
- Mobile-first approach

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels dan roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Reduced motion support

## 🔧 Build & Deployment

### Build untuk Production

```bash
npm run build
# atau
yarn build
# atau
pnpm build
```

### Start Production Server

```bash
npm start
# atau
yarn start
# atau
pnpm start
```

### Deploy ke Vercel

1. Push code ke GitHub repository
2. Connect repository ke [Vercel](https://vercel.com)
3. Deploy otomatis akan berjalan

### Deploy ke Netlify

1. Build project: `npm run build`
2. Upload folder `out` ke [Netlify](https://netlify.com)

## 📦 Struktur Folder

```
pirate-portfolio/
├── public/
│   ├── images/          # Gambar dan aset
│   └── favicon.ico      # Icon website
├── src/
│   └── app/
│       ├── globals.css  # Style global
│       ├── layout.tsx   # Layout utama
│       └── page.tsx     # Halaman utama
├── package.json         # Dependencies
├── tailwind.config.js   # Konfigurasi Tailwind
├── tsconfig.json        # Konfigurasi TypeScript
└── next.config.js       # Konfigurasi Next.js
```

## 🚀 Performance Tips

1. **Optimasi Gambar**: Gunakan format WebP dan lazy loading
2. **Code Splitting**: Gunakan dynamic imports untuk komponen besar
3. **Caching**: Leverage Next.js caching untuk static assets
4. **Bundle Analysis**: Gunakan `@next/bundle-analyzer`

## 🐛 Troubleshooting

### Error: Module not found

```bash
# Pastikan semua dependencies terinstall
npm install

# Clear cache jika perlu
npm run build -- --no-cache
```

### Animation tidak smooth

1. Periksa device performance
2. Reduce animation complexity
3. Enable `prefers-reduced-motion` support

### Styling tidak muncul

1. Pastikan Tailwind CSS ter-compile dengan benar
2. Check browser dev tools untuk CSS conflicts
3. Verify import order di `globals.css`

## 📄 License

MIT License - Silakan gunakan untuk proyek personal atau komersial.

## 🤝 Contributing

Kontribusi sangat diterima! Silakan buat issue atau pull request.

## 📞 Support

Jika ada pertanyaan atau butuh bantuan, silakanhubungi saya di 
[GitHub](https://github.com/kazuhikoakiraa) atau [email][emailContact]

[emailContact]: moratuaputra@gmail.com