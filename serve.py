import http.server
import socketserver
import sys

class SecureNoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # 1. Anti-caching headers for rapid development updates
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        
        # 2. Comprehensive Security Headers
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'SAMEORIGIN')
        self.send_header('X-XSS-Protection', '1; mode=block')
        self.send_header('Referrer-Policy', 'strict-origin-when-cross-origin')
        self.send_header('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()')
        
        # 3. Content Security Policy (Allows required CDNs for Fonts & Icons, disallows untrusted scripts)
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

if __name__ == '__main__':
    PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 2323
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(('127.0.0.1', PORT), SecureNoCacheHTTPRequestHandler) as httpd:
        print(f"Serving at http://127.0.0.1:{PORT} with NO-CACHE & FULL SECURITY headers", flush=True)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
