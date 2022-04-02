/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(person => {
    const nameOfPerson = document.createElement('H1')
    const jobOfPerson = document.createElement('H2')
    nameOfPerson.textContent = person.name
    jobOfPerson.textContent = person.job
    content.appendChild(nameOfPerson)
    content.appendChild(jobOfPerson)
    
  });

}



/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shoppingArray) {
  console.log(shoppingArray);
  let content = document.querySelector('#content')
  const shopingList = document.createElement('ul')
  
  content.appendChild(shopingList)

  shoppingArray.forEach((shoppingItem) => {
    const listItem = document.createElement('li')
    listItem.textContent = shoppingItem
    shopingList.appendChild(listItem)
  })
  //Write your code in here
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  let content = document.querySelector('#content')
  const list =document.createElement('ul')
  content.appendChild(list)
  
  books.forEach((book) => {
    const listItem = document.createElement('li')
    const paragraph = document.createElement('p')
    const image = document.createElement('img')

    image.src = book.url
    paragraph.textContent = `Author: ${book.author } - title: ${book.title}`

    if (book.alreadyRead) {
      listItem.classList.add('alreadyRead')
    } else {
      listItem.classList.add('IHaveNotReadThisBook')
      
    }
    
    listItem.appendChild(paragraph)
    listItem.appendChild(image)
    list.appendChild(listItem)

  } )
  

  //Write your code in here
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    url: 'https://lawsonblake.com/content/images/2020/12/Design-of-Everyday-Things-1920x1280-min.png'

  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    url: 'https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg'
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    url: 'https://images-na.ssl-images-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg'
  }
];

exerciseThree(books);
