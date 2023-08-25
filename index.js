//Array to store books
let myLibrary = [];

//Constructor Book Object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

//Function to add book to the library

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
    render();

}

let newBookBtn = document.querySelector("#add-book");

newBookBtn.addEventListener("click", function () {
    //alert("Hello");
    //to be able to display the form after the new button is clicked.

    let bookForm = document.querySelector("#new-form");
    bookForm.style.display = "block";
})

document.querySelector("#new-form").addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
})

//To be able to render the added book to the page

function render() {
    let libraryBook = document.querySelector(".library");
    libraryBook.innerHTML = "";  //reset the book list and enable more books to be added
    

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `
        
               <div class="card-body">
                <div class="card text-center">
                  <h5 class="card-title">${book.title}</h5>
                  <h6 class="card-subtitle mb-2 text muted">${book.author}</h5>
                  <p class="card-text">${book.pages} pages</p>
                  <p class="read-status">${book.read ? "Read": "Not Read Yet"}</p>
                </div>
               </div>
        `
        libraryBook.appendChild(bookEl);
        

    }
}

