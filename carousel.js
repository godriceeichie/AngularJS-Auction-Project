const heroSwiper = new Swiper('.hero-swiper', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 5,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    spaceBetween: 10,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      767: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1100: {
        slidesPerView: 5,
        spaceBetween: 10
      }
    },

    transition: {
      name: 'carousel-animation',
      duration: 300,
      easing: 'ease-in-out'
    },

    scrollbar: {
      el: '.swiper-scollbar',
      hide: true
    },
    on: {
      
    }
  });

heroSwiper.autoplay.start()

const upcomingAuctionSwiper = new Swiper('.upcoming-auction-swiper', {
  // Optional parameters
  loop: true,

  spaceBetween: 24,

  slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true
  },
});