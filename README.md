# Rian — First Birthday & Tusau Keser Invitation

This repository contains a bilingual (English & Kazakh) single-page digital invitation template for Rian's First Birthday and traditional Tusau Keser ceremony.

What is included
- index.html — the main invitation page (HTML)
- styles.css — styling following a vintage Toile de Jouy / royal stationery aesthetic
- script.js — minimal JavaScript for RSVP modal and animations
- assets/audio/.gitkeep — placeholder to reserve the audio directory (no audio file included)

Notes
- Per repository policy and to avoid copyright issues, the music track was intentionally NOT included. If you have permission to include "Жазира Байырбекова — Тұсау кесер", upload the MP3 to `assets/audio/tusau-keser.mp3` and update or remove comments in index.html accordingly.
- The RSVP form opens the user's mail client via a `mailto:` link. Replace `assel@example.com` in `script.js` with the real recipient email if desired.

How to use
1. Clone the repo:
   git clone https://github.com/a7352233-code/rian-first-birthday-invite.git
2. Open `index.html` in a browser or host with GitHub Pages / Netlify / Vercel.
3. To add background music: place `tusau-keser.mp3` in `assets/audio/` and re-enable the audio player markup (instructions in comments inside `index.html`).

Publishing with GitHub Pages
- You can enable GitHub Pages in the repository settings (use branch `main` and folder `/ (root)`) to publish the site at https://a7352233-code.github.io/rian-first-birthday-invite/

Customization
- Replace placeholder email in `script.js` with the correct RSVP recipient.
- Edit text directly in `index.html` for the child's name or other details.
- SVG illustrations are simple stylized paths; feel free to replace them with more detailed Toile de Jouy artwork.

License & Credits
- This template is provided as-is. Check local copyright laws before distributing any recorded music.
