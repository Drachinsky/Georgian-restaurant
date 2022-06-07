const btnMenu = document.querySelector('.header__btn-menu');
const nav = document.querySelector('.header__nav');

btnMenu.addEventListener('click', function() {
    btnMenu.classList.toggle('header__btn-menu--open');
    nav.classList.toggle('header__nav--open');
});


var swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    direction: getDirection(),
    spaceBetween: 5,
    
    loop: true,
     
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
    },
  
    
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
  