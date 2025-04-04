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