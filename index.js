let slideIndex = 0;

function showSlides() {
    const slides = document.querySelector(".slides");
    const slideWidth = document.querySelector(".slides img").clientWidth;
    slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

function nextSlide() {
    const slides = document.querySelectorAll(".slides img");
    if (slideIndex < slides.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    showSlides();
}

function prevSlide() {
    const slides = document.querySelectorAll(".slides img");
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

showSlides();
