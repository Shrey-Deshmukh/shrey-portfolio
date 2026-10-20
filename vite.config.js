import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Public reCAPTCHA site key, set in Netlify. The matching SITE_RECAPTCHA_SECRET
    // stays server-side with Netlify and is never bundled.
    __RECAPTCHA_KEY__: JSON.stringify(process.env.SITE_RECAPTCHA_KEY || ''),
  },
})
