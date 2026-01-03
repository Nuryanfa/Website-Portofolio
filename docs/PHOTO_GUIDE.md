# 📸 Photo Upload Guide

## 🖼️ Cara Mengganti Foto Profile

### 1. Siapkan Foto Anda
- **Format**: JPG, PNG, atau WebP
- **Ukuran**: Minimal 400x400px (square/persegi lebih baik)
- **File size**: Maksimal 2MB untuk performa optimal
- **Quality**: High resolution untuk hasil terbaik

### 2. Upload Foto Profile
1. **Simpan foto** di folder: `public/images/profile.jpg`
2. **Edit file** `resources/js/Pages/Home.jsx`
3. **Cari section About** (sekitar line 180-200)
4. **Uncomment** bagian img tag:
   ```jsx
   {/* Uncomment ini untuk pakai foto real */}
   <img 
       src="/images/profile.jpg" 
       alt="Muhamad Nur Yanfa"
       className="w-full h-full object-cover"
   />
   ```
5. **Comment/hapus** bagian emoji:
   ```jsx
   {/* Comment/hapus ini jika sudah pakai foto real */}
   {/*
   <div className="w-full h-full flex items-center justify-center text-white text-9xl">
       🚀
   </div>
   */}
   ```

### 3. Hasil
- Foto Anda akan muncul di section "About"
- Ukuran: 384px x 384px (responsive)
- Border radius: rounded-2xl
- Shadow: shadow-2xl
- Hover effect: tidak ada (untuk foto profile)

## 🚀 Cara Mengganti Foto Projects

### 1. Siapkan Screenshot Projects
- **Format**: JPG, PNG, atau WebP
- **Ukuran**: 800x600px atau 16:9 ratio
- **File size**: Maksimal 1MB per foto
- **Content**: Screenshot homepage/dashboard project

### 2. Upload Foto Projects
1. **Simpan foto** di folder: `public/images/projects/`
   - Contoh: `public/images/projects/ecommerce.jpg`
   - Contoh: `public/images/projects/taskmanager.png`

2. **Update database** via Admin Panel atau Tinker:
   ```bash
   php artisan tinker
   
   # Update project dengan ID 1
   >>> $project = App\Models\Project::find(1);
   >>> $project->image = '/images/projects/ecommerce.jpg';
   >>> $project->save();
   
   # Update project dengan ID 2
   >>> $project = App\Models\Project::find(2);
   >>> $project->image = '/images/projects/taskmanager.png';
   >>> $project->save();
   ```

3. **Atau update via Seeder** (edit `ProjectSeeder.php`):
   ```php
   [
       'title' => 'E-Commerce Platform',
       'description' => '...',
       'image' => '/images/projects/ecommerce.jpg', // Tambah ini
       'tags' => ['Laravel', 'React', 'Tailwind'],
       // ...
   ],
   ```

### 3. Hasil
- Foto akan muncul di project cards
- Ukuran: 100% width x 192px height
- Hover effect: scale 110%
- Fallback: Emoji 🚀 jika foto tidak ditemukan

## 📁 Struktur Folder Images

```
public/
├── images/
│   ├── profile.jpg          # Foto profile Anda
│   └── projects/            # Folder untuk foto projects
│       ├── ecommerce.jpg
│       ├── taskmanager.png
│       ├── portfolio.jpg
│       ├── blog.png
│       ├── weather.jpg
│       └── chat.png
```

## 🔧 Tips Optimasi Foto

### 1. Compress Images
Gunakan tools online untuk compress:
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **ImageOptim** (Mac)
- **RIOT** (Windows)

### 2. Responsive Images (Advanced)
Untuk performa lebih baik, buat multiple sizes:
```
public/images/projects/
├── ecommerce-thumb.jpg    # 400x300 (thumbnail)
├── ecommerce-medium.jpg   # 800x600 (default)
└── ecommerce-large.jpg    # 1200x900 (high-res)
```

### 3. WebP Format (Modern)
Convert ke WebP untuk file size lebih kecil:
```jsx
<picture>
  <source srcSet="/images/profile.webp" type="image/webp" />
  <img src="/images/profile.jpg" alt="Profile" />
</picture>
```

## 🎨 Editing Foto

### Profile Photo
- **Crop**: Square (1:1 ratio)
- **Background**: Bisa dihapus atau blur
- **Lighting**: Terang dan jelas
- **Expression**: Professional tapi friendly

### Project Screenshots
- **Full page**: Capture seluruh halaman
- **Clean**: Hapus data dummy/personal
- **Highlight**: Focus pada fitur utama
- **Consistent**: Style yang sama untuk semua project

## 🔄 Update Foto

### Via Admin Panel (Future)
Setelah admin UI selesai, Anda bisa:
1. Login ke admin panel
2. Edit project
3. Upload foto langsung
4. Auto resize dan optimize

### Via File Manager
1. Replace file di `public/images/`
2. Gunakan nama file yang sama
3. Clear browser cache: Ctrl+F5
4. Foto otomatis terupdate

## 🐛 Troubleshooting

### Foto tidak muncul?
1. **Check path**: Pastikan path benar (`/images/profile.jpg`)
2. **Check file**: Pastikan file ada di `public/images/`
3. **Check permissions**: File harus readable
4. **Clear cache**: Ctrl+F5 di browser
5. **Check console**: Lihat error di browser console

### Foto blur/pixelated?
1. **Upload higher resolution**: Minimal 800x600
2. **Check compression**: Jangan over-compress
3. **Use PNG**: Untuk gambar dengan text/detail

### File size terlalu besar?
1. **Compress**: Gunakan TinyPNG atau Squoosh
2. **Resize**: Sesuaikan dengan ukuran display
3. **Format**: JPG untuk foto, PNG untuk graphics

## 📱 Mobile Optimization

Foto otomatis responsive, tapi pastikan:
- **File size < 500KB** untuk mobile
- **Aspect ratio** konsisten
- **Loading speed** optimal

## 🔐 Security

- **Jangan upload** foto dengan metadata sensitif
- **Gunakan generic names** (profile.jpg, bukan nama-asli.jpg)
- **Check file type** sebelum upload
- **Scan for malware** jika dari sumber tidak terpercaya

---

**Setelah upload foto, portfolio Anda akan terlihat lebih personal dan professional!** 📸✨