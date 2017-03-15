
const map = L.map('map');
map.setView([60, 30], 11);
map.addLayer(
  new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
);

fetch('/data.json')
  .then(r => r.json())
  .then(data => {

    Object.values(data.stops).forEach(s => {
      L.circleMarker([s.lat, s.lon], {
        stroke: false,
        color: 'navy',
        fillOpacity: 0.8,
        radius: 5,
      }).addTo(map);
    });

    Object.values(data.routes).forEach(r => {
      Object.values(r.trips).forEach(t => {

        L.polyline(t.shape)
          .addTo(map);
      });
    });
  });
