// Write your code here


const img1 ='https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
const img2 ='https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGFwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
const img3 ='https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
const img4 ='https://images.unsplash.com/photo-1622495893726-f1478dcebc03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxoYXBweXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
const img5 ='https://images.unsplash.com/photo-1517840933437-c41356892b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE0fHxoYXBweXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'


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