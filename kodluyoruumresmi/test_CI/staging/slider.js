const leftArrow = document.querySelector(".slider-arrow.left");
const rightArrow = document.querySelector(".slider-arrow.right");

const sliderCards = document.querySelectorAll(".slider-card");
let activeCard = document.querySelector(".slider-card.active");

const activateCard = (e) => {
  let activeCard = document.querySelector(".slider-card.active");
  
  const card = e.target;
  let bookmark = card.querySelector('.bookmark');

  if (card.parentElement !== activeCard) {
    activeCard.classList.remove("active");
    let activeBookmark = activeCard.querySelector('.bookmark');
    activeBookmark.classList.toggle('active')
    console.log((activeCard.firstElementChild.style.opactiy = "0"));
  } else {
    return;
  }

  bookmark.classList.add('active');
  e.target.classList.add("active");
  card.firstElementChild.style.opacity = "100%";
};

sliderCards.forEach((c) => c.addEventListener("click", activateCard));

const sliderCardsArr = Array.from(sliderCards);
let activeCardIx = 0;

leftArrow.addEventListener("click", (e) => {
  let activeCardElem = sliderCardsArr.filter(function (c, i) {
    if (c.classList.contains("active")) {
      activeCardIx = i;
    }
    return c.classList.contains("active");
  });
  let bookmark = activeCardElem[0].querySelector('.bookmark');


  activeCardElem[0].classList.remove("active");
  bookmark.classList.toggle('active')

  if (activeCardIx === 0) {
    activeCardIx = 4;
  } else {
    activeCardIx--;
  }

  const nextCard = sliderCards[activeCardIx];

  const nextBookmark = sliderCards[activeCardIx].querySelector('.bookmark')
  nextBookmark.classList.toggle('active');
  nextCard.classList.add("active");
});

rightArrow.addEventListener("click", (e) => {
  let activeCardElem = sliderCardsArr.filter(function (c, i) {
    if (c.classList.contains("active")) {
      activeCardIx = i;
    }
    return c.classList.contains("active");
  });

  let bookmark = activeCardElem[0].querySelector('.bookmark');

  activeCardElem[0].classList.remove("active");
  bookmark.classList.toggle('active')

  if (activeCardIx === 4) {
    activeCardIx = 0;
  } else {
    activeCardIx++;
  }

  const nextCard = sliderCards[activeCardIx];
  const nextBookmark = sliderCards[activeCardIx].querySelector('.bookmark')
  nextBookmark.classList.toggle('active');

  nextCard.classList.add("active");
});

function addBookmark() {
  const shape  = document.createElement('div');
  
}
