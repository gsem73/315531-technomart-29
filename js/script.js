const feedbackButton = document.querySelector(".feedback-button");
const feedbackPopup = document.querySelector(".feedback-form");
const closeFeedbackButton = feedbackPopup.querySelector(".modal-close-button");

const feedbackForm = feedbackPopup.querySelector(".feedback");
const userInput = feedbackForm.querySelector(".user-input");
const emailInput = feedbackForm.querySelector(".email-input");
const messageInput = feedbackForm.querySelector(".message-input");

feedbackButton.addEventListener("click", function (evt) {
  feedbackPopup.classList.add("modal-show");
  userInput.focus();
});

closeFeedbackButton.addEventListener("click", function (evt) {
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!userInput.value || !emailInput.value || !messageInput.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  }
});

const mapButton = document.querySelector(".map-link");
const mapPopup = document.querySelector(".geo-form");
const closeMapButton = mapPopup.querySelector(".modal-close-button");

mapButton.addEventListener("click", function (evt) {
  mapPopup.classList.add("modal-show");
});

closeMapButton.addEventListener("click", function (evt) {
  mapPopup.classList.remove("modal-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    };
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

// Промо-слайдер

const promoSection = document.querySelector('.promo-catalog');
// Список кнопок
const promoTab = promoSection.querySelectorAll('.promo-slider-radio');
// Список слайдов
const promoSlide = promoSection.querySelectorAll('.promo-slide');
// Индекс текущего слайда
let promoActiveSlide = 1;
// Кнопки предыдущий и следующий слайд
const prevSlide = promoSection.querySelector('.promo-slider-prev-button');
const nextSlide = promoSection.querySelector('.promo-slider-next-button');

for(let i=0; i<promoTab.length; i++) {
  promoTab[i].addEventListener("change", function (evt) {
    promoSlide[promoActiveSlide].classList.remove('promo-active-slide');
    promoActiveSlide = Number(evt.target.value);
    promoSlide[promoActiveSlide].classList.add('promo-active-slide');
  });
};

prevSlide.addEventListener("click", function (evt) {
  promoSlide[promoActiveSlide].classList.remove('promo-active-slide');
  if ( promoActiveSlide === 0 ) {
    promoActiveSlide = promoSlide.length - 1;
  } else {
    promoActiveSlide--;
  }

  promoSlide[promoActiveSlide].classList.add('promo-active-slide');
  promoTab[promoActiveSlide].checked=true;
});

nextSlide.addEventListener("click", function (evt) {
  promoSlide[promoActiveSlide].classList.remove('promo-active-slide');
  if (promoActiveSlide === promoSlide.length - 1) {
    promoActiveSlide = 0;
  } else {
    promoActiveSlide++;
  }
  promoSlide[promoActiveSlide].classList.add('promo-active-slide');
  promoTab[promoActiveSlide].checked=true;
});


// Слайдер сервисы

const serviceSection = document.querySelector('.service');
// Список кнопок
const serviceTab = serviceSection.querySelectorAll('.service-slider-radio');
// Список слайдов
const serviceSlide = serviceSection.querySelectorAll('.service-slide');
// Индекс текущего слайда
let serviceActiveSlide = 0;

for(let i=0; i<serviceTab.length; i++) {
  serviceTab[i].addEventListener("change", function (evt) {
    serviceSlide[serviceActiveSlide].classList.remove('service-active-slide');
    serviceActiveSlide = Number(evt.target.value);
    serviceSlide[serviceActiveSlide].classList.add('service-active-slide');
  });
};
