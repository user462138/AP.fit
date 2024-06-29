let map = L.map('map').setView([51.23009, 4.41616], 17);
let marker = L.marker([51.23009, 4.41616]).addTo(map);

let circle = L.circle([51.23009, 4.41616], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5
}).addTo(map);

let polygon = L.polygon([
    [51.23041, 4.4155],
    [51.23041, 4.41675],
    [51.22991, 4.41675],
    [51.22991, 4.4155],
]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
marker.bindPopup("<b>AP.FIT-Hogeschool</b><br>Ellermanstraat 33").openPopup();