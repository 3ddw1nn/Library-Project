let myLibrary = [];
// Variables
let bookTitle = "";
let bookAuthor = "";
let bookPages = "";
let bookRead = "";
let bookOwn = "";
const library = document.querySelector(".library");

//Book Constructor
function Book(title, author, pages , read, own,) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.own = own;
}

//Pre-Set Books added
const relativity = new Book ( "Relativity","Albert Einstein", "130 pages","Not Read", "Does not own");
myLibrary.push(relativity);

const thePrince = new Book ( "The Prince","Machiavelli", "100 pages","Read", "Own");
myLibrary.push(thePrince);

//Creates Library HTML
createLibrary();
//For each book, Create Divs for each Book Info
function createLibrary (){
    for(i = 0; i < myLibrary.length ; i++) {

    //Creates a div with a class of Book
    let book = document.createElement("div")
    library.appendChild(book);
    book.classList.add("book");
    book.setAttribute('data-book', i);

    //Creates title divs
    let titleDiv = document.createElement("div");
    titleDiv.classList.add("bookTitle");
    book.appendChild(titleDiv);
    titleDiv.textContent = myLibrary[i].title;
    
    //Creates author divs
    let authorDiv = document.createElement("div");
    authorDiv.classList.add("bookAuthor");
    book.appendChild(authorDiv);
    authorDiv.textContent = myLibrary[i].author;

    //Creates pages divs
    let pagesDiv = document.createElement("div");
    pagesDiv.classList.add("bookPages");
    book.appendChild(pagesDiv);
    pagesDiv.textContent = myLibrary[i].pages;

    //Creates own divs
    let ownDiv = document.createElement("button");
    ownDiv.classList.add("bookOwn");
    ownDiv.classList.add("formButton");
    book.appendChild(ownDiv);
    ownDiv.textContent = myLibrary[i].own;

    //creates read divs
    let readDiv = document.createElement("button");
    readDiv.classList.add("bookRead");
    readDiv.classList.add("formButton");
    book.appendChild(readDiv);
    readDiv.textContent = myLibrary[i].read;
    
    //creates removeButton
    let removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    book.appendChild(removeButton);
    removeButton.textContent = "Remove";

    //Listens for a click and removes book from library div and myLibrary[];
    removeButton.addEventListener('click',() => {
        removeButton.parentNode.parentNode.
        removeChild(removeButton.parentNode);
        // const link = document.querySelector('[data-link="1"]');
        myLibrary.splice(book.dataset.book , 1);
        console.log(myLibrary);       
        })            
    }
}

// readSwitch()
function readSwitch() {
    let allReadDiv = document.querySelectorAll(".bookRead");
    allReadDiv.forEach(eachReadDiv=> {
        if (eachReadDiv.textContent === "Read"){
            eachReadDiv.style.background= "rgb(173, 250, 208)"; //green
        } else {
            eachReadDiv.style.background= "rgb(255, 143, 165)" //red
        }
        eachReadDiv.addEventListener('click',() => {
            if (eachReadDiv.textContent === "Read") {
                eachReadDiv.style.background= "rgb(255, 143, 165)"; //red
                eachReadDiv.textContent = "Not Read";
            }else {
                eachReadDiv.style.background= "rgb(173, 250, 208)"; //green
                eachReadDiv.textContent = "Read";
            }
            console.log(eachReadDiv)
        })
    });
}
function ownSwitch() {
    let allOwnDiv = document.querySelectorAll(".bookOwn");
    allOwnDiv.forEach(eachOwnDiv=> {
        if (eachOwnDiv.textContent === "Own"){
            eachOwnDiv.style.background= "rgb(173, 250, 208)"; //green
        } else {
            eachOwnDiv.style.background= "rgb(255, 143, 165)" //red
        }
        eachOwnDiv.addEventListener('click',() => {
            if (eachOwnDiv.textContent === "Own") {
                eachOwnDiv.style.background= "rgb(255, 143, 165)"; //red
                eachOwnDiv.textContent = "Does not Own";
            }else {
                eachOwnDiv.style.background= "rgb(173, 250, 208)"; //green
                eachOwnDiv.textContent = "Own";
            }
            console.log(eachOwnDiv)
        })
    });
}
ownSwitch()
readSwitch();
console.log(myLibrary, "books in library");

//FORM
//Changes Read Button Color
let formReadDiv = document.querySelector("#formRead");
if (formReadDiv.textContent === "Read"){
    formReadDiv.style.background= "rgb(173, 250, 208)";
} else {
    formReadDiv.style.background= "rgb(255, 143, 165)"
}

//Listens for a click and changes value 
formReadDiv.addEventListener('click',() => {
    if (formReadDiv.textContent === "Not Read") {
        formReadDiv.style.background= "rgb(173, 250, 208)";
        formReadDiv.textContent = "Read";
    }else {
        formReadDiv.style.background= "rgb(255, 143, 165)";
        formReadDiv.textContent = "Not Read";
    }
    console.log(formReadDiv)
})

//Changes Read Button Color
let formOwnDiv = document.querySelector("#formOwn");
if (formOwnDiv.textContent === "Own"){
    formOwnDiv.style.background= "rgb(173, 250, 208)";
} else {
    formOwnDiv.style.background= "rgb(255, 143, 165)"
}

//Listens for a click and changes value 
formOwnDiv.addEventListener('click',() => {
    if (formOwnDiv.textContent === "Does not own") {
        formOwnDiv.style.background= "rgb(173, 250, 208)";
        formOwnDiv.textContent = "Own";
    }else {
        formOwnDiv.style.background= "rgb(255, 143, 165)";
        formOwnDiv.textContent = "Does not own";
    }
    console.log(formOwnDiv)
})

//Selects form
let form = document.querySelector('form');

//Form submit event
let addButton = document.querySelector(".addBookButton");
addButton.addEventListener('click', addBookToLibrary);
// console.log(myLibrary)

//Add book to Library
function addBookToLibrary (){
    //remove library children divs
    let bookList = document.querySelectorAll(".book")
    // console.log(bookList)
    bookList.forEach(eachBook=>{
        library.removeChild(eachBook);
    })

    //Get form Inputs
    let newTitle = document.getElementById('formTitle');
    let newAuthor = document.getElementById('formAuthor');
    let newRead = document.getElementById('formRead');
    let newPages = document.getElementById('formPages');
    let newOwn = document.getElementById('formOwn');

    let newBookItem = new Book
    (newTitle.value, newAuthor.value, newPages.value, newRead.textContent, newOwn.textContent);
    myLibrary.push(newBookItem);

    //recreate library
    createLibrary();
    readSwitch();
    ownSwitch();
    // console.log(myLibrary , "added book");
}
