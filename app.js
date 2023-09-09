const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});


//swiper
const swiper = new Swiper('.swiper', {
  // Optional parametersdirection: 'vertical',
  
  loop: true,

  // If we need pagination
  //pagination: { el: '.swiper-pagination',  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar  scrollbar: {    el: '.swiper-scrollbar',  },
});
