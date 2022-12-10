const loginBtn = document.querySelector('.js-login')
const modal = document.querySelector('.js-modal')
const loginClose = document.querySelector('.js-close')
const loginContainer = document.querySelector('.js-container')

function showLogin() {
    modal.classList.add('open')
}

function hideLogin() {
    modal.classList.remove('open')
}

loginBtn.addEventListener('click', showLogin)
loginClose.addEventListener('click', hideLogin)
modal.addEventListener('click', hideLogin)
loginContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})