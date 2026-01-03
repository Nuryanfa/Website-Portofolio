# ⚡ Quick Start Guide

## 🚀 Langkah Cepat Memulai

### 1. Install Dependencies

```bash
# Install PHP dependencies
composer install

# Install Node dependencies
npm install
```

### 2. Setup Environment

```bash
# Copy file environment
copy .env.example .env

# Generate application key
php artisan key:generate
```

### 3. Jalankan Development Server

**Opsi 1: Manual (2 Terminal)**

Terminal 1:
```bash
php artisan serve
```

Terminal 2:
```bash
npm run dev
```

**Opsi 2: Otomatis (1 Terminal)**

```bash
composer dev
```

### 4. Buka Browser

Akses: `http://localhost:8000`

## ✅ Checklist Kustomisasi Cepat

### 5 Menit Pertama:

1. **Ubah Nama & Title**
   - File: `resources/js/Pages/Home.jsx`
   - Cari: `Muhamad Nur Yanfa`
   - Ganti dengan nama Anda

2. **Ubah Email**
   - File: `resources/js/Pages/Home.jsx`
   - Cari: `your.email@example.com`
   - Ganti dengan email Anda

3. **Ubah GitHub Link**
   - File: `resources/js/Pages/Home.jsx`
   - Cari: `https://github.com/yourusername`
   - Ganti dengan username GitHub Anda

### 15 Menit Berikutnya:

4. **Update About Section**
   - Tulis deskripsi tentang diri Anda
   - Tambahkan informasi pendidikan/lokasi

5. **Tambah/Edit Projects**
   - Minimal 3 project
   - Sertakan link yang valid
   - Gunakan tags yang sesuai

6. **Update Skills**
   - Sesuaikan dengan keahlian Anda
   - Adjust level percentage

## 🎨 Kustomisasi Warna (Opsional)

Jika ingin ubah warna dari blue-purple ke warna lain:

1. Buka `resources/js/Pages/Home.jsx`
2. Find & Replace:
   - `from-blue-600 to-purple-600` → `from-[warna1]-600 to-[warna2]-600`

Contoh kombinasi warna:
- Red-Orange: `from-red-600 to-orange-600`
- Green-Teal: `from-green-600 to-teal-600`
- Pink-Rose: `from-pink-600 to-rose-600`
- Indigo-Purple: `from-indigo-600 to-purple-600`

## 📸 Menambahkan Gambar

### Foto Profile:

1. Simpan foto di `public/images/profile.jpg`
2. Edit `Home.jsx` di About Section:

```jsx
<img 
    src="/images/profile.jpg" 
    alt="Profile" 
    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
/>
```

### Screenshot Projects:

1. Simpan di `public/images/projects/`
2. Update array projects:

```jsx
const projects = [
    {
        title: "Project Name",
        description: "Description",
        tags: ["Tech1", "Tech2"],
        link: "https://...",
        image: "/images/projects/project1.jpg"
    },
];
```

## 🐛 Troubleshooting

### Error: "Vite manifest not found"
```bash
npm run build
```

### Error: "Class not found"
```bash
composer dump-autoload
```

### Perubahan tidak muncul?
```bash
# Clear cache
php artisan cache:clear
php artisan config:clear
php artisan view:clear

# Restart dev server
Ctrl+C (stop)
npm run dev (start again)
```

### Tailwind classes tidak bekerja?
```bash
npm run build
```

## 📦 Build untuk Production

```bash
# Build assets
npm run build

# Optimize Laravel
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## 🌐 Deploy

### Deploy ke Vercel/Netlify (Frontend Only):

1. Build project:
```bash
npm run build
```

2. Deploy folder `public/build`

### Deploy Full Stack (Laravel):

Recommended platforms:
- **Heroku** (Free tier available)
- **Railway** (Easy Laravel deployment)
- **DigitalOcean** (More control)
- **Laravel Forge** (Premium, easiest)

## 📚 File Penting

- `resources/js/Pages/Home.jsx` - Halaman utama
- `resources/js/Components/` - Komponen reusable
- `resources/css/app.css` - Custom CSS
- `tailwind.config.js` - Konfigurasi Tailwind
- `routes/web.php` - Routing

## 🎯 Next Steps

1. ✅ Kustomisasi konten personal
2. ✅ Tambahkan gambar real
3. ✅ Update projects dengan link valid
4. ✅ Test responsive di mobile
5. ✅ Deploy ke hosting

## 💡 Tips

- **Commit sering** ke Git
- **Test di berbagai browser** (Chrome, Firefox, Safari)
- **Optimize gambar** sebelum upload (gunakan TinyPNG)
- **Backup database** jika ada data penting
- **Update dependencies** secara berkala

## 📞 Butuh Bantuan?

Cek file dokumentasi lainnya:
- `PORTFOLIO_GUIDE.md` - Panduan lengkap
- `CUSTOMIZATION.md` - Panduan kustomisasi detail

---

**Selamat membuat portfolio! 🎉**

Jangan lupa star ⭐ repository ini jika bermanfaat!
