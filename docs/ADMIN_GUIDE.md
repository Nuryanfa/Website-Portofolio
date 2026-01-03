# 🔐 Admin Panel - User Guide

## 🚀 Quick Start

### Login ke Admin Panel

1. **Register/Login**
   - Buka: http://localhost:8000/register
   - Atau gunakan akun yang sudah dibuat:
     - Email: `admin@portfolio.com`
     - Password: `password`

2. **Akses Dashboard**
   - Setelah login, klik "Dashboard" di navbar
   - Atau langsung ke: http://localhost:8000/admin/dashboard

## 📊 Dashboard Overview

Dashboard menampilkan:
- **Total Projects** - Jumlah semua project
- **Total Skills** - Jumlah semua skill
- **Total Messages** - Jumlah pesan dari contact form
- **Unread Messages** - Pesan yang belum dibaca
- **Recent Messages** - 5 pesan terbaru
- **Quick Actions** - Tombol cepat untuk create
- **Quick Links** - Link ke manage sections

## 📁 Manage Projects

### View All Projects
- Navigate: Dashboard → "Manage Projects"
- URL: `/admin/projects`
- Menampilkan semua projects dengan order

### Create New Project
1. Klik "New Project" atau navigate ke `/admin/projects/create`
2. Isi form:
   - **Title** (required) - Nama project
   - **Description** (required) - Deskripsi singkat
   - **Tags** (required) - Array teknologi, contoh: `["Laravel", "React"]`
   - **Link** (optional) - URL ke project/GitHub
   - **Image** (optional) - Path atau URL gambar
   - **Order** (optional) - Urutan tampil (default: 0)
   - **Is Featured** - Tandai sebagai featured
   - **Is Active** - Aktifkan/nonaktifkan
3. Klik "Create Project"

### Edit Project
1. Di list projects, klik "Edit" pada project yang ingin diubah
2. Update fields yang diperlukan
3. Klik "Update Project"

### Delete Project
1. Di list projects, klik "Delete"
2. Confirm deletion
3. Project akan dihapus permanent

## 🎯 Manage Skills

### View All Skills
- Navigate: Dashboard → "Manage Skills"
- URL: `/admin/skills`
- Menampilkan semua skills dengan order

### Create New Skill
1. Klik "New Skill" atau navigate ke `/admin/skills/create`
2. Isi form:
   - **Name** (required) - Nama skill
   - **Icon** (required) - Emoji atau icon, contoh: `⚛️`
   - **Level** (required) - 0-100
   - **Category** (optional) - Frontend, Backend, Database, Tools, Design
   - **Order** (optional) - Urutan tampil
   - **Is Active** - Aktifkan/nonaktifkan
3. Klik "Create Skill"

### Edit Skill
1. Di list skills, klik "Edit"
2. Update fields (biasanya level yang sering diupdate)
3. Klik "Update Skill"

### Delete Skill
1. Di list skills, klik "Delete"
2. Confirm deletion

## 💬 Manage Contact Messages

### View All Messages
- Navigate: Dashboard → "View Messages"
- URL: `/admin/contacts`
- Menampilkan semua messages dengan pagination (20 per page)
- Badge "New" untuk unread messages

### View Message Detail
1. Klik pada message di list
2. Message otomatis marked as read
3. Lihat detail lengkap: name, email, subject, message, timestamp

### Mark as Read/Unread
- Di detail page, klik "Mark as Read" atau "Mark as Unread"
- Berguna untuk tracking messages yang sudah ditangani

### Delete Message
1. Di detail page atau list, klik "Delete"
2. Confirm deletion
3. Message dihapus permanent

## 🗄️ Database Structure

### Projects Table
```
id, title, description, image, tags (JSON), link, 
order, is_featured, is_active, created_at, updated_at
```

### Skills Table
```
id, name, icon, level, category, order, 
is_active, created_at, updated_at
```

### Contacts Table
```
id, name, email, subject, message, is_read, 
created_at, updated_at
```

## 🔧 Advanced Features

### Scopes (Query Helpers)

**Projects:**
- `Project::active()` - Only active projects
- `Project::featured()` - Only featured projects
- `Project::ordered()` - Ordered by order field

**Skills:**
- `Skill::active()` - Only active skills
- `Skill::ordered()` - Ordered by order field
- `Skill::byCategory('Frontend')` - Filter by category

### Example Usage in Tinker
```bash
php artisan tinker

# Get all active projects
>>> App\Models\Project::active()->get();

# Get featured projects only
>>> App\Models\Project::featured()->get();

# Get frontend skills
>>> App\Models\Skill::byCategory('Frontend')->get();

# Get unread contacts
>>> App\Models\Contact::where('is_read', false)->get();
```

## 📝 Tips & Best Practices

### Projects
1. **Order Field** - Gunakan kelipatan 10 (10, 20, 30) untuk mudah insert di tengah
2. **Featured** - Max 3-4 featured projects untuk highlight
3. **Tags** - Gunakan nama teknologi yang konsisten
4. **Links** - Pastikan URL valid (https://)

### Skills
1. **Level** - Update secara berkala sesuai progress
2. **Category** - Gunakan kategori yang konsisten
3. **Icon** - Gunakan emoji yang relevan
4. **Order** - Group by category untuk tampilan lebih rapi

### Contacts
1. **Regular Check** - Check messages minimal 1x sehari
2. **Mark as Read** - Tandai yang sudah ditangani
3. **Response** - Reply via email yang tercantum
4. **Archive** - Delete messages lama yang tidak penting

## 🔐 Security

### Authentication
- Semua admin routes protected dengan `auth` middleware
- Hanya user yang login bisa akses admin panel
- Email verification required (`verified` middleware)

### Authorization (Future)
- Bisa tambahkan role-based access (admin, editor, viewer)
- Middleware untuk check permissions
- Audit log untuk track changes

## 🚀 Deployment Checklist

Sebelum deploy ke production:

1. **Change Default Password**
   ```bash
   php artisan tinker
   >>> $user = User::where('email', 'admin@portfolio.com')->first();
   >>> $user->password = bcrypt('your-strong-password');
   >>> $user->save();
   ```

2. **Update .env**
   - Set `APP_ENV=production`
   - Set `APP_DEBUG=false`
   - Change `APP_KEY`

3. **Database**
   - Backup database sebelum deploy
   - Run migrations di production
   - Seed data jika perlu

4. **Security**
   - Enable HTTPS
   - Set secure session cookies
   - Configure CORS if needed

## 🐛 Troubleshooting

### Cannot access admin panel?
- Pastikan sudah login
- Check email verification
- Clear cache: `php artisan cache:clear`

### Projects/Skills tidak muncul di homepage?
- Check `is_active` field di database
- Clear cache
- Check browser console untuk errors

### Changes tidak tersimpan?
- Check validation errors
- Check database connection
- Check file permissions

## 📚 Next Steps

Setelah admin panel berjalan:

1. **Create Admin UI Pages** - Buat UI untuk CRUD operations
2. **Add Image Upload** - Implement file upload untuk project images
3. **Add Rich Text Editor** - Untuk description yang lebih rich
4. **Add Bulk Actions** - Delete multiple, activate/deactivate multiple
5. **Add Search & Filter** - Search projects/skills, filter by category
6. **Add Export** - Export contacts to CSV/Excel
7. **Add Analytics** - Track views, clicks, etc.

---

**Happy Managing!** 🎉
