const body = document.querySelector("body");

const RANDOM_NUM = 5;

function paintImg(imageNum) {
  const image = new Image();
  image.src = `./img/${imageNum + 1}.jpg`;
  image.classList.add("bgImg");
  body.prepend(image);
}

function randomNumber() {
  const number = Math.floor(Math.random() * RANDOM_NUM);
  return number;
}

function init() {
  const imageNumber = randomNumber();
  paintImg(imageNumber);
}

init();
