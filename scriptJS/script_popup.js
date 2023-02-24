
let loginButton = document.querySelector('.login-link');
let loginPopUp = document.querySelector('.popup-box');

loginButton.addEventListener('click', showPopUp);

function showPopUp(evt) {
    evt.preventDefault();
    loginPopUp.classList.toggle('show-popup');   
}

