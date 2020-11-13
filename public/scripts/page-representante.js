const option = {
    dragging: false, 
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//get values from html
const spanLat = document.querySelector('span[data-lat]').dataset.lat
const spanLng = document.querySelector('span[data-lng]').dataset.lng

const map = L.map('mapid', option).setView([spanLat,spanLng], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/apple-icon-57x57.png",
    iconSize: [40, 50],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create and add makerer
L.marker([spanLat, spanLng], {icon}) 
  .addTo(map)

// image gallery
  function selectImage(event) {
     const button = event.currentTarget

     const buttons = document.querySelectorAll(".images button")
     /* buttons.forEach((button) +=> {
        button.classList.remove("active")
     })*/
     buttons.forEach(removeActiveClass)

     function removeActiveClass(button) {
        button.classList.remove("active")
     }

     button.classList.add('active')

     const image = button.children[0]
     const imageContainer = document.querySelector(".representante-details > img")

     imageContainer.src = image.src

  }