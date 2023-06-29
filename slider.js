const images = document.getElementsByTagName('img')
const prevButton = document.querySelector('.slider-button.prev')
const nextButton = document.querySelector('.slider-button.next')


let currentIndex = 0
function showImage(index) {
    if (index < 0 || index >= images.length) {
        return
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active')
    }

    images[index].classList.add('active')

    if (index === 0) {
        prevButton.classList.add('hidden')
    } 
    else {
        prevButton.classList.remove('hidden')
    }

    if (index === images.length - 1) {
        nextButton.classList.add('hidden')
    } 
    else {
        nextButton.classList.remove('hidden')
    }
}

function showNextImage() {
    currentIndex++
    showImage(currentIndex)
}

function showPrevImage() {
    currentIndex--
    showImage(currentIndex)
}

nextButton.addEventListener('click', showNextImage)
prevButton.addEventListener('click', showPrevImage)