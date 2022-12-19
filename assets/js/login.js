const loginBtn = document.querySelector('.js-login')
const buyBtn = document.querySelector('.js-buy')
const loginModal = document.querySelector('.js-modal-login')
const buyModal = document.querySelector('.js-modal-buy')
const loginClose = document.querySelector('.js-close-login')
const buyClose = document.querySelector('.js-close-buy')
const loginContainer = document.querySelector('.js-container-login')
const buyContainer = document.querySelector('.js-container-buy')

function showLogin() {
    loginModal.classList.add('open')
}

function showBuy() {
    buyModal.classList.add('open')
}

function hideLogin() {
    loginModal.classList.remove('open')
}

function hideBuy() {
    buyModal.classList.remove('open')
}

loginBtn.addEventListener('click', showLogin)
buyBtn.addEventListener('click', showBuy)
loginClose.addEventListener('click', hideLogin)
buyClose.addEventListener('click', hideBuy)
loginModal.addEventListener('click', hideLogin)
buyModal.addEventListener('click', hideBuy)
loginContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})
buyContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})