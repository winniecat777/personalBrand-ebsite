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