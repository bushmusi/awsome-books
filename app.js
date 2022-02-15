const form = document.getElementById('awesome-form');
const book_coll = []
let count = 0;
function addBooks(value){
    let bookList = document.querySelector('.book-list');
    const item = `
    <div class="book-item">
        <br>
        <label for="name">${value.book_name}</label>
        <br>
        <label for="author">${value.author_name}</label>
        <br>
        <button type="button" id="${count}">Remove</button>
        <hr>
    </div>
    `;
    bookList.innerHTML += item
}

function storeData(value){
    let old_data = localStorage.getItem('book-data');
    if(old_data !== null)
    {
        old_data = JSON.parse(old_data)
    }
    else{
        old_data = []
    }
    old_data.push(value)
    localStorage.setItem('book-data',JSON.stringify(old_data))
}

function fillDatas() {
    let getBooks = localStorage.getItem('book-data');
    getBooks = JSON.parse(getBooks);
    if(getBooks !== null)
    {
        getBooks.forEach((value) => {
            addBooks(value)
        })
    }
}
fillDatas()
form.addEventListener('submit',(event) => {
    event.preventDefault();
    let book_name = form.elements.name.value;
    let author_name = form.elements.author.value;
    let book_obj = {
        book_name,
        author_name,
        count: count
    };
    count++
    book_coll.push(book_obj);
    form.elements.name.value = form.elements.author.value = ''
    addBooks(book_obj)
    storeData(book_obj)
})
