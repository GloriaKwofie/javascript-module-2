/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const allParagragh = document.querySelectorAll('p')
console.log(allParagragh);


const firstDiv = document.querySelector('.site-header')
console.log(firstDiv);

const element = document.querySelector('#jumbotron-text')
console.log(element);

const elementsInside = document.querySelectorAll('p.primary-container')
console.log(elementsInside);



/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const alertBtn = document.querySelector('#alertBtn')
alertBtn.addEventListener('click', ()=>{
    alert('Thanks for visiting Bikes for Refugees!')
} )


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const changeButtonColor = document.querySelector('#bgrChangeBtn')
changeButtonColor.addEventListener('click', ()=>{
const body = document.querySelector('body')
console.log(body);
body.style.backgroundColor = "orange"

})

/*
Task 4
======


When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
    

    const addSomeText = document.querySelector('#addTextBtn')
    addSomeText.addEventListener('click', ()=>{
    const newParagraph = document.createElement('p')
    const newContent = document.createTextNode('LEARN MORE')
    newParagraph.appendChild(newContent)
    console.log(newParagraph);
})





/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const textShdIncrease = document.querySelector('#largerLinksBtn')
textShdIncrease.addEventListener('click', ()=>{
    const text = document.querySelectorAll('a')
    
})


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

const addBtn = document.querySelector('#addArticleBtn')
addBtn.addEventListener('click', ()=>{
    const 
})

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

