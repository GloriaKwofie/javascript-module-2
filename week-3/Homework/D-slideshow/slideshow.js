// Write your code here


const img1 ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStbZU9Pjrw3UGOpWx0_P8bWeoK1xxpscAjqg&usqp=CAU'
const img2 ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm66beH407ScpWEiYV5tu5mvPuwAw00kQhUA&usqp=CAU'
const img3 ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpf-v1qZZTs6DR39oxnbnyHYdsZ6mauaFCCA&usqp=CAU'
const img4 ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXb99B8Q5g2KUyP80tdBiMuizZEBep4doaKw&usqp=CAU'
const img5 ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ffdW1LIkXo650whJgWBqPkszQbtfM9EnueCl6Dj7xegRI2rqWiQwcyRl4XYE6iSE_iM&usqp=CAU'


const gamesImages = [img1, img2, img3, img4, img5]
console.log(gamesImages);

const autoPreviousButton = document.querySelector('#auto-back-btn')
const backButton = document.querySelector('#back-btn')
const stopButton = document.querySelector('#stop-btn')
const nextButton = document.querySelector('#foward-btn')
const automaticButton = document.querySelector('#auto-foward-btn')
const selectImage = document.querySelector('#random-images')
const showNumber = document.querySelector('#show-number')

let index = 0
let intervalVar
let delayedInterval = 2000

// adding click event to the buttons

autoPreviousButton.addEventListener('click', autoBackEvent)
backButton.addEventListener('click', backEvent)
stopButton.addEventListener('click', stopEvent)
nextButton.addEventListener('click', fowardEvent)
automaticButton.addEventListener('click', autofowardEvent)

function showImage() {
    selectImage.src = gamesImages[index]
    showNumber.textContent = index

}

function backEvent() {
    index = index == 0 ? gamesImages.length - 1 : index -1
    showImage()
    
}

function fowardEvent() {
    index = index ==  gamesImages.length - 1 ? 0 : index +1
    showImage ()
    
}
function autoBackEvent() {
    resetInt(backEvent)
}

function autofowardEvent() {
    resetInt(fowardEvent)
}

function stopEvent() {
    resetInt()
}

function resetInt(fnc) {
    if (intervalVar) clearInterval(intervalVar)
    if (typeof fnc === 'function') {
        intervalVar = setInterval(fnc, delayedInterval)
    }
}
showImage ()