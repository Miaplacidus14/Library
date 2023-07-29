let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary () {
    const form = document.querySelector('form')
    form.style.zIndex = "1000"
    const div1 = document.createElement('div');
    div1.classList.add("total");
    form.appendChild(div1)
    for (let i = 0; i < 4; i++) {
        const div = document.createElement('div');
        div.classList.add('form');
        const input = document.createElement("input");
        const label = document.createElement("label");
        if (i === 0) {
            input.setAttribute('type', 'text');
     
            label.setAttribute("for", "title");
            label.textContent = "Title :"
            input.setAttribute('name', 'title');
        } else if (i === 1) {
            input.setAttribute('type', 'text');
            label.setAttribute("for", "author");
            label.textContent = "Author :"
            input.setAttribute('name', 'author');   
        } else if (i === 2) {
            input.setAttribute('type', 'number');
            label.setAttribute("for", "pages");
            label.textContent = "Number of pages :"
            input.setAttribute('name', 'pages');
        } else {
            input.setAttribute('name', 'read');
            input.setAttribute('type', 'checkbox');
            label.setAttribute("for", "read");
            label.textContent = "Read ?"
            div.setAttribute('id', 'number');
            div.appendChild(input);
            div.appendChild(label);
            div1.appendChild(div);
            break
        }
        div.appendChild(label);
        div.appendChild(input);
        div1.appendChild(div)
    }
    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.textContent = "Valider";
    div1.appendChild(button);
    console.log(myLibrary);
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const title = e.target.title.value;
        const author = e.target.author.value;
        const pages = e.target.pages.value;
        const read = e.target.read.checked;
        myLibrary.unshift(new Book(title, author, pages, read));
        console.log(myLibrary);
        div1.remove();
        addToPage();
        form.style.zIndex = "-1000";
    });
}

function addToPage () {
    const library = document.querySelector('.library');
    const card = document.createElement('div');
    card.classList.add("card");
    library.appendChild(card);
    
    for (const key in myLibrary[0]) {
        if (key === 'title') {
            const title = document.createElement('h1');
            title.textContent = `${myLibrary[0].title}`
            card.appendChild(title)
        } else {
            const paragraph = document.createElement('p');
            paragraph.textContent = `${myLibrary[0][`${key}`]}`;
            card.appendChild(paragraph);
        }
    }
}




