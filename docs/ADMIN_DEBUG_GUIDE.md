# 🐛 Admin Panel Debug Guide

Quick troubleshooting guide for admin panel issues.

## 🚨 White Screen / Blank Page

### Possible Causes:
1. **Vite not running** - Development server stopped
2. **JavaScript errors** - Component crashes
3. **Missing data** - Backend not providing expected data
4. **Route issues** - Incorrect routing configuration

### Quick Fixes:

#### 1. Check Vite Development Server
```bash
# Check if Vite is running
npm run dev

# Should show:
# VITE v6.x.x ready in XXXms
# ➜ Local: http://localhost:5173/ (or 5174)
# ➜ APP_URL: http://localhost:8000
```

#### 2. Check Browser Console
1. **Open Developer Tools** (F12)
2. **Go to Console tab**
3. **Look for red errors**
4. **Common errors**:
   - `Cannot read property of undefined`
   - `Module not found`
   - `Unexpected token`

#### 3. Clear All Caches
```bash
# Laravel cache
php artisan optimize:clear

# Browser cache
Ctrl + F5 (hard refresh)

# NPM cache (if needed)
npm run build
```

#### 4. Check Laravel Logs
```bash
# View recent errors
tail -f storage/logs/laravel.log

# Or check in browser
# Navigate to: /admin/dashboard
# If error, check logs immediately
```

## 🔧 Component-Specific Issues

### Dashboard Not Loading
**Symptoms**: White screen on `/admin/dashboard`

**Solutions**:
1. **Check stats data**:
   ```bash
   php artisan tinker
   >>> App\Models\Project::count()
   >>> App\Models\Skill::count()
   >>> App\Models\Contact::count()
   ```

2. **Use Simple Dashboard**:
   - Navigate to `/admin/dashboard`
   - If error, fallback to SimpleDashboard will load
   - Check console for specific error

3. **Check ErrorBoundary**:
   - Error details shown in development mode
   - Look for component stack trace

### Toast Notifications Not Working
**Symptoms**: No success/error messages appear

**Solutions**:
1. **Check FlashMessages component**:
   - Ensure it's included in AuthenticatedLayout
   - Check browser console for errors

2. **Test flash messages**:
   ```php
   // In controller, add:
   return redirect()->back()->with('success', 'Test message');
   ```

3. **Check DOM manipulation**:
   - Toast styles should be added to `<head>`
   - Look for duplicate style elements

### Confirm Dialogs Not Showing
**Symptoms**: Delete buttons don't show confirmation

**Solutions**:
1. **Check state management**:
   - Ensure `useState` is properly initialized
   - Check component re-renders

2. **Check z-index conflicts**:
   - Modal should have `z-50` or higher
   - No other elements blocking it

## 🛠️ Development Tools

### React Developer Tools
1. **Install extension** for Chrome/Firefox
2. **Check component tree** for errors
3. **Inspect props** and state
4. **Look for error boundaries**

### Network Tab
1. **Check API calls** to Laravel routes
2. **Look for 500 errors** in responses
3. **Verify CSRF tokens** are included
4. **Check response data** structure

### Performance Tab
1. **Check for memory leaks** in animations
2. **Look for excessive re-renders**
3. **Monitor JavaScript execution time**

## 🔍 Common Error Messages

### "Cannot read property 'map' of undefined"
**Cause**: Array data not provided or undefined
**Fix**: Add fallback data or null checks
```jsx
{data?.map(...) || []}
// or
{(data || []).map(...)}
```

### "Module not found: Can't resolve '@/Components/...'"
**Cause**: Import path incorrect or file doesn't exist
**Fix**: Check file exists and path is correct
```jsx
// Correct
import Toast from '@/Components/Toast';

// Check file exists at:
// resources/js/Components/Toast.jsx
```

### "Inertia request returned empty response"
**Cause**: Laravel route error or controller crash
**Fix**: Check Laravel logs and controller code

### "Cannot access before initialization"
**Cause**: Circular import or hoisting issue
**Fix**: Check import order and dependencies

## 🚀 Performance Issues

### Slow Loading
1. **Check bundle size**: `npm run build` and check output
2. **Lazy load components**: Use React.lazy() for large components
3. **Optimize images**: Compress and use appropriate formats
4. **Database queries**: Check N+1 queries in Laravel

### Memory Leaks
1. **Clean up timers**: Clear setTimeout/setInterval
2. **Remove event listeners**: Clean up in useEffect
3. **Cancel requests**: Abort fetch requests on unmount

## 🔄 Recovery Steps

### If Admin Panel Completely Broken:

#### Step 1: Use Simple Dashboard
1. Navigate to `/admin/dashboard`
2. Should load SimpleDashboard as fallback
3. Basic functionality should work

#### Step 2: Check Individual Pages
1. Try `/admin/projects` directly
2. Try `/admin/skills` directly
3. Identify which specific page has issues

#### Step 3: Rollback Recent Changes
1. Check git history: `git log --oneline`
2. Identify last working commit
3. Rollback if needed: `git checkout <commit-hash>`

#### Step 4: Rebuild Assets
```bash
# Clean rebuild
rm -rf node_modules
npm install
npm run build
php artisan optimize:clear
```

## 📞 Getting Help

### Information to Provide:
1. **Exact error message** from browser console
2. **Laravel log entries** from storage/logs/laravel.log
3. **Steps to reproduce** the issue
4. **Browser and version** being used
5. **Recent changes** made to code

### Debug Commands:
```bash
# Check Laravel version
php artisan --version

# Check Node/NPM versions
node --version
npm --version

# Check database connection
php artisan tinker
>>> DB::connection()->getPdo()

# Check routes
php artisan route:list | grep admin
```

---

**Most issues are resolved by restarting Vite and clearing caches!** 🔄