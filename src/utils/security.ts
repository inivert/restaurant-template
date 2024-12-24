// Security headers configuration
export const securityHeaders = {
  'Content-Security-Policy': 
    "default-src 'self'; " +
    "img-src 'self' https://images.unsplash.com data: blob: https:; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://app.grammarly.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "frame-src 'self' https://app.grammarly.com https://www.google.com; " +
    "connect-src 'self' https://api.unsplash.com https://app.grammarly.com https://vitals.vercel-insights.com; " +
    "object-src 'none';",
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
}; 