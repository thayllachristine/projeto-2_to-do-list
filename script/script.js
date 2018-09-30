// Declaração de alguns elementos 
const addItem = document.getElementById("addItem")
const tasklist = document.querySelector(".tasklist")
const tasklistShow = document.querySelector(".tasklist-show")

// Declaração da constante do botão "Add"
const addItemButton = document.querySelector(".btn__add-item")
// Evento de 'clique' para adição de novo item
addItemButton.addEventListener("click", function (event) {
    event.preventDefault()

    // Valição do input
    if (addItem.value === undefined ||
        addItem.value === null ||
        addItem.value === `` ||
        addItem.value === ` ` ||
        !addItem.value.trim()) {

        alert("Escreva uma tarefa! :)")
        addItem.focus()

        return false
    }


    const showItem = document.createElement("div")
    showItem.className = "tasklist-show__itens"

    const showItemDetail = document.createElement("div")
    showItemDetail.className = "tasklist-show__details"
    showItemDetail.innerHTML = `
        <p class="tasklist-show__p 
        tasklist-show__p_none 
        tasklist-show__p_checked"> ${addItem.value} </p>
        <button class="tasklist-show__btn__delete-item">x</button>
    `
    showItem.appendChild(showItemDetail)    
    tasklistShow.insertBefore(showItemDetail, tasklistShow.childNodes[0])


    addItem.value = ""


    // Declaração da constante do botão "x" (deletar item)
    const itemDeleteButton = document.querySelector(".tasklist-show__btn__delete-item")
    // Evento de 'clique' para remoção de item
    itemDeleteButton.addEventListener("click", function (event) {
        event.preventDefault()
        showItemDetail.remove()
    })


    // Declaração da constante do <p>
    const itemParag = document.querySelector(".tasklist-show__p_none")
    // Evento de 'clique' para alteração de estilo
    itemParag.onclick = function clickP(event) {
        event.preventDefault()

        if (itemParag.classList.contains("tasklist-show__p_none")) {
            itemParag.classList.remove("tasklist-show__p_none")
            itemParag.classList.add("tasklist-show__p_checked")

            itemParag.style.fontStyle = "italic"
            itemParag.style.textDecoration = "line-through"
            itemParag.style.color = "lightgray"

        } else if (itemParag.classList.contains("tasklist-show__p_checked")) {
            itemParag.classList.remove("tasklist-show__p_checked")
            itemParag.classList.add("tasklist-show__p_none")

            itemParag.style.fontStyle = "normal"
            itemParag.style.textDecoration = "none"
            itemParag.style.color = "black"
        }
    }


    // Declaração da constante do botão "Check All" 
    const checkedAllButton = document.querySelector(".btn__check-all")
    // Evento de 'clique' para selecionar todos os itens
    checkedAllButton.addEventListener("click", function (event) {
        event.preventDefault()

        if (itemParag.classList.contains("tasklist-show__p_none")) {
            itemParag.classList.remove("tasklist-show__p_none")
            itemParag.classList.add("tasklist-show__p_checked")

            itemParag.style.fontStyle = "italic"
            itemParag.style.textDecoration = "line-through"
            itemParag.style.color = "lightgray"

        } else {
            return false
        }

        // Declaração da constante do botão "Delete All"
        const deleteAllButton = document.querySelector(".btn__delete-all")
        // Evento de 'clique' para deletar todas os itens/divs
        deleteAllButton.addEventListener("click", function (event) {
            event.preventDefault()
            showItemDetail.remove()
        })
    })


    // Inserção de atributos os elementos que terão os eventos de drag and drop
    document.querySelector(".tasklist-show__details").setAttribute("draggable", true) // Este elemento será arrastado

    document.querySelector(".tasklist-show").addEventListener("allowdrop", allowdrop) // Atributo que permite onde o drop será realizado
    document.querySelector(".tasklist-show").addEventListener("ondrop", ondrop) // Atributo que indica o início do drop

    document.querySelector(".tasklist-show__details").addEventListener("dragstart", dragstart) // Atributo que indica o início do arrastamento (drag)
    document.querySelector(".tasklist-show__details").addEventListener("dragenter", dragenter) // Atributo que indica que este elemento está sendo arrastado
})


// Eventos : Drag and drop 
let dragging // Esta variável irá "guardar o elemento que será arrastado"

// function para iniciar o arrastamento (drag)
function dragstart(dragstartevent) {
    dragging = dragstartevent.target
}

// function para verificar em que 'posição' o elemento arrastado será jogado
function dragenter(dragenterevent) {
    const draggedOver = dragenterevent.target
    this.style.opacity = "1"
    this.style.cursor = "move"

    if (this.nextElementSibling === null) { // Se o elemento especificado for nulo 
        document.querySelector(".tasklist-show").appendChild(dragging)
    } else {
        // console.log(this) : referência ao elemento que está sendo arrastado
        document.querySelector(".tasklist-show").insertBefore(dragging, this)
    }
}

// function para permitir que o elemento receba o drop
function allowdrop(allowdropevent) {
    allowdropevent.preventDefault()
}


// Início/Fim do drop
function ondrop() {
    dragging = null
}


//FIM <3  from Thaylla & Bruna - Turma 6 {reprograma}