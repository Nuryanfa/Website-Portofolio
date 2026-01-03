# 🎨 Panduan Kustomisasi Portfolio

## 📝 Mengubah Konten

### 1. Informasi Personal

Buka `resources/js/Pages/Home.jsx` dan cari bagian Hero Section:

```jsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-6">
    Hi, I'm{" "}
    <span className="text-gradient">
        Muhamad Nur Yanfa  {/* ← UBAH NAMA DI SINI */}
    </span>
</h1>
<p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 max-w-3xl mx-auto">
    Full Stack Developer & UI/UX Enthusiast  {/* ← UBAH TITLE DI SINI */}
</p>
```

### 2. About Section

```jsx
<p className="text-lg text-gray-700 leading-relaxed">
    Saya adalah seorang Full Stack Developer...  {/* ← UBAH DESKRIPSI */}
</p>
```

### 3. Menambah Projects

Cari array `projects` di Home.jsx:

```jsx
const projects = [
    {
        title: "Nama Project Anda",
        description: "Deskripsi singkat project",
        tags: ["React", "Laravel", "MySQL"],  // Teknologi yang digunakan
        link: "https://github.com/username/project",  // Link ke project
        image: "/images/project1.jpg"  // Optional: path ke gambar
    },
    // Tambahkan project lainnya di sini
];
```

**Tips untuk gambar project:**
- Simpan gambar di folder `public/images/`
- Gunakan screenshot atau mockup project
- Ukuran recommended: 800x600px
- Format: JPG atau PNG

### 4. Menambah/Mengubah Skills

```jsx
const skills = [
    { 
        icon: "⚛️",  // Gunakan emoji atau icon
        name: "React", 
        level: 90  // Persentase keahlian (0-100)
    },
    { 
        icon: "🎨", 
        name: "Tailwind CSS", 
        level: 85 
    },
    // Tambahkan skill lainnya
];
```

**Emoji yang bisa digunakan:**
- ⚛️ React
- 🐘 PHP/Laravel
- 💾 Database
- 🎨 Design/CSS
- 🟢 Node.js
- 📱 Mobile
- 🔥 Firebase
- 🐍 Python
- ☕ Java
- 🎯 TypeScript

### 5. Contact Information

Cari section Contact:

```jsx
<a href="mailto:your.email@example.com">  {/* ← UBAH EMAIL */}
    Email Me
</a>

<a href="https://github.com/yourusername">  {/* ← UBAH USERNAME */}
    GitHub
</a>
```

**Menambah social media lain:**

```jsx
{/* LinkedIn */}
<a
    href="https://linkedin.com/in/username"
    className="flex items-center gap-3 px-8 py-4 bg-blue-700 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
>
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
    LinkedIn
</a>

{/* Instagram */}
<a
    href="https://instagram.com/username"
    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
>
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
    Instagram
</a>
```

## 🎨 Mengubah Warna & Tema

### 1. Warna Gradient Utama

Buka `tailwind.config.js` atau cari di file JSX:

```jsx
// Dari blue-purple ke red-orange
from-blue-600 to-purple-600  →  from-red-600 to-orange-600

// Dari blue-purple ke green-teal
from-blue-600 to-purple-600  →  from-green-600 to-teal-600

// Dari blue-purple ke pink-rose
from-blue-600 to-purple-600  →  from-pink-600 to-rose-600
```

### 2. Background Sections

```jsx
// Hero Section - ubah gradient
className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"

// Contoh alternatif:
className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-teal-50"
className="min-h-screen bg-gradient-to-br from-gray-50 via-pink-50 to-rose-50"
```

### 3. Navbar Logo

Buka `resources/js/Components/Navbar.jsx`:

```jsx
<a href="#home" className="text-2xl font-bold text-gradient hover:scale-105 transition-transform">
    Portfolio  {/* ← UBAH TEKS LOGO */}
</a>

// Atau gunakan gambar:
<a href="#home" className="hover:scale-105 transition-transform">
    <img src="/images/logo.png" alt="Logo" className="h-10" />
</a>
```

## 🖼️ Menambahkan Gambar

### 1. Foto Profile di About Section

Ganti emoji dengan foto Anda:

```jsx
<div className="relative">
    <img 
        src="/images/profile.jpg" 
        alt="Profile" 
        className="w-full h-96 object-cover rounded-2xl shadow-2xl"
    />
</div>
```

### 2. Project Screenshots

```jsx
const projects = [
    {
        title: "Project Name",
        description: "Description",
        tags: ["React", "Laravel"],
        link: "#",
        image: "/images/projects/project1.jpg"  // ← Tambahkan ini
    },
];
```

## 🚀 Fitur Tambahan yang Bisa Ditambahkan

### 1. Dark Mode

Tambahkan toggle dark mode di Navbar:

```jsx
const [darkMode, setDarkMode] = useState(false);

// Di JSX:
<button onClick={() => setDarkMode(!darkMode)}>
    {darkMode ? '☀️' : '🌙'}
</button>
```

### 2. Contact Form

Ganti button dengan form:

```jsx
<form className="max-w-lg mx-auto space-y-4">
    <input 
        type="text" 
        placeholder="Nama" 
        className="w-full px-4 py-3 rounded-lg"
    />
    <input 
        type="email" 
        placeholder="Email" 
        className="w-full px-4 py-3 rounded-lg"
    />
    <textarea 
        placeholder="Pesan" 
        rows="4"
        className="w-full px-4 py-3 rounded-lg"
    />
    <button className="w-full px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold">
        Kirim Pesan
    </button>
</form>
```

### 3. Testimonials Section

```jsx
<section className="py-20 px-4 bg-white">
    <SectionTitle title="Testimonials" subtitle="Apa kata mereka" />
    <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-4">"{item.text}"</p>
                <div className="flex items-center gap-3">
                    <img src={item.avatar} className="w-12 h-12 rounded-full" />
                    <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.role}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
</section>
```

### 4. Blog Section

```jsx
const blogPosts = [
    {
        title: "Judul Blog Post",
        excerpt: "Ringkasan singkat...",
        date: "27 Nov 2024",
        link: "/blog/post-1"
    },
];
```

## 📱 Testing Responsive

Test di berbagai ukuran:
- Mobile: 375px (iPhone)
- Tablet: 768px (iPad)
- Desktop: 1440px

Gunakan Chrome DevTools (F12) → Toggle Device Toolbar

## 🎯 Checklist Sebelum Deploy

- [ ] Ubah semua informasi personal
- [ ] Tambahkan gambar real (profile, projects)
- [ ] Update email & social media links
- [ ] Test di mobile, tablet, desktop
- [ ] Check semua link berfungsi
- [ ] Optimize gambar (compress)
- [ ] Update meta tags untuk SEO
- [ ] Test loading speed

## 💡 Tips Pro

1. **Gunakan gambar berkualitas tinggi** tapi tetap optimize ukurannya
2. **Konsisten dengan warna** - pilih 2-3 warna utama
3. **Jangan terlalu banyak animasi** - bisa bikin lambat
4. **Update portfolio secara berkala** dengan project terbaru
5. **Tambahkan Google Analytics** untuk track visitors

---

Selamat berkreasi! 🎨✨
