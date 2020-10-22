const feedbackButton = document.querySelector(".feedback-button");
const feedbackPopup = document.querySelector(".feedback-form");
const closeButton = feedbackPopup.querySelector(".modal-close-button");

const feedbackForm = feedbackPopup.querySelector(".feedback");

const userInput = feedbackForm.querySelector(".user-input");
const emailInput = feedbackForm.querySelector(".email-input");
const messageInput = feedbackForm.querySelector(".message-input");

feedbackButton.addEventListener("click", function (evt) {
  feedbackPopup.classList.add("modal-show");
  userInput.focus();
});

closeButton.addEventListener("click", function (evt) {
  feedbackPopup.classList.remove("modal-show");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!userInput.value || !emailInput.value || !messageInput.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
    }
  }
});
