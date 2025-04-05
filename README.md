# Spatial Dashboard Prototype 

This is a prototype spatial dashboard built as a Proof of Work (PoW) for the Google Summer of Code 2025 project "Advanced Dashboard Integration" with cBioPortal for Cancer Genomics - inspired by the `crc_orion_2024` study.

## Overview
The prototype features an interactive scatter plot showing mock data for CD3 vs. CD8 densities, colored by MMR status (dMMR, tdpMMR, tipMMR). 

## Features
- Scatter plot with CD3 (y-axis, 0-5000 cells) vs. CD8 (x-axis, 0-500 cells).
- Color coding by MMR status (red: dMMR, blue: tdpMMR, green: tipMMR, purple: dMMR variant).
- Interactive tooltips showing CD3, CD8, and MMR values on hover.
- Zoom and pan functionality via Plotly's mode bar.

## Setup Instructions
1. Clone the repository: `git clone https://github.com/arishta/spatial-dashboard-pow.git`
2. Navigate to the folder: `cd spatial-dashboard-pow`
3. Install dependencies: `npm install`
4. Start the app: `npm start`
5. Open http://localhost:3000 in your browser.

## Deployment
- Live demo: [Insert Netlify/GitHub Pages URL after deployment]
- Deployed using Netlify with a simple `npm run build` and drag-and-drop.

## Challenges Overcome
- Learned Plotly.js basics for interactive plotting.
- Ensured responsive design across different screen sizes.

## Screenshots
<img width="1038" alt="Screenshot 2025-04-05 at 2 58 33 PM" src="https://github.com/user-attachments/assets/6b78d670-3a72-4251-b07a-c453a77dc12e" />

## Contact
- GitHub: [arishta](https://github.com/arishta)
- Email: arishta.dev@gmail.com
