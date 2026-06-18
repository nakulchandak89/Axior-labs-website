# Axior Labs Website

A modern React-based website with Express backend for Axior Labs.

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set environment variables (optional, for contact form emails):
   ```bash
   cp .env.example .env
   ```
   Edit `.env` to configure SMTP settings.

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000

## Build for Production

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Deployment

### Environment Variables

Set these in your deployment platform's environment:

- `SMTP_HOST` - SMTP server host
- `SMTP_PORT` - SMTP server port (default: 587)
- `SMTP_USER` - SMTP username
- `SMTP_PASS` - SMTP password
- `DESIGNATED_EMAIL_ADDRESS` - Email to receive contact form submissions

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Other Platforms

The app builds to the `dist/` directory. Any Node.js hosting platform will work:
- Railway
- Render
- Fly.io
- DigitalOcean App Platform
- AWS Amplify

## Project Structure

```
axior-labs-website/
├── src/
│   ├── components/
│   │   ├── sections/     # Page sections (Hero, Navbar, etc.)
│   │   ├── ui/           # Reusable UI components
│   │   └── visualizations/ # Data visualizations
│   ├── lib/
│   │   ├── constants.ts  # App constants
│   │   ├── types.ts      # TypeScript types
│   │   └── hooks/        # Custom React hooks
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── server.ts             # Express server
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript config
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Type check

## License

Apache-2.0