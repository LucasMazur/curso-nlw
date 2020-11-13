const map = L.map('mapid').setView([-23.7225827,-46.5938332], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
    iconUrl: "/images/apple-icon-57x57.png",
    iconSize: [40, 50],
    iconAnchor: [29, 68]
})

let marker;

map.on('click', (event) => {
   const lat = event.latlng.lat;
   const lng = event.latlng.lng;

   document.querySelector('[name=lat]').value = lat;
   document.querySelector('[name=lng]').value = lng;

   marker && map.removeLayer(marker)

   marker = L.marker([lat, lng], { icon })
   .addTo(map)
})


function addPhotoField() {
   // pegar o container de fotos #images
   const container = document.querySelector('#images')
   // pegar o container para duplicar .new-iamge
   const fieldsContainer = document.querySelectorAll('.new-upload')
   // realizar o clone da última imagem selecionada
   const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
   // verificar se o campo está vazio, se sim não adicionar ao container de imagens.
   const input = newFieldContainer.children[0]

   if(input.value == "") {
      return
   }
   input.value = ""
   // adicionar o clone ao container de #images
   container.appendChild(newFieldContainer)
}

function deleteField(event) {
   const span = event.currentTarget

   const fieldsContainer = document.querySelectorAll('.new-upload')

   if(fieldsContainer.length < 2) {
      // limpar o valor
      span.parentNode.children[0].value = ""
      return
   }
   // deletar o campo
   span.parentNode.remove();
}

// select yer or no
function confirmation(event) {
   // retirar a class .active dos botões
   document.querySelectorAll(".button-select button")
   .forEach((button) => button.classList.remove('active','activeNo'))
   // pegar o botão clicado
   const button = event.currentTarget
   // colocar a class no botão clicado
   if (button.dataset.value == "1") {
      button.classList.add('active')
   } else {
      button.classList.add('activeNo')
   }
   // atualizar o input hidden com o valor selecionado
   const input = document.querySelector('[name="open_on_weekends"]')
   // verificar se sim ou não
   input.value = button.dataset.value
}