const buyBtn = document.querySelector('.js-buy')
const buyModal = document.querySelector('.js-modal-buy')
const buyClose = document.querySelector('.js-close-buy')
const buyContainer = document.querySelector('.js-container-buy')

function showBuy() {
    buyModal.classList.add('open')
}

function hideBuy() {
    buyModal.classList.remove('open')
}

buyBtn.addEventListener('click', showBuy)
buyClose.addEventListener('click', hideBuy)
buyModal.addEventListener('click', hideBuy)
buyContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})