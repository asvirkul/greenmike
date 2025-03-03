$(document).ready( function() {
    var map = L.map('map').setView([51.48051616771504, 31.253714682208884], 13);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CartoDB'
    }).addTo(map);
    
    let customIcon = L.icon({
        iconUrl: 'images/maps-and-flags.png', // Ссылка на вашу иконку
        iconSize: [40, 40], // Размер иконки
        iconAnchor: [20, 40], // Точка привязки (центр низа)
        popupAnchor: [0, -40] // Сдвиг текста вверх
    });
    L.marker([51.48051616771504, 31.253714682208884], { icon: customIcon })
    .addTo(map)
    .bindPopup("Кастомний маркер");

    
    var swiper = new Swiper(".swiper", {
        loop: true, 
        effect: "fade", 
        fadeEffect: {
            crossFade: true, // Плавное исчезновение одного слайда перед появлением другого
          },
        speed: 1000,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

})