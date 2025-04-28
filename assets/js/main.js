
AOS.init({
    duration: 800,        
    easing: 'ease-in-out', 
    once: true,           
    mirror: false         
  });
  
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.mySwiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      effect: 'fade',  
      fadeEffect: {
        crossFade: true
      }
    });
  }