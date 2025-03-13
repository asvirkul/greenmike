$(document).ready( function() {
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

    
    var swiper = new Swiper(".swiper", {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: false, 
        on: {
            init: function () {
                let paginationContainer = document.querySelector(".pagination-dots");
                paginationContainer.innerHTML = ""; 
                this.slides.forEach((_, index) => {
                    let bullet = document.createElement("span");
                    bullet.classList.add("custom-bullet");
                    if (index === 0) bullet.classList.add("active"); 
                    paginationContainer.appendChild(bullet);
                });
            },
            slideChange: function () {
                let bullets = document.querySelectorAll(".custom-bullet");
                bullets.forEach((bullet, index) => {
                    bullet.classList.toggle("active", index === this.realIndex);
                });
            },
        },
    });

    gsap.utils.toArray(".branch").forEach((leaf) => {
        gsap.to(leaf, {
            rotation: gsap.utils.random(-5, 5), 
            x: gsap.utils.random(-2, 2),       
            yoyo: true,
            repeat: -1,
            duration: gsap.utils.random(1.5, 3), 
            ease: "sine.inOut",
            delay: gsap.utils.random(0, 1) 
        });
    });
    
    document.addEventListener("mousemove", (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
    
        document.querySelectorAll(".footer-animation-object").forEach((element) => {
            const { left, top, width, height } = element.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
    
            
            const deltaX = mouseX - centerX;
            const deltaY = mouseY - centerY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
            
            const radius = 350;
    
            if (distance < radius) {

                const strength = (radius - distance) / radius;
                const moveX = (deltaX / distance) * strength * 10; 
                const moveY = (deltaY / distance) * strength * 10;
    
                gsap.to(element, {
                    x: -moveX,
                    y: -moveY,
                    rotation: moveX * 2, 
                    duration: 0.3,
                    ease: "power2.out",
                });
            } else {
                
                gsap.to(element, {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    duration: 1.2,
                    ease: "elastic.out(1, 0.3)",
                });
            }
        });
    });

        gsap.from(".hero-map-wrapper > img", {
            x: -200,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.3
        });
    
        

            const menuBtn = document.querySelector(".header-mobile-menu");
            const menu = document.querySelector(".mobile-menu");
        
            menuBtn.addEventListener("click", function () {
                menuBtn.classList.toggle("active");
                menu.classList.toggle("active");
            });
        
            // Закрытие меню при клике на ссылку
            document.querySelectorAll(".mobile-menu a").forEach(link => {
                link.addEventListener("click", function () {
                    menuBtn.classList.remove("active");
                    menu.classList.remove("active");
                });
            });

        

})