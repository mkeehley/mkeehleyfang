const cards = document.querySelectorAll(".card-content");

let currentCard = 0;

setInterval(() => {
    cards[currentCard].classList.remove("active");

    currentCard = (currentCard + 1) % cards.length;

    cards[currentCard].classList.add("active");
}, 3000);