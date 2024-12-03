const sliderContainer = document.getElementById('sliderContainer');
const buttons = document.querySelectorAll('.top-slider-nav-btns');
const cards = document.querySelectorAll('.top-slider-card');

function updateActiveButton() {
  const scrollLeft = sliderContainer.scrollLeft;
  const cardWidth = cards[0].offsetWidth;
  const index = Math.floor(scrollLeft / cardWidth);

  buttons.forEach(btn => btn.classList.remove('active'));

  buttons[index].classList.add('active');
}

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    sliderContainer.scrollTo({
      left: cards[index].offsetLeft,
      behavior: 'smooth'
    });
  });
});

sliderContainer.addEventListener('scroll', updateActiveButton);

updateActiveButton();



const theBestArray = [
  { theBestImg: 'TB2-MP.webp', theBestInfo: "The Best FIFA Men's Player" },
  { theBestImg: 'TB1-WP.webp', theBestInfo: "The Best FIFA Women's Player" },
  { theBestImg: 'TB4-MC.webp', theBestInfo: "The Best FIFA Men's Coach" },
  { theBestImg: 'TB3-WC.webp', theBestInfo: "The Best FIFA Women's Coach" },
  { theBestImg: 'TB6-MG.webp', theBestInfo: "The Best FIFA Men's Goalkeeper" },
  { theBestImg: 'TB5-WG.webp', theBestInfo: "The Best FIFA Women's Goalkeeper" },
  { theBestImg: 'TB7-MARTA.webp', theBestInfo: "FIFA Marta Award" },
  { theBestImg: 'TB8-PUSKAS.webp', theBestInfo: "FIFA Puskás Award" },
  { theBestImg: 'TB9-FAN.webp', theBestInfo: "FIFA Fan Award" },
  { theBestImg: 'TB11-MXI.webp', theBestInfo: "The Best FIFA Men's 11" },
  { theBestImg: 'TB10-WXI.webp', theBestInfo: "The Best FIFA Women's 11" }
];

const theBestSlider = document.querySelector('.vote-for-the-best-slider');

theBestArray.forEach(item => {
  // Create the card div
  const theBestCard = document.createElement('div');
  theBestCard.className = 'vote-for-the-best-card';

  // Create the image element
  const theBestImg = document.createElement('img');
  theBestImg.className = 'vote-for-the-best-card-img';
  theBestImg.src = item.theBestImg;

  // Create the span element
  const theBestInfo = document.createElement('span');
  theBestInfo.className = 'vote-for-the-best-card-info';
  theBestInfo.textContent = item.theBestInfo;

  // Append the image and span to the card
  theBestCard.appendChild(theBestImg);
  theBestCard.appendChild(theBestInfo);

  // Append the card to the slider
  theBestSlider.appendChild(theBestCard);
});