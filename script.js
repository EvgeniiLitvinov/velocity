const tabsBtns = document.querySelectorAll('.tabs__nav button')
const slides = document.querySelectorAll('.tabs__item')

// скрывать табы и убирать active у кнопок

function hideTabs () {
    slides.forEach(item => item.classList.add('hide'))
    tabsBtns.forEach(item => item.classList.remove('active'))
}

// показывает кнопку активной и переданный номер таба

function showTab (index) {
    slides[index].classList.remove('hide')
    tabsBtns[index].classList.add('active')
}

hideTabs()
showTab(0)



tabsBtns.forEach((btn, index) => btn.addEventListener('click', () => {
    hideTabs()
    showTab(index)
}))

// anchors

const anchors = document.querySelectorAll('.header__nav a')

anchors.forEach(anc => {
    anc.addEventListener('click', function(e) {
        e.preventDefault()

        const id = anc.getAttribute('href')
        const elem = document.querySelector(id)

        window.scroll({
            top: elem.offsetTop - 80,
            behavior: 'smooth'
        })
    })
})


// Модальное окно

const popupBtn = document.querySelector('.link-primary')
const popup = document.querySelector('.modal')
const closeBtn = document.querySelector('.popup-close')
const modalBox = document.querySelector('.modal .modal__box')

popupBtn.addEventListener('click', function() {
    popup.classList.add('open')
})

closeBtn.addEventListener('click', function() {
    popup.classList.remove('open')
})

window.addEventListener('keydown', function(e) {
    if (e.key == 'Escape') {
        popup.classList.remove('open')
    }
})

document.querySelector('.modal .modal__box').addEventListener('click', function(e) {
    e._isClickWithInModal = true
})

popup.addEventListener('click', function (e) {
    if (e._isClickWithInModal) return
    e.currentTarget.classList.remove('open')
})