import Swiper from 'swiper'
import 'swiper/css'

const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay:{
        delay: 2000
    },
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
  
    fadeEffect:{
        crossFade: true
    }
});