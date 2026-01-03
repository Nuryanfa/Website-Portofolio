@echo off
echo ========================================
echo   Memindahkan Project ke Folder Lokal
echo ========================================
echo.

REM Buat folder tujuan
set "DEST=C:\laravel-projects\Website-Portofolio"
echo Membuat folder: %DEST%
mkdir "C:\laravel-projects" 2>nul
echo.

REM Copy project
echo Copying project files...
echo Ini akan memakan waktu beberapa menit...
echo.
xcopy "%~dp0*" "%DEST%\" /E /I /H /Y

echo.
echo ========================================
echo   SELESAI!
echo ========================================
echo.
echo Project sudah dipindahkan ke:
echo %DEST%
echo.

echo Langkah selanjutnya:
echo 1. Buka folder baru di terminal:
echo    cd C:\laravel-projects\Website-Portofolio
echo.
echo 2. Jalankan server:
echo    php artisan serve
echo.
echo 3. Di terminal lain:
echo    npm run dev
echo.
echo 4. Buka browser:
echo    http://localhost:8000
echo.
pause
