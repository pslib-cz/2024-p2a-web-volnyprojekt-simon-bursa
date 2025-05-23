import Swiper from 'swiper/bundle';
import Clarity from '@microsoft/clarity';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const projectId = "rnzef1c6w2"

Clarity.init(projectId);
