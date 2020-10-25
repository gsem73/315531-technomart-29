const cartButtons = document.querySelectorAll('.card-cart-button');
const confirmPopup = document.querySelector('.confirm-form');
const confirmCloseButton = confirmPopup.querySelector('.modal-close-button');
const orderButton =  confirmPopup.querySelector('.execute-button');
const continueButton = confirmPopup.querySelector('.continue-button');

for(let i=0; i<cartButtons.length; i++) {
  cartButtons[i].addEventListener("click", function (evt) {
    confirmPopup.classList.add("modal-show");
    orderButton.focus();
  });
};

confirmCloseButton.addEventListener("click", function (evt) {
  confirmPopup.classList.remove("modal-show");
});

continueButton.addEventListener("click", function (evt) {
  confirmPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (confirmPopup.classList.contains("modal-show")) {
      confirmPopup.classList.remove("modal-show");
    }
  }
});
