# Spatial Dashboard Prototype (Proof of Work for GSoC 2025)

This is a prototype spatial dashboard built as a Proof of Work (PoW) for the Google Summer of Code 2025 project "Advanced Dashboard Integration" with cBioPortal for Cancer Genomics. It demonstrates my ability to create interactive visualizations using React and Plotly.js, inspired by the `crc_orion_2024` study.

## Overview
The prototype features an interactive scatter plot showing mock data for CD3 vs. CD8 densities, colored by MMR status (dMMR, tdpMMR, tipMMR). This aligns with the project's goal of developing spatial-oriented dashboards for cBioPortal's Study View.

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

## Future Integration
This prototype will evolve during GSoC by integrating real `crc_orion_2024` data via cBioPortal's APIs once access is granted. Additional charts (e.g., bar, heatmap) will be added to support the full dashboard system.

## Screenshots
[Insert screenshot of the scatter plot with a tooltip visible]

## Contact
- GitHub: [arishta](https://github.com/arishta)
- Email: arishta.dev@gmail.com