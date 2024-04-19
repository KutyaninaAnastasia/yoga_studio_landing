//Script for burger-menu
const firstBurgerLine = document.getElementById('first-line');
const secondBurgerLine = document.getElementById('second-line');
const thirdBurgerLine = document.getElementById('third-line');

const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger_list');

function switchBurgerIcon() {
    firstBurgerLine.classList.toggle('burger-icon_line_animation_first-line');
    secondBurgerLine.classList.toggle('burger-icon_line_animation_second-line');
    thirdBurgerLine.classList.toggle('burger-icon_line_animation_third-line');

    burgerMenu.classList.toggle('burger_list_active');
}

burgerIcon.addEventListener('click', switchBurgerIcon);

//Script for directions
const directionPoints = document.querySelectorAll(".direction_point");
const cards = document.querySelectorAll(".card_horizontal");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;

leftArrow.addEventListener("click", () => {
    showCard(currentIndex - 1);
});

rightArrow.addEventListener("click", () => {
    showCard(currentIndex + 1);
});

function showCard(index) {
    cards[currentIndex].classList.remove("active");

    if (index < 0) {
        index = cards.length - 1;
    } else if (index >= cards.length) {
        index = 0;
    }

    cards[index].classList.add("active");
    currentIndex = index;

    directionPoints.forEach((point, i) => {
        if (i === currentIndex) {
            point.classList.add("active");
        } else {
            point.classList.remove("active");
        }
    });
}

cards[currentIndex].classList.add("active");

//Script for btn-up
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

//Script for telephone icon
document.addEventListener("DOMContentLoaded", function() {
    var telephoneButton = document.getElementById("telephone_button");
    var clientFormSection = document.getElementById("client_form");
    telephoneButton.addEventListener("click", function(event) {
        event.preventDefault();
        clientFormSection.scrollIntoView({ behavior: "smooth" });
    });
});
