# 📧 Contact Form - User Guide

## ✨ Fitur Contact Form

Contact form yang sudah diimplementasikan memiliki fitur:

### 1. **Form Fields**
- ✅ Nama Lengkap (required)
- ✅ Email (required, validated)
- ✅ Subjek (required)
- ✅ Pesan (required, max 5000 characters)

### 2. **Validasi**
- Real-time validation
- Error messages yang jelas
- Email format validation
- Required field validation

### 3. **User Experience**
- Loading spinner saat submit
- Success notification (auto-hide 5 detik)
- Smooth animations
- Glassmorphism design
- Responsive untuk semua device

### 4. **Backend**
- Data tersimpan di database
- Logging untuk monitoring
- Ready untuk email integration
- CSRF protection

## 🎨 Design Features

### Glassmorphism Effect
- Background: `bg-white/10`
- Backdrop blur: `backdrop-blur-sm`
- Border: `border-white/20`
- Smooth transitions

### Colors
- Input background: White with 10% opacity
- Border: White with 20% opacity
- Text: White
- Placeholder: White with 60% opacity
- Focus ring: White with 50% opacity

## 🔧 Customization

### Mengubah Email Tujuan

Edit `app/Http/Controllers/ContactController.php`:

```php
// Uncomment dan ubah email
Mail::send('emails.contact', $validated, function ($message) use ($validated) {
    $message->to('your.email@example.com') // <-- Ubah ini
        ->subject('New Contact: ' . $validated['subject'])
        ->replyTo($validated['email'], $validated['name']);
});
```

### Mengubah Social Media Links

Edit `resources/js/Pages/Home.jsx` di section Contact:

```jsx
<a href="mailto:your.email@example.com"> // <-- Ubah email
<a href="https://github.com/yourusername"> // <-- Ubah GitHub
<a href="https://linkedin.com/in/yourusername"> // <-- Ubah LinkedIn
```

### Menambah Social Media Lain

Tambahkan button baru di section Contact:

```jsx
<a
    href="https://twitter.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300"
>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        {/* Twitter icon path */}
    </svg>
    Twitter
</a>
```

## 📊 Database Structure

Table: `contacts`

| Column | Type | Description |
|--------|------|-------------|
| id | bigint | Primary key |
| name | string | Nama pengirim |
| email | string | Email pengirim |
| subject | string | Subjek pesan |
| message | text | Isi pesan |
| is_read | boolean | Status baca (default: false) |
| created_at | timestamp | Waktu kirim |
| updated_at | timestamp | Waktu update |

## 🔍 Melihat Contact Messages

### Via Tinker
```bash
php artisan tinker
>>> App\Models\Contact::all();
>>> App\Models\Contact::latest()->first(); // Pesan terbaru
>>> App\Models\Contact::where('is_read', false)->get(); // Belum dibaca
```

### Via Database
```bash
# SQLite
sqlite3 database/database.sqlite
SELECT * FROM contacts ORDER BY created_at DESC;

# MySQL
mysql -u root -p
USE your_database;
SELECT * FROM contacts ORDER BY created_at DESC;
```

## 📧 Email Integration (Optional)

### Setup Email di .env

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your.email@gmail.com
MAIL_PASSWORD=your_app_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your.email@gmail.com
MAIL_FROM_NAME="${APP_NAME}"
```

### Buat Email Template

Create `resources/views/emails/contact.blade.php`:

```blade
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Message</title>
</head>
<body>
    <h2>New Contact Message</h2>
    <p><strong>From:</strong> {{ $name }}</p>
    <p><strong>Email:</strong> {{ $email }}</p>
    <p><strong>Subject:</strong> {{ $subject }}</p>
    <p><strong>Message:</strong></p>
    <p>{{ $message }}</p>
</body>
</html>
```

### Uncomment Email Code

Di `ContactController.php`, uncomment bagian email:

```php
try {
    Mail::send('emails.contact', $validated, function ($message) use ($validated) {
        $message->to('your.email@example.com')
            ->subject('New Contact: ' . $validated['subject'])
            ->replyTo($validated['email'], $validated['name']);
    });
} catch (\Exception $e) {
    Log::error('Failed to send contact email: ' . $e->getMessage());
}
```

## 🔔 Webhook Integration (Optional)

### Discord Webhook

```php
use Illuminate\Support\Facades\Http;

private function sendToDiscord($data)
{
    $webhookUrl = env('DISCORD_WEBHOOK_URL');
    
    Http::post($webhookUrl, [
        'content' => "**New Contact Message**\n" .
                    "**Name:** {$data['name']}\n" .
                    "**Email:** {$data['email']}\n" .
                    "**Subject:** {$data['subject']}\n" .
                    "**Message:**\n{$data['message']}"
    ]);
}
```

### Telegram Bot

```php
private function sendToTelegram($data)
{
    $botToken = env('TELEGRAM_BOT_TOKEN');
    $chatId = env('TELEGRAM_CHAT_ID');
    
    $text = "🔔 *New Contact Message*\n\n" .
            "*Name:* {$data['name']}\n" .
            "*Email:* {$data['email']}\n" .
            "*Subject:* {$data['subject']}\n" .
            "*Message:*\n{$data['message']}";
    
    Http::post("https://api.telegram.org/bot{$botToken}/sendMessage", [
        'chat_id' => $chatId,
        'text' => $text,
        'parse_mode' => 'Markdown'
    ]);
}
```

## 🐛 Troubleshooting

### Form tidak submit?
- Check console browser untuk error
- Pastikan CSRF token ada
- Check network tab untuk response

### Validation error?
- Pastikan semua field required terisi
- Check format email
- Check panjang message (max 5000 chars)

### Database error?
- Pastikan migration sudah dijalankan: `php artisan migrate`
- Check database connection di `.env`
- Check table `contacts` exists

### Email tidak terkirim?
- Check `.env` email configuration
- Test dengan: `php artisan tinker` → `Mail::raw('Test', function($m) { $m->to('test@example.com')->subject('Test'); });`
- Check spam folder
- Enable "Less secure app access" untuk Gmail

## 📈 Next Steps

Setelah contact form berjalan, Anda bisa:

1. **Buat Admin Panel** untuk view & manage messages
2. **Add Email Notifications** untuk auto-reply
3. **Add Rate Limiting** untuk prevent spam
4. **Add Captcha** (Google reCAPTCHA)
5. **Add File Upload** untuk attachments
6. **Add Auto-Response** email

---

**Happy Coding!** 🚀
