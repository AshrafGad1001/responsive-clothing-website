const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*Show Menu*/
if (navToggle) {
    navToggle.addEventListener('click', function () {
        navMenu.classList.add('show-menu');
    })
}
/*hidden Menu*/
if (navClose) {
    navClose.addEventListener('click', function () {
        navMenu.classList.remove('show-menu');
    })
}
/* Remove Menu From Mobile */

const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*
- link :https://swiperjs.com/get-started#download-assets
- 
*/
let swiperHome = new Swiper('.home__swiper', {

    loop: true,
    grapCursor: true,
    slidesPreView: 'auto',
  // Navigation arrows
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        330: {
            slidesPerView: 1,
            centeredSlides:'auto',
        },
        768: {
            slidesPerView: 3,
            centeredSlides:'auto',
        },
        1152: {
            slidesPerView: 3,
            centeredSlides: 'auto',
            spaceBetween: -64,
        }
    }

});


const bgHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header');
}
window.addEventListener('scroll', bgHeader)




// --------Scroll Reveal Animation----------------//

const sr = ScrollReveal({
    origin: 'top',
    distance: '15px',
    duration: 2500,
    reset:true,
})
sr.reveal(`.home__swiper`);
sr.reveal(`.home__circle`, {scale:1.5,delay:300});
sr.reveal(`.home__subcircle`, {scale:1.5,delay:500});
sr.reveal(`.home__title`, {scale:1,origin:'bottom',delay:1200});
sr.reveal(`.swiper-button-prev ,.swiper-button-next`, {origin:'bottom'});