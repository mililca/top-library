const myLibrary = []

function Book() {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

function addBookToLibrary() {
    myLibrary.push({
        "title": `${document.querySelector('#title').value}`,
        "author": `${document.querySelector('#author').value}`,
        "pages": `${document.querySelector('#pages').value}`,
        "read": `${document.querySelector('#book-status').value}`
    },);
    console.log(myLibrary)
    let newBook = document.createElement('div');
    let grid = document.querySelector('.grid');
    grid.appendChild(newBook);
    newBook.setAttribute('class', 'text-lg border border-gray-300 rounded-xl py-4 flex flex-col items-center justify-center w-4/5 shadow-lg gap-1')
    newBook.innerHTML = `            
    <div class="font-bold text-lg">${document.querySelector('#title').value}</div>
    <div>${document.querySelector('#author').value}</div>
    <div>${document.querySelector('#pages').value}</div>
    <div class="px-4 py-2 my-2 rounded-lg w-2/3 text-center bg-indigo-200 hover:bg-indigo-100 cursor-pointer">${document.querySelector('#book-status').value}</div>
    <div class="px-4 py-2 my-2 rounded-lg w-2/3 text-center bg-gray-100 hover:bg-gray-50 cursor-pointer">remove</div>`
};

const submit = document.querySelector(".submit");
submit.addEventListener("click", () => {
    addBookToLibrary();
    dialog.close();
});

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

