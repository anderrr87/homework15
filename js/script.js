const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true
})


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work__btn').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-contents').forEach(function (e) {
        e.classList.remove('tabs-contents--active')
        document.querySelector(`[data-target='${tab}']`).classList.add('tabs-contents--active');
      })
    })
  })
})


$(function () {
  $(".question-list").accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: false
  });
});


document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".nav").classList.add("active");
})
document.querySelector(".burger__close").addEventListener("click", function () {
  document.querySelector(".nav").classList.remove("active")
})


document.querySelector(".nav__button").addEventListener("click", function () {
  document.querySelector(".form").classList.add("form__active");
})

document.querySelector(".search__close").addEventListener("click", function () {
  document.querySelector(".form").classList.remove("form__active");
})
