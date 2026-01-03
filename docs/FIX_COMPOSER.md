# 🔧 Cara Memperbaiki Error Composer

## Masalah
Error: "The zip extension and unzip/7z commands are both missing"

## Solusi

### Opsi 1: Aktifkan Extension ZIP di PHP (RECOMMENDED)

1. **Buka file `php.ini`**
   - Lokasi: `C:\xampp\php\php.ini`
   - Buka dengan Notepad atau text editor

2. **Cari baris ini** (gunakan Ctrl+F):
   ```
   ;extension=zip
   ```

3. **Hapus tanda semicolon (;)** di depannya menjadi:
   ```
   extension=zip
   ```

4. **Save file** dan **restart terminal**

5. **Coba install lagi**:
   ```bash
   composer install
   ```

### Opsi 2: Install 7-Zip (Alternatif)

1. **Download 7-Zip**:
   - Kunjungi: https://www.7-zip.org/
   - Download dan install

2. **Tambahkan ke PATH**:
   - Buka System Properties → Environment Variables
   - Edit PATH, tambahkan: `C:\Program Files\7-Zip`

3. **Restart terminal** dan coba lagi:
   ```bash
   composer install
   ```

### Opsi 3: Gunakan Composer dengan --prefer-source (Paling Lambat)

Jika kedua opsi di atas tidak bisa, gunakan ini:

```bash
composer install --prefer-source --no-interaction
```

**Note**: Ini akan sangat lambat karena download dari Git, bukan ZIP.

---

## Setelah Berhasil Install

Jalankan perintah ini:

```bash
# Copy environment file
copy .env.example .env

# Generate application key
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

## Rekomendasi Saya

**Gunakan Opsi 1** karena:
- ✅ Paling cepat
- ✅ Permanent fix
- ✅ Akan berguna untuk project Laravel lainnya
- ✅ Hanya perlu dilakukan sekali

---

## Troubleshooting

### Tidak bisa menemukan php.ini?
Jalankan di terminal:
```bash
php --ini
```

Akan menunjukkan lokasi file php.ini yang digunakan.

### Masih error setelah edit php.ini?
1. Pastikan sudah save file
2. Restart terminal (tutup dan buka lagi)
3. Cek apakah extension sudah aktif:
   ```bash
   php -m | findstr zip
   ```
   Harus muncul "zip" di output

### Composer masih lambat?
Itu normal untuk install pertama kali. Biarkan berjalan sampai selesai.

---

**Setelah fix ini, website portfolio Anda akan berjalan sempurna!** 🚀
