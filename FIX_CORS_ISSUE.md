# How to Fix the CORS Error

Your React website is working correctly, but your WordPress server (`neuzenai.com`) is blocking the connection because of security rules (CORS).

**The Error:**
The server is currently allowing `http://localhost:5173` but blocking your AWS link `https://dev.d8t5ljjy3zfeg.amplifyapp.com`.

You must perform ONE of the following fixes on your **WordPress Admin Panel** or **Server**.

## Method 1: Install a CORS Plugin (Easiest)
1. Log in to your WordPress Admin Dashboard.
2. Go to **Plugins > Add New**.
3. Search for **"WP CORS"** or **"Enable CORS"**.
   - *Recommendation: "WP CORS" by prabeen.giri*
4. Install and Activate it.
5. Go to **Settings > WP CORS**.
6. In "Allowed Domains", enter your AWS URL: 
   `https://dev.d8t5ljjy3zfeg.amplifyapp.com`
   *(Or enter `*` to allow ALL domains, which is easier for testing).*
7. Save Settings and try loading your React app again.

---

## Method 2: Edit `functions.php` (For Developers)
If you are comfortable editing themes:
1. Go to **Appearance > Theme File Editor**.
2. Select your active theme (or child theme).
3. Open `functions.php`.
4. Add this code at the very bottom:

```php
add_action( 'rest_api_init', function () {
    remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
    add_filter( 'rest_pre_serve_request', function ( $value ) {
        header( 'Access-Control-Allow-Origin: https://dev.d8t5ljjy3zfeg.amplifyapp.com' ); // OR use * for all
        header( 'Access-Control-Allow-Methods: GET' );
        header( 'Access-Control-Allow-Credentials: true' );
        header( 'Access-Control-Expose-Headers: Link', false );
        return $value;
    });
}, 15 );
```

---

## Method 3: Edit `.htaccess` (Server Level)
If you have FTP/File Manager access:
1. Locate the `.htaccess` file in your WordPress root directory.
2. Add these lines at the top:

```apache
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "https://dev.d8t5ljjy3zfeg.amplifyapp.com"
</IfModule>
```
