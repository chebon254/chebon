# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a personal portfolio website for Chebon Kelvin, a Full Stack Developer. The project is a static HTML/CSS/JavaScript website hosted on Firebase Hosting.

## Project Structure
```
/
├── index.html              # Main portfolio page (in root for Firebase hosting)
├── chebon/                 # Main website assets directory
│   ├── index.html         # Duplicate portfolio page
│   ├── css/
│   │   ├── style.css      # Main stylesheet
│   │   ├── fonts/         # Custom fonts
│   │   └── img/           # Images and graphics
│   ├── js/
│   │   └── script.js      # Main JavaScript functionality
│   ├── favicon/           # Favicon assets
│   └── nftscript.js       # WebFont loader script
├── firebase.json          # Firebase hosting configuration
├── .firebaserc            # Firebase project settings
└── .github/workflows/     # GitHub Actions for CI/CD
```

## Development Commands

### Local Development
This is a static website project, so no build process is required. For local development:
- Serve files using any static file server
- Example: `python -m http.server 8000` or `npx serve .`
- View at `http://localhost:8000`

### Firebase Deployment
```bash
# Install Firebase CLI (if not installed)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy to Firebase Hosting
firebase deploy

# Preview changes before deploying
firebase serve
```

### GitHub Actions Deployment
- Automatic deployment to Firebase Hosting on push to `main` branch
- Preview deployments on pull requests
- Configured in `.github/workflows/` directory

## Architecture Notes

### Static Website Structure
- **Entry Point**: `index.html` (both in root and `chebon/` directory)
- **Assets**: All assets are in the `chebon/` directory as specified in Firebase hosting config
- **Styling**: Single CSS file (`chebon/css/style.css`) with custom fonts and responsive design
- **JavaScript**: Vanilla JavaScript in `chebon/js/script.js` for interactive features
- **Images**: Located in `chebon/css/img/` directory

### Key Features
- Responsive portfolio design
- Back-to-top functionality
- Scroll animations and reveals
- Sticky navigation header
- Mobile-responsive menu
- SEO optimized with meta tags and structured data
- Social media integration (Twitter, Facebook)

### Firebase Configuration
- **Hosting**: Public directory set to `chebon/`
- **Rewrites**: All routes redirect to `/index.html` for SPA-like behavior
- **Project ID**: `chebonk`

### External Dependencies
- Google Fonts (Poppins family)
- Font Awesome icons (v6.2.0)
- jQuery (3.3.1)
- WebFont loader for custom fonts

## File Locations
- Main portfolio content: `index.html` and `chebon/index.html`
- Styling: `chebon/css/style.css`
- JavaScript: `chebon/js/script.js`
- Assets: `chebon/css/img/` and `chebon/favicon/`
- Configuration: `firebase.json`, `.firebaserc`