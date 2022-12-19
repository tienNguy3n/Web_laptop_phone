const loginBtn = document.querySelector('.js-login')
const loginModal = document.querySelector('.js-modal-login')
const loginClose = document.querySelector('.js-close-login')
const loginContainer = document.querySelector('.js-container-login')


function showLogin() {
    loginModal.classList.add('open')
}

function hideLogin() {
    loginModal.classList.remove('open')
}

loginBtn.addEventListener('click', showLogin)
loginClose.addEventListener('click', hideLogin)
loginModal.addEventListener('click', hideLogin)
loginContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})