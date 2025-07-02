// Initialize the Leaflet map
const map = L.map('map').setView([37.7749, -122.4194], 10); // Centered on San Francisco

// Add OpenStreetMap base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

// List of KMZ files and their display names
const kmzLayers = [
  // ArcGIS Data for ATAK (KMZs)
  { file: 'layers/GhostMaps/ArcGIS Data for ATAK (KMZs)/Common Intelligence Picture/S2Underground_Common_Intelligence_Picture_June_24_2025_Export_1.kmz', name: 'Common Intelligence Picture (June 24, 2025)' },
  { file: 'layers/GhostMaps/ArcGIS Data for ATAK (KMZs)/Common Intelligence Picture/S2Underground_Common_Intelligence_Picture_July_1_2025_Export_1.kmz', name: 'Common Intelligence Picture (July 1, 2025)' },
  { file: 'layers/GhostMaps/ArcGIS Data for ATAK (KMZs)/Border Crisis Map/S2Underground_Border_Crisis_Map_June_12_2025_Export_v1.kmz', name: 'Border Crisis Map (June 12, 2025)' },
  { file: 'layers/GhostMaps/ArcGIS Data for ATAK (KMZs)/Border Crisis Map/S2Underground_Border_Crisis_Map_July_1_2025_Export_v1.kmz', name: 'Border Crisis Map (July 1, 2025)' },

  // Incident Response Products for ATAK (KMZs and Documents)
  { file: 'layers/GhostMaps/Incident Response Products for ATAK (KMZs and Documents)/Riot Tracking 2025/Planned_Protests_June_14_2025.kmz', name: 'Planned Protests (June 14, 2025)' },
  { file: "layers/GhostMaps/Incident Response Products for ATAK (KMZs and Documents)/Riot Tracking 2025/Colorado Civil Unrest 2025/Denver Riots 2025/Denver_Riots_June_10_2025.kmz", name: "Denver Riots (June 10, 2025)" },
  { file: "layers/GhostMaps/Incident Response Products for ATAK (KMZs and Documents)/Riot Tracking 2025/California Civil Unrest 2025/Los Angeles Riots 2025/LA Riots_June_10_2025_v3.kmz", name: "LA Riots (June 10, 2025, v3)" },
  { file: "layers/GhostMaps/Incident Response Products for ATAK (KMZs and Documents)/Riot Tracking 2025/California Civil Unrest 2025/Los Angeles Riots 2025/LA Riots_June_12_2025_v1.kmz", name: "LA Riots (June 12, 2025, v1)" },
  { file: "layers/GhostMaps/Incident Response Products for ATAK (KMZs and Documents)/Riot Tracking 2025/California Civil Unrest 2025/Los Angeles Riots 2025/LA Riots_June_8_2025_v2.kmz", name: "LA Riots (June 8, 2025, v2)" },
  { file: "layers/GhostMaps/Incident Response Products for ATAK (KMZs and Documents)/Riot Tracking 2025/California Civil Unrest 2025/Los Angeles Riots 2025/LA Riots_June_8_2025_v3.kmz", name: "LA Riots (June 8, 2025, v3)" },
  { file: "layers/GhostMaps/Incident Response Products for ATAK (KMZs and Documents)/Riot Tracking 2025/California Civil Unrest 2025/Los Angeles Riots 2025/LA Riots_June_8_2025_v4.kmz", name: "LA Riots (June 8, 2025, v4)" },
  { file: "layers/GhostMaps/Incident Response Products for ATAK (KMZs and Documents)/Riot Tracking 2025/California Civil Unrest 2025/Los Angeles Riots 2025/LA Riots_June_9_2025_v1.kmz", name: "LA Riots (June 9, 2025, v1)" },
  { file: "layers/GhostMaps/Incident Response Products for ATAK (KMZs and Documents)/Riot Tracking 2025/California Civil Unrest 2025/Los Angeles Riots 2025/LA Riots_June_10_2025_v2.kmz", name: "LA Riots (June 10, 2025, v2)" },
  { file: "layers/GhostMaps/Incident Response Products for ATAK (KMZs and Documents)/Riot Tracking 2025/California Civil Unrest 2025/Los Angeles Riots 2025/LA Riots_June_10_2025_v1.kmz", name: "LA Riots (June 10, 2025, v1)" }
];

// Layer control
const overlayLayers = {};
const control = L.control.layers(null, overlayLayers, { collapsed: false }).addTo(map);

kmzLayers.forEach(({ file, name }) => {
  const kmz = L.kmzLayer();
  kmz.on('load', function(e) {
    control.addOverlay(e.layer, name);
    // e.layer.addTo(map); // Uncomment to show by default
  });
  kmz.load(file);
}); 