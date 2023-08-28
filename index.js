//Array to store books
let myLibrary = [];

//Constructor Book Object that initializes the Book
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Add a function to the Book object using the prototype method

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

//Toggle read function that will enable user to change from read
//to not read on the book display card

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

//Function to add book to the library

function addBookToLibrary() {
  //DOM elements to be able to grab the information
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

let newBookBtn = document.querySelector("#add-book");

newBookBtn.addEventListener("click", function () {
  //alert("Hello");
  //to be able to display the form after the new button is clicked.

  let bookForm = document.querySelector("#new-form");
  bookForm.style.display = "block";
});

document
  .querySelector("#new-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });

//To be able to render the added book to the page

function render() {
  let libraryBook = document.querySelector(".library");
  libraryBook.innerHTML = ""; //reset the book list, enable more books to be added and prevent duplication.

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "library-card");
    bookEl.innerHTML = `
        
        <div class="card-body text-center">
               <div class="card" style="width: 20rem;">
                  <h5 class="card-title">${book.title}</h5>
                  <h6 class="card-subtitle mb-2 text muted"> by ${
                    book.author
                  }</h5>
                  <p class="card-text">${book.pages} pages</p>
                  <p class="read-status">${
                    book.read ? "Read" : "Not Read Yet"
                  }</p>
                  <div class="d-grid gap-2 d-md-block">
                     <button type="button" class="btn btn-danger btn-sm" onclick="removeBook(${i})">Remove</button>
                     <button type="button" class="btn btn-info btn-sm" onclick="toggleRead(${i})">Toggle Read</button>
                  </div>
                  
                </div>      
        </div>
        `;
    libraryBook.appendChild(bookEl);
  }
}

//Function to remove book added to library by index

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}
