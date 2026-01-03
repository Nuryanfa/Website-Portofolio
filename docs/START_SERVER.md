# 🚀 Cara Menjalankan Server (Workaround OneDrive Issue)

## Masalah
OneDrive menyebabkan folder `bootstrap/cache` tidak writable oleh Laravel.

## Solusi Cepat

### Opsi 1: Disable OneDrive Sync untuk Folder Ini (RECOMMENDED)

1. **Klik kanan** pada folder project Anda
2. Pilih **"Always keep on this device"** atau **"Free up space"**
3. Tunggu sampai sync selesai
4. **Restart terminal**
5. Jalankan:
   ```bash
   php artisan serve
   ```

### Opsi 2: Pindahkan Project ke Folder Non-OneDrive (PALING MUDAH)

1. **Copy seluruh folder project** ke lokasi lain, misalnya:
   - `C:\laravel-projects\Website-Portofolio`
   - `D:\projects\Website-Portofolio`

2. **Buka terminal** di folder baru tersebut

3. **Jalankan server**:
   ```bash
   php artisan serve
   ```

4. Di terminal lain:
   ```bash
   npm run dev
   ```

### Opsi 3: Gunakan PHP Built-in Server (Temporary)

Jika kedua opsi di atas tidak bisa, gunakan ini:

```bash
php -S localhost:8000 -t public
```

Di terminal lain:
```bash
npm run dev
```

Buka browser: `http://localhost:8000`

**Note**: Dengan opsi ini, beberapa fitur Laravel mungkin tidak berfungsi sempurna.

---

## Setelah Server Berjalan

1. **Buka browser**: `http://localhost:8000`
2. **Lihat portfolio Anda** yang sudah diperbaiki! 🎉

---

## Rekomendasi

**Pindahkan project ke folder non-OneDrive** (Opsi 2) karena:
- ✅ Menghindari masalah permission
- ✅ Lebih cepat (tidak ada sync overhead)
- ✅ Tidak ada konflik file
- ✅ Best practice untuk development

OneDrive bagus untuk backup, tapi tidak ideal untuk development folder yang sering berubah.

---

## Alternative: Gunakan Laravel Sail (Docker)

Jika Anda familiar dengan Docker:

```bash
# Install Docker Desktop
# Kemudian jalankan:
./vendor/bin/sail up
```

Ini akan menjalankan Laravel di container Docker, menghindari masalah OneDrive.

---

**Setelah fix ini, website portfolio Anda akan berjalan sempurna!** 🚀
