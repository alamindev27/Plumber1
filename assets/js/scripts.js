// Initialize Lightbox
const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});

// Change Navbar background on scroll
window.onscroll = function () {
    var nav = document.querySelector('.navbar');
    var blur = document.querySelector('.navbar .collapse.navbar-collapse');
    if (window.pageYOffset > 50) {
        nav.classList.add('scrolled');
        blur.classList.remove('blur');
    } else {
        nav.classList.remove('scrolled');
        blur.classList.add('blur');
    }
};

// swipper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




// Hero Slider
new Swiper(".heroSwiper", {
    loop: true,
    autoplay: { delay: 5000 },
    pagination: { el: ".hero-pagination", clickable: true }
});