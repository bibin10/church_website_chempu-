import http.server
import socketserver
import sys
import os

class SecureCleanURLHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Strip query string or hash fragment
        clean_path = path.split('?')[0].split('#')[0]
        translated = super().translate_path(clean_path)
        
        # If path doesn't exist directly, check if path + .html exists
        if not os.path.exists(translated):
            html_candidate = translated + '.html'
            if os.path.exists(html_candidate):
                return html_candidate
        return translated

    def end_headers(self):
        # Allow static assets (images, audio, fonts) to cache efficiently for snappy reloads
        path = self.path.lower()
        if any(path.endswith(ext) for ext in ('.jpg', '.jpeg', '.png', '.webp', '.svg', '.mp3', '.woff', '.woff2', '.ttf')):
            self.send_header('Cache-Control', 'public, max-age=86400')
        else:
            # HTML, CSS and JS check freshness with 304 or reload as needed
            self.send_header('Cache-Control', 'no-cache, must-revalidate')
        
        # Comprehensive Security Headers
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'SAMEORIGIN')
        self.send_header('X-XSS-Protection', '1; mode=block')
        self.send_header('Referrer-Policy', 'strict-origin-when-cross-origin')
        self.send_header('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()')
        
        # Content Security Policy (Allows Google Fonts, Cloudflare CDN, Web3Forms API, Maps, YouTube)
        csp = (
            "default-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://fonts.gstatic.com https://cdnjs.cloudflare.com https://api.web3forms.com https://www.google.com https://maps.google.com; "
            "img-src 'self' data: blob: https:; "
            "media-src 'self' data: blob: https:; "
            "frame-src 'self' https://maps.google.com https://www.google.com https://www.youtube.com; "
            "connect-src 'self' https://api.web3forms.com; "
            "frame-ancestors 'self';"
        )
        self.send_header('Content-Security-Policy', csp)
        
        super().end_headers()

# Use ThreadingTCPServer for simultaneous, non-blocking multi-asset downloads
class ThreadedTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    daemon_threads = True
    allow_reuse_address = True

if __name__ == '__main__':
    PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 2323
    with ThreadedTCPServer(('0.0.0.0', PORT), SecureCleanURLHTTPRequestHandler) as httpd:
        print(f"High-Speed Clean-URL Secure Server running at http://127.0.0.1:{PORT}", flush=True)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
