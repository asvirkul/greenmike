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

const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile-menu"); 
const closeBtn = document.querySelector(".close-menu");

menuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.toggle("active");
});

closeBtn.addEventListener("click", function () {
    menu.classList.remove("active");
});

const header = document.querySelector("header");
let lastScrollTop = 0;
let isHeaderVisible = false;

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        
        if (isHeaderVisible) {
            gsap.to(header, {
                y: "-100%",
                opacity: 0,
                duration: 0.15, 
                ease: "power4.in" 
            });
            isHeaderVisible = false;
        }
    } else {
      
        if (!isHeaderVisible) {
            gsap.to(header, {
                y: "0%",
                opacity: 1,
                duration: 0.3, 
                ease: "power4.out" 
            });
            isHeaderVisible = true;
        }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});

const swiper = new Swiper('.team-swiper', {
    loop: true,
    initialSlide: 0,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
    breakpoints: {
      1400: { slidesPerView: 3 },
      900: { slidesPerView: 3 },
      550: { slidesPerView: 2 },
      0: {slidesPerView: 1}
    },
    on: {
        slideChange(swiperInstance) {
            updateActiveCard(swiperInstance);
          },
          init(swiperInstance) {
            updateActiveCard(swiperInstance);
          }
    }
  });
  
  function updateActiveCard(swiperInstance) {
    const allCards = document.querySelectorAll('.team-card');
    allCards.forEach(card => card.classList.remove('active'));
  
    const activeIndex = swiperInstance.activeIndex;
    const activeSlide = swiperInstance.slides[activeIndex];
  
    if (activeSlide && activeSlide.classList.contains('team-card')) {
      activeSlide.classList.add('active');
    }
  }

  
  
  const monster = document.querySelector('.monster-scroll');

  window.addEventListener('scroll', () => {
    const section = document.querySelector('.icons-history'); 
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    
    let progress = 1 - sectionTop / windowHeight;
    progress = Math.min(Math.max(progress, 0), 1); 
  
   
    const translateY = (1 - progress) * 100;
    monster.style.transform = `translateY(${translateY}%)`;
  });
  
  
  

  Fancybox.bind('[data-fancybox="gallery"]', {
    // Опции
    animated: true,
    dragToClose: true,
  });
  