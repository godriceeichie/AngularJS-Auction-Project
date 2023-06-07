// // import Swiper from 'swiper'
// // import 'swiper/css'

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     autoplay:{
//         delay: 2000
//     },

//     direction: 'horizontal',

//     loop: true,

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     effect: 'fade',
  
//     fadeEffect:{
//         crossFade: true
//     }
// });

const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    transition: {
      name: 'carousel-animation',
      duration: 300,
      easing: 'ease-in-out'
    },

    scrollbar: {
      el: '.swiper-scollbar',
      hide: true,
    },
  });

    