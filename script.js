const myLibrary = []

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary() {
    let newBook = new Book(document.querySelector('#title').value, document.querySelector('#author').value, document.querySelector('#pages').value, document.querySelector('#book-status').value, )
    myLibrary.push(newBook);
    console.log(myLibrary);
    addBookToDOM(newBook);
};

function addBookToDOM(Book) {
    let newBook = document.createElement('div');
    let grid = document.querySelector('.grid');
    grid.appendChild(newBook);
    newBook.setAttribute('class', 'text-lg border border-gray-300 rounded-xl py-4 flex flex-col items-center justify-center w-4/5 shadow-lg gap-1 flex-wrap')
    newBook.innerHTML = `            
    <div class="font-bold text-lg text-center">${Book.title}</div>
    <div>${Book.author}</div>
    <div>${Book.pages}</div>
    <div class="book-status px-4 py-2 my-2 rounded-lg w-2/3 text-center bg-indigo-200 hover:bg-indigo-100 cursor-pointer">${Book.read}</div>
    <div class="remove px-4 py-2 my-2 rounded-lg w-2/3 text-center bg-gray-100 hover:bg-gray-50 cursor-pointer">remove</div>`
};

const submit = document.querySelector(".submit");
submit.addEventListener("click", () => {
    addBookToLibrary();
    dialog.close();
});

// remove book code 

function removeBook() {

}

// form validation code

function checkInput() {
    let input = document.querySelector('#title').value;
    if (input.length <= 1) {

    }
}

// code for the popup

const dialog = document.querySelector("dialog");
const add = document.querySelector(".add");
const cancel = document.querySelector(".cancel")

add.addEventListener("click", () => {
  dialog.showModal();
});

cancel.addEventListener("click", () => {
  dialog.close();
});

