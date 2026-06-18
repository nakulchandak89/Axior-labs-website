# Deployment Guide

## Quick Deploy

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Vercel will auto-detect the Node.js runtime and build settings.

### Option 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder** to your hosting platform

3. **Set start command:** `node dist/server.cjs`

## Environment Variables

Configure these in your deployment platform:

| Variable | Required | Description |
|----------|----------|-------------|
| `SMTP_HOST` | No | SMTP server for sending emails |
| `SMTP_PORT` | No | SMTP port (default: 587) |
| `SMTP_USER` | No | SMTP username |
| `SMTP_PASS` | No | SMTP password |
| `DESIGNATED_EMAIL_ADDRESS` | No | Email to receive contact forms |

## Platform-Specific Guides

### Railway

```bash
railway init
railway up
```

### Render

1. Connect GitHub repo
2. Build Command: `npm run build`
3. Start Command: `npm start`
4. Add environment variables

### Fly.io

```bash
fly launch
fly deploy
```

### DigitalOcean App Platform

1. Connect GitHub
2. Source: `D:\Axior-labs-website`
3. Build: `npm run build`
4. Run: `npm start`

## Production Checklist

- [ ] Environment variables configured
- [ ] Build completes without errors
- [ ] Contact form tested
- [ ] All routes accessible
- [ ] Static assets loading
- [ ] HTTPS enabled
- [ ] Custom domain configured (if needed)

## Troubleshooting

**Build fails:** Ensure Node.js 18+ is installed

**Port conflict:** Platform assigns `PORT` automatically, server uses 3000 as fallback

**Emails not sending:** Verify SMTP credentials in environment variables