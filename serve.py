import http.server
import socketserver
import sys

class SecureNoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
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
        
        # Content Security Policy
        csp = (
            "default-src 'self'; "
            "script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; "
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; "
            "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; "
            "img-src 'self' data: blob: https:; "
            "frame-src 'self' https://maps.google.com https://www.google.com; "
            "connect-src 'self'; "
            "frame-ancestors 'self'; "
            "base-uri 'self'; "
            "form-action 'self';"
        )
        self.send_header('Content-Security-Policy', csp)
        
        super().end_headers()

# Use ThreadingTCPServer for simultaneous, non-blocking multi-asset downloads
class ThreadedTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    daemon_threads = True
    allow_reuse_address = True

if __name__ == '__main__':
    PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 2323
    with ThreadedTCPServer(('0.0.0.0', PORT), SecureNoCacheHTTPRequestHandler) as httpd:
        print(f"High-Speed Threaded Server running at http://0.0.0.0:{PORT}", flush=True)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
