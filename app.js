const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.querySelector('#right-btn');
const image = document.querySelector('.image');
const imageArray = ['image0', 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7'];
const imageContainer = document.querySelector('.container');
const dots = document.querySelectorAll('.dot');
let currentImg = 0;

function setImage(currentImg) {
  if (currentImg < imageArray.length) {
    dots.forEach((dot) => {
      dot.style.backgroundColor = '';
      dot.addEventListener('click', loadImage);
    });
    let current = dots.item(currentImg)
    current.style.backgroundColor = '#5A5A5A';
    image.src = `./images/${imageArray[currentImg]}.jpg`;
  }
}

function loadImage(e) {
  currentImg = Number(e.target.id);
  setImage(Number(e.target.id));
}

function previous() {
  if (currentImg === 0) {
    leftBtn.disabled = true;
  } else {
    leftBtn.disabled = false;
    currentImg--;
    setImage(currentImg);
  }
}

function next() {
  if (currentImg >= imageArray.length) {
    rightBtn.disabled = true;
  } else {
    rightBtn.disabled = false;
    currentImg++;
    setImage(currentImg);
  }
}

setInterval(next, 5000);

// Event Listeners
leftBtn.addEventListener('click', previous);
rightBtn.addEventListener('click', next);

setImage(currentImg);