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
