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