import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

// header btn
$('.btn').click(function() {
  $('.btn').toggleClass('btn-active');
  $('.hamburger-icon').toggleClass('close');
  $('.closure').toggleClass('close');
  $('menu').toggleClass('close');
})

// swiper
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grid: {
    rows: 3,
  },
  breakpoints: {
    768: {      
      grid: {
        rows: 1,
      },
      slidesPerView: 3,
      spaceBetween: 24,
    }
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  }
});