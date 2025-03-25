var map = L.map('map').setView([51.48051616771504, 31.253714682208884], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; CartoDB'
}).addTo(map);

let customIcon = L.icon({
    iconUrl: 'images/maps-and-flags.png', 
    iconSize: [40, 40], 
    iconAnchor: [20, 40], 
    popupAnchor: [0, -40] 
});
L.marker([51.48051616771504, 31.253714682208884], { icon: customIcon })
.addTo(map)
.bindPopup("Кастомний маркер");