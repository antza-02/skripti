# Skripti Landing

Production-ready static landing page with modal lead capture.

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Form setup (Formspree)

1. Create a new form in Formspree.
2. Copy your endpoint, for example: `https://formspree.io/f/abc123xy`.
3. Edit `main.js` and replace:
   - `const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";`
4. Submit a test lead in the modal and verify notification email is received.

## Deploy on Vercel

1. Import this folder as a project in Vercel.
2. Framework preset: `Other` (static site).
3. Build command: leave empty.
4. Output directory: `.`.
5. Deploy and verify:
   - Page loads
   - Modal opens/closes with keyboard and overlay
   - Lead submission returns success

## Deploy on Netlify

1. New site from Git or drag-and-drop this folder.
2. Build command: none.
3. Publish directory: `.`.
4. Deploy and run the same checks as above.

## Domain + HTTPS checklist

1. Add domain in hosting provider dashboard.
2. Configure DNS records at registrar:
   - `A`/`ALIAS` for root (`skripti.fi`)
   - `CNAME` for `www`
3. Set primary domain to your preferred host.
4. Wait for certificate provisioning and verify HTTPS lock.

## Go-live verification

- Lighthouse targets: Performance 85+, Accessibility 90+, SEO 90+.
- Test screen widths: 320, 375, 768, desktop.
- Test form success and forced error path (temporarily break endpoint).
