function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()
const swiper = new Swiper('.swiper__recently', {
  slidesPerView: 2,
  spaceBetween: 60,
  breakpoints: {
    992: {
      slidesPerView: 3,
      // spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.next__btn',
    prevEl: '.prev__btn',
  },
});
const swiper2 = new Swiper('.swiper__logos', {
  slidesPerView: 2,
  spaceBetween: 60,
  breakpoints: {
    768: {
      slidesPerView: 3,
      // spaceBetween: 20
    }
  },
  pagination: {
    el: '.swiper-pagination',
  },
  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
});
