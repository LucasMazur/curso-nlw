const map = L.map("mapid").setView([-23.7225827,-46.5938332], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
    iconUrl: "/images/apple-icon-57x57.png",
    iconSize: [40, 50],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({name, id, lat, lng}) {  
  const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 200,
    minHeight: 200
  }).setContent(`${name} <a href="/representante?id=${id}"><img src="/images/arrow-white.svg"></a>`)

  L.marker([lat, lng], {icon})
    .addTo(map)
    .bindPopup(popup)
    console.log(L);
}

const representantesSpan = document.querySelectorAll('.representantes span')
representantesSpan.forEach( span => {
  const representante = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }
  
  addMarker(representante)
})


 