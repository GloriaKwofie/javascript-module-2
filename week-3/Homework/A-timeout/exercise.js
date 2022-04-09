/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

function changeBackground() {
    const background = document.querySelector('body')
    background.style.backgroundColor = 'orange' 
}
setTimeout(changeBackground, 5000)

let newColor = 0;
const colors = ['green', 'black', 'yellow', 'pink', 'violet', 'blue']
function changeBackground () {
    const background = document.querySelector('body')
    background.style.backgroundColor = colors[newColor]
    
}