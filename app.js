const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.querySelector('#right-btn');
const image = document.querySelector('.image');
const imageArray = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8'];
const imageContainer = document.querySelector('.container');
let currentImg = 0;


function previous() {
  if (currentImg === 1) {
    leftBtn.disabled = true;
  } else {
    leftBtn.disabled = false;
    imageArray[currentImg--];
    image.src = `./images/image${currentImg}.jpg`;
    console.log(currentImg)
  }
}

function next() {
  if (currentImg === 0) {
    imageArray[currentImg++]
  }
  if (currentImg < imageArray.length) {
    rightBtn.disabled = false;
    imageArray[currentImg++];
    image.src = `./images/image${currentImg}.jpg`;
    image
  } else {
    rightBtn.disabled = true;
  }
}

// Event Listeners
leftBtn.addEventListener('click', previous);
rightBtn.addEventListener('click', next);