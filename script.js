const books = document.querySelector('.grid');
const add = document.querySelector('.add');
const dialog = document.querySelector("dialog");
const cancel = document.querySelector(".cancel");
const submit = document.querySelector(".submit");
const form = document.querySelector('form');
const readStatus = document.querySelector('#book-read').value;

function Book(title,author,pages,read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.id = Math.floor(Math.random() * 1000000)
}

function addBookToLibrary(title,author,pages,read){
    myLibrary.push(new Book(title,author,pages,read));
    saveAndRenderBooks()
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // fix this later
    const data = new FormData(e.target);
    let newBook = {};
    for(let [name,value] of data) {
        if(name==='read'){
            //ignore
        } else {
            newBook[name] = value || "";
        }
    }

    console.log(newBook)
    form.reset();
    addBookToLibrary(newBook.title ,newBook.author ,newBook.pages, newBook.read);
    dialog.close()
});

window.addEventListener('click', (e) => {
    if(e.target == dialog){
        dialog.close()
    }
})

add.addEventListener("click", () => {
  dialog.showModal();
});

cancel.addEventListener("click", () => {
  dialog.close();
});

let myLibrary = []

function addLocalStorage() {
    myLibrary = JSON.parse(localStorage.getItem("library")) || [];
    saveAndRenderBooks();
}

function createBookElement(el, content, className) {
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute('class', className);
    return element
}

function deleteBook(index) {
    myLibrary.splice(index,1);
    saveAndRenderBooks();
}

function isRead(read, book) {
    if (book.read == true) {
        read.textContent = "read";
        read.setAttribute('class' ,'px-4 py-2 my-2 rounded-lg w-2/3 text-center bg-indigo-200 hover:bg-indigo-100 cursor-pointer');
    } else if (book.read == false) {
        read.textContent = "not read";
        read.setAttribute('class' ,'px-4 py-2 my-2 rounded-lg w-2/3 text-center bg-rose-200 hover:bg-rose-100 cursor-pointer');
    }
}

function createReadElement(book) {
    let read = document.createElement('div');
    isRead(read, book);
    return read
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    saveAndRenderBooks();
}

function createBookItem(book, index) {
    const bookItem = document.createElement('div');
    bookItem.setAttribute('id', index)
    bookItem.setAttribute('key', index)
    bookItem.setAttribute('class', 'text-lg border border-gray-300 rounded-xl py-4 flex flex-col items-center justify-center w-4/5 shadow-lg gap-1')
    bookItem.appendChild(createBookElement('h1', `${book.title}`, 'book-title font-bold text-lg'));
    bookItem.appendChild(createBookElement('h1', `${book.author}`, 'book-author'));
    bookItem.appendChild(createBookElement('h1', `${book.pages}`, 'book-pages'));
    bookItem.appendChild(createReadElement(book)).addEventListener('click', () => {
        if (book.read == true) {
            book.read = false;
            console.log(book.read);
        } else if (book.read == false) {
            book.read = true;
            console.log(book.read)
        }
    });
    bookItem.appendChild(createBookElement('div', 'remove', 'px-4 py-2 my-2 rounded-lg w-2/3 text-center bg-gray-100 hover:bg-gray-50 cursor-pointer')).addEventListener(
        'click', () => {
            deleteBook(index);
        }
    );
    books.insertAdjacentElement('afterbegin', bookItem);
}

function renderBooks() {
    books.textContent = "";
    myLibrary.map((book, index) => {
        createBookItem(book, index);
    })
}

function saveAndRenderBooks() {
    localStorage.setItem('library', JSON.stringify(myLibrary));
    renderBooks();
}

addLocalStorage();

/*function Book(title, author, pages, read, id) {
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
*/
