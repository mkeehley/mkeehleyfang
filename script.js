const slides = document.querySelectorAll(".project-slide");
const dots = document.querySelectorAll(".dot");

const nextButton = document.getElementById("nextProject");
const previousButton = document.getElementById("previousProject");

let currentSlide = 0;
let autoRotate;


function showSlide(index) {

    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}


function nextSlide() {
    showSlide(currentSlide + 1);
}


function previousSlide() {
    showSlide(currentSlide - 1);
}


function startAutoRotate() {

    autoRotate = setInterval(() => {
        nextSlide();
    }, 5000);

}


function resetAutoRotate() {

    clearInterval(autoRotate);
    startAutoRotate();

}


nextButton.addEventListener("click", () => {
    nextSlide();
    resetAutoRotate();
});


previousButton.addEventListener("click", () => {
    previousSlide();
    resetAutoRotate();
});


dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        showSlide(index);
        resetAutoRotate();
    });

});


startAutoRotate();
