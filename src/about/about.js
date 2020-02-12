import "./about.css";
import Glide from '@glidejs/glide';

new Glide('.glide', {
    // type: 'slider',
    // startAt: 0,
    // perView: 3.5,
    type: 'carousel',
    perView: 3.4,
    focusAt: 'center',
    breakpoints: {
      1439: {
        perView: 2.2,
        focusAt: 1,
      },
      767: {
        perView: 1,
        focusAt: 1     }
    }
  }).mount()