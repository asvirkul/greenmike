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