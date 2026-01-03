# 🚀 Portfolio Website - Panduan Penggunaan

## ✨ Fitur-Fitur Baru

### 1. **Navbar Modern**
- Fixed navbar dengan efek blur saat scroll
- Responsive dengan hamburger menu untuk mobile
- Smooth scroll ke setiap section
- Animasi hover yang smooth

### 2. **Hero Section**
- Animasi fade-in yang elegant
- Floating emoji animation
- Call-to-action buttons dengan gradient
- Fully responsive

### 3. **About Section**
- Layout 2 kolom yang clean
- Informasi personal yang menarik
- Icon-icon yang informatif

### 4. **Skills Section**
- Skill cards dengan progress bar
- Hover effects yang interaktif
- Animasi smooth pada hover

### 5. **Projects Section**
- Project cards dengan hover effects
- Tag system untuk teknologi
- Link ke project (bisa disesuaikan)
- Gradient background pada image placeholder

### 6. **Contact Section**
- Background gradient yang eye-catching
- Social media links
- Email button

### 7. **Footer**
- Simple dan clean
- Copyright information

## 🎨 Customisasi

### Mengubah Informasi Personal

Edit file `resources/js/Pages/Home.jsx`:

```jsx
// Ubah nama
<span className="text-gradient">Nama Anda</span>

// Ubah deskripsi
<p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 max-w-3xl mx-auto">
    Deskripsi Anda
</p>
```

### Menambah/Mengubah Projects

```jsx
const projects = [
    {
        title: "Nama Project",
        description: "Deskripsi project Anda",
        tags: ["Tech1", "Tech2", "Tech3"],
        link: "https://link-project.com",
        image: "/path/to/image.jpg" // optional
    },
    // Tambahkan project lainnya...
];
```

### Menambah/Mengubah Skills

```jsx
const skills = [
    { 
        icon: "⚛️", // Emoji atau icon
        name: "Nama Skill", 
        level: 90 // 0-100
    },
    // Tambahkan skill lainnya...
];
```

### Mengubah Warna Tema

Edit file `tailwind.config.js` untuk mengubah warna gradient:

```js
// Contoh: ubah dari blue-purple ke red-orange
from-blue-600 to-purple-600  →  from-red-600 to-orange-600
```

### Mengubah Email & Social Media

Edit section Contact di `Home.jsx`:

```jsx
<a href="mailto:email-anda@example.com">
    Email Me
</a>

<a href="https://github.com/username-anda">
    GitHub
</a>
```

## 🚀 Cara Menjalankan

1. Install dependencies:
```bash
npm install
composer install
```

2. Setup environment:
```bash
cp .env.example .env
php artisan key:generate
```

3. Jalankan development server:
```bash
npm run dev
php artisan serve
```

4. Buka browser: `http://localhost:8000`

## 📱 Responsive Design

Website ini sudah fully responsive untuk:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🎯 Tips Pengembangan Lebih Lanjut

1. **Tambahkan Gambar Real**
   - Ganti emoji dengan foto Anda di About section
   - Tambahkan screenshot project di Projects section

2. **Integrasikan dengan Backend**
   - Buat API untuk fetch projects dari database
   - Tambahkan contact form yang functional

3. **Tambahkan Animasi Lebih**
   - Gunakan library seperti Framer Motion
   - Tambahkan scroll animations dengan Intersection Observer

4. **SEO Optimization**
   - Tambahkan meta tags di `app.blade.php`
   - Gunakan semantic HTML

5. **Performance**
   - Optimize images dengan lazy loading
   - Minify CSS & JS untuk production

## 🐛 Troubleshooting

### Animasi tidak berjalan?
- Pastikan Tailwind config sudah benar
- Clear cache: `npm run build`

### Navbar tidak fixed?
- Check z-index di CSS
- Pastikan tidak ada conflict dengan CSS lain

### Mobile menu tidak muncul?
- Check JavaScript console untuk error
- Pastikan @headlessui/react terinstall

## 📞 Support

Jika ada pertanyaan atau butuh bantuan, silakan hubungi saya!

---

**Happy Coding! 🎉**
