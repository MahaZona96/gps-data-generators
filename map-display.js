// Create a map centered at a specific latitude and longitude
var map = L.map('map').setView([0, 0], 13);

// Add a tile layer (you can use different map providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Replace with your GPS data - latitude and longitude coordinates
var gpsData = [
    [latitude1, longitude1],
    [latitude2, longitude2],
    // Add more data points as needed
];

// Add markers for GPS data points
gpsData.forEach(function (point) {
    L.marker(point).addTo(map);
});
