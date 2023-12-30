const button = document.querySelector(".btn-add")
const empty = document.querySelector(".empty")

button.addEventListener("click", guardar)

function guardar(event) {
    event.preventDefault()
    const list = document.querySelector("ul")
    const input = document.querySelector("input")
    const valor = input.value
    if (valor.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `<p>${valor}</p><a class="btn-delete">X</a>`;
        list.appendChild(li)
        const buttonBorrar = li.querySelector(".btn-delete");
        buttonBorrar.addEventListener("click", () => {
        list.removeChild(li)
        });
    }
    
}

//trim() => quita los espacios del principio y del final