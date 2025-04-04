


const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'fade', // или другой эффект
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const paragraphs = document.querySelectorAll('.achieve-counter p');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = +entry.target.dataset.delay;
      setTimeout(() => {
        entry.target.classList.remove('hidden');
      }, delay * 150); // задержка по ступеням
    }
  });
}, {
  threshold: 0.5
});

paragraphs.forEach(p => {
  p.classList.add('hidden');
  observer.observe(p);
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

});