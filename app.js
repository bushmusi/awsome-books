const form = document.querySelector('#form')
let counter = 0

form.addEventListener('submit', storeData)

function storeData(e) {
	e.preventDefault()
	let existingBooks = JSON.parse(localStorage.getItem('book-data'))

	const title = form.elements.name.value
	const author = form.elements.author.value
	const book = { title, author, counter }

	existingBooks = existingBooks === null ? [] : existingBooks

	if (!(existingBooks.filter(book => book.title === title && book.author === author).length > 0)) {
		existingBooks.push(book)
	}
	localStorage.setItem('book-data', JSON.stringify(existingBooks))
	addBooks()
}

function addBooks(value) {
	let bookList = document.querySelector('.book-list')
	const item = `
    <div class="book-item">
        <br>
        <label for="name">${value.title}</label>
        <br>
        <label for="author">${value.author}</label>
        <br>
        <button type="button" id="${counter}">Remove</button>
        <hr>
    </div>
    `
	bookList.innerHTML += item
}

function fillDatas() {
	let getBooks = JSON.parse(localStorage.getItem('book-data'))

	if (getBooks !== null && bookList.length > 0) {
		getBooks.forEach(value => {
			addBooks(value)
		})
	}
}
fillDatas()
