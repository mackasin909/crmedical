const swiper = new Swiper(".swiperReview", {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 50,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        0 : {
          slidesPerView: 1,
        },
        1110: {
          slidesPerView: 1,
        },
        1120: {
          slidesPerView: 2,
        }
      }
    });