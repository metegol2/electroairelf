// Código para las diapositivas de la sección hero
let currentHeroSlide = 0;
const heroSlides = document.querySelectorAll('.slide');

function changeHeroSlide(direction) {
    heroSlides[currentHeroSlide].classList.remove('active');
    currentHeroSlide = (currentHeroSlide + direction + heroSlides.length) % heroSlides.length;
    heroSlides[currentHeroSlide].classList.add('active');
}

// Inicializar la primera diapositiva como activa
document.addEventListener('DOMContentLoaded', () => {
    heroSlides[currentHeroSlide].classList.add('active');
});

// Código para el lightbox
function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox(event) {
    if (event.target.id === 'lightbox' || event.target.className === 'close cursor') {
        document.getElementById('lightbox').style.display = 'none';
    }
}

let lightboxSlideIndex = 1;
showLightboxSlides(lightboxSlideIndex);

function changeLightboxSlide(n) {
    showLightboxSlides(lightboxSlideIndex += n);
}

function currentLightboxSlide(n) {
    showLightboxSlides(lightboxSlideIndex = n);
}

function showLightboxSlides(n) {
    let i;
    let slides = document.getElementsByClassName('lightbox-slide');
    if (n > slides.length) { lightboxSlideIndex = 1 }
    if (n < 1) { lightboxSlideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[lightboxSlideIndex - 1].style.display = 'block';
}

