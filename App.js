const listBooks = document.querySelector("#book-list")

const renderList = (doc) => {
    let li = document.createElement("li")
    let autor = document.createElement("span")
    let titulo = document.createElement("span")

    console.log(doc)
    autor.textContent = doc.author;
    titulo.textContent = doc.title;

    li.appendChild(titulo)
    li.appendChild(autor)
    listBooks.appendChild(li)
}

db.collection("libri-collection")
    .get()
    .then((snapshot) => {
        snapshot.docs.forEach(
            doc => {
                renderList(doc.data())
            }
        )
    }
)

const form = document.querySelector("#add-book-form")

form.addEventListener("submit", () => {
    event.preventDefault()
    alert("Formulário ta como?! Funfando!!")
})