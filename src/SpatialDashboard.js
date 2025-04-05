import React from 'react';
import Plot from 'react-plotly.js';

function SpatialDashboard() {
    // Mock data inspired by crc_orion_2024, matching the image's distribution
    const data = [
        {
            x: [50, 100, 150, 200, 250, 300, 350, 400, 450, 100, 200, 300],
            y: [3000, 3200, 3400, 3600, 3800, 4000, 4200, 4400, 4600, 3100, 3700, 4300],
            mode: 'markers',
            type: 'scatter',
            marker: {
                color: ['red', 'blue', 'green', 'purple', 'red', 'blue', 'green', 'red', 'purple', 'blue', 'green', 'red'],
                size: 12,
            },
            text: ['dMMR', 'tdpMMR', 'tipMMR', 'dMMR', 'dMMR', 'tdpMMR', 'tipMMR', 'dMMR', 'tipMMR', 'tdpMMR', 'tipMMR', 'dMMR'],
            hovertemplate: 'CD3: %{y}<br>CD8: %{x}<br>MMR: %{text}<extra></extra>',
        },
    ];

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Spatial Dashboard Prototype (Inspired by crc_orion_2024)</h1>
            <Plot
                data={data}
                layout={{
                    title: 'CD3 vs CD8 Density',
                    xaxis: {
                        title: {
                            text: 'CD8 Density (cells)', // Explicit title text
                            font: { size: 14, color: '#000' }, // Ensure font is visible
                            standoff: 15, // Add space between axis and title
                        },
                        range: [0, 500],
                        tickfont: { size: 10 }, // Ensure ticks are visible
                        automargin: true, // Automatically adjust margins for title
                    },
                    yaxis: {
                        title: {
                            text: 'CD3 Density (cells)', // Explicit title text
                            font: { size: 14, color: '#000' }, // Ensure font is visible
                            standoff: 15, // Add space between axis and title
                        },
                        range: [0, 5000],
                        tickfont: { size: 10 }, // Ensure ticks are visible
                        automargin: true, // Automatically adjust margins for title
                    },
                    width: 600,
                    height: 400,
                    dragmode: 'zoom', // Enables zoom functionality
                    showlegend: false, // No legend in the image
                    margin: { t: 60, r: 50, l: 100, b: 100 }, // Increased margins to accommodate titles
                }}
                config={{
                    responsive: true,
                    displayModeBar: true, // Matches the image's mode bar
                    // Debug option to log layout (uncomment to troubleshoot)
                    // onInitialized: (figure) => console.log('Layout:', figure.layout),
                }}
            />
            <p style={{ fontSize: '12px', color: '#666' }}>
                Note: Data is mock and simulates TIL densities. Colors represent MMR status: red (dMMR), blue (tdpMMR), green (tipMMR), purple (dMMR variant).
            </p>
        </div>
    );
}

export default SpatialDashboard;