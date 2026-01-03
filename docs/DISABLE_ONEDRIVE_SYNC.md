# 🔧 Cara Disable OneDrive Sync untuk Folder Project

## Metode 1: Exclude Folder dari OneDrive Sync (RECOMMENDED)

### Langkah-langkah:

1. **Klik kanan icon OneDrive** di system tray (pojok kanan bawah taskbar)
   - Jika tidak terlihat, klik tanda ^ untuk show hidden icons

2. **Klik icon gear (⚙️)** → **Settings**

3. **Pilih tab "Sync and backup"** atau **"Account"**

4. **Klik "Choose folders"** atau **"Manage backup"**

5. **Uncheck folder** `Documents\GitHub\Website-Portofolio`
   - Atau navigate dan uncheck folder project Anda

6. **Klik OK** dan tunggu proses selesai

7. **Restart terminal** Anda

### Setelah itu:

```bash
# Test apakah sudah bisa
php artisan serve
```

---

## Metode 2: Pindahkan Project ke Folder Non-OneDrive (PALING MUDAH)

### Langkah-langkah:

1. **Buat folder baru** di luar OneDrive:
   ```bash
   # Buat folder di C:
   mkdir C:\laravel-projects
   ```

2. **Copy seluruh project**:
   ```bash
   # Di PowerShell
   xcopy "C:\Users\Lenovo\OneDrive\Dokumen\Documents\GitHub\Website-Portofolio" "C:\laravel-projects\Website-Portofolio" /E /I /H
   ```

3. **Pindah ke folder baru**:
   ```bash
   cd C:\laravel-projects\Website-Portofolio
   ```

4. **Jalankan server**:
   ```bash
   php artisan serve
   ```

5. **Di terminal lain**:
   ```bash
   npm run dev
   ```

---

## Metode 3: Gunakan .gitignore untuk OneDrive (Temporary Fix)

Buat file `.onedriveignore` di folder project:

1. **Buat file** `.onedriveignore` di root project

2. **Isi dengan**:
   ```
   bootstrap/cache/
   storage/
   vendor/
   node_modules/
   ```

**Note**: Metode ini tidak selalu bekerja di semua versi OneDrive.

---

## Metode 4: Stop OneDrive Sementara (Quick Test)

Untuk test cepat:

1. **Klik kanan icon OneDrive** di system tray

2. **Pilih "Pause syncing"** → **"2 hours"**

3. **Jalankan server**:
   ```bash
   php artisan serve
   ```

**Note**: Ini hanya temporary, sync akan aktif lagi setelah 2 jam.

---

## Verifikasi Folder Sudah Tidak Sync

Cek apakah folder masih di-sync:

1. **Buka File Explorer**

2. **Navigate ke folder project**

3. **Lihat icon di file/folder**:
   - ✅ **Checkmark hijau** = Masih sync
   - ☁️ **Cloud icon** = Masih sync
   - ❌ **Tidak ada icon** = Sudah tidak sync (GOOD!)

---

## Rekomendasi Saya

**Gunakan Metode 2** (Pindahkan ke folder non-OneDrive) karena:

✅ **Permanent solution** - Tidak perlu setting lagi
✅ **Lebih cepat** - Tidak ada overhead sync
✅ **Tidak ada konflik** - File tidak terkunci
✅ **Best practice** - Development folder sebaiknya di local drive
✅ **Lebih aman** - Tidak ada risk file corrupt saat sync

### Folder yang Bagus untuk Development:

- `C:\laravel-projects\`
- `C:\projects\`
- `C:\dev\`
- `D:\projects\` (jika punya drive D)

---

## Backup Project (Opsional)

Jika khawatir kehilangan data:

```bash
# Commit ke Git
git add .
git commit -m "Portfolio improvements"
git push origin main

# Atau backup manual
xcopy "C:\Users\Lenovo\OneDrive\Dokumen\Documents\GitHub\Website-Portofolio" "D:\backup\Website-Portofolio" /E /I /H
```

---

## Setelah Disable Sync

Jalankan command ini untuk memastikan semuanya OK:

```bash
# Clear cache
php artisan optimize:clear

# Generate key (jika belum)
php artisan key:generate

# Jalankan server
php artisan serve
```

Di terminal lain:
```bash
npm run dev
```

Buka browser: `http://localhost:8000`

---

## Troubleshooting

### Masih error setelah disable sync?

1. **Restart komputer** - OneDrive kadang perlu restart
2. **Check folder permissions**:
   ```bash
   icacls "bootstrap\cache" /grant Everyone:F /T
   ```
3. **Hapus cache Laravel**:
   ```bash
   rm -r bootstrap/cache/*
   php artisan cache:clear
   ```

### Folder masih ada icon cloud?

- Tunggu beberapa menit untuk OneDrive update status
- Atau restart OneDrive: Task Manager → OneDrive → End Task → Start OneDrive lagi

---

**Setelah fix ini, Laravel akan berjalan normal tanpa masalah permission!** 🚀
