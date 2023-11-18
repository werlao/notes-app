const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll("input-box");

// Carregar anotações
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// Atualizar modificações
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Criar a anotação
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "./src/img/delete.png";

    notesContainer.appendChild(inputBox).appendChild(img);
});

// Deletar a anotação
notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();

    } else if (e.target.tagName === "p") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        });
    }
});

// Saltar linha com o Enter
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});