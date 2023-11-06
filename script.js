const addBookModal = document.querySelector('#addBookModal');
const bookList = document.querySelector('#books-list');
const addBtn = document.querySelector('#addBtn');
const addBookBtn = document.querySelector('#addBookBtn');
const cancelBtn = document.querySelector('#cancelBtn');

addBtn.addEventListener('click', showModal);
addBookBtn.addEventListener('click',addBook);
cancelBtn.addEventListener('click', hideModal);

function Book() {
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const pages = document.querySelector('#book-pages').value;
  const read = document.querySelector('#book-read').checked ? 'Read' : 'Not read';
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function showModal() {
  addBookModal.style.display = 'flex';
}

function hideModal() {
  addBookModal.style.display = 'none';
}

function resetModalForm() {
  title.value = '';
  author.value = '';
  pages.value = '';
  read = false;
}
  
function addBook() {
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book');

  const addedBook = new Book();
  bookDiv.innerHTML = `
    <h3>${addedBook.title}</h3>
    <p>Author: ${addedBook.author}</p>
    <p>Pages: ${addedBook.pages}</p>
    <p>Status: ${addedBook.read}</p>
  `;
  bookList.appendChild(bookDiv);

  hideModal();
  resetModalForm();
}
  
