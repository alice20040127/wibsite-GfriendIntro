
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

function openAlbumModal(title, imgSrc, songs) {
  document.getElementById('modal-album-title').innerText = title;
  document.getElementById('modal-album-img').src = imgSrc;

  const songList = document.getElementById('modal-song-list');
  songList.innerHTML = '';
  songs.forEach(song => {
    const li = document.createElement('li');
    li.textContent = song;
    li.classList.add('mb-2');
    songList.appendChild(li);
  });

  const modal = new bootstrap.Modal(document.getElementById('albumModal'));
  modal.show();
}
