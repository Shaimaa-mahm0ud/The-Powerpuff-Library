
const myBooks = [
    { id: "1", title: "Clean Code", author: "Robert C. Martin", category: "Programming" },
    { id: "2", title: "Eloquent JavaScript", author: "Marijn Haverbeke", category: "Programming" },
    { id: "3", title: "Design Patterns", author: "Erich Gamma", category: "Design" }
];


const input = document.querySelector('.searchbox input');
const grid = document.querySelector('.books-grid');


function display(data) {
    if(!grid) return; 
    grid.innerHTML = ''; 
    if (data.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <p> No book were Found .</p>
            </div>
        `;
        return;
    }

    data.forEach(book => {
        grid.innerHTML += `
            <div class="book-item">
                <div class="bookinformation">
                    <span class="dot"></span>
                    <span class="bookname">${book.title}</span>
                </div>
                <button class="details" onclick="borrowBook('${book.id}')">Borrow</button>
                <button class="details" onclick="goToDetails('${book.id}')">Show Details</button>
            </div>
        `;
    });
}


if(input) {
    input.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = myBooks.filter(b => {
            return b.title.toLowerCase().includes(term) || 
                   b.author.toLowerCase().includes(term) || 
                   b.id.toLowerCase().includes(term);
        });

        display(filtered);
    });
}
if(window.location.href.includes('Admin')){
    function goToDetails(bookId) {
 
    window.location.href = `Admin Book Details.html?id=${bookId}`;
}
}
else{
    
}

function goToDetails(bookId) {
 
    window.location.href = `User Book Details.html?id=${bookId}`;
}


display(myBooks);