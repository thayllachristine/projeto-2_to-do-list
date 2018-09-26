// constantes dos elementos 
const inputText = document.getElementById("inputText")
const list = document.querySelector(".list")
const tasklist = document.querySelector(".tasklist")

//constante do botão "Adicionar tarefa"
const addButton = document.querySelector(".btn__add")

//evento de 'clique' 
addButton.addEventListener("click", function(event){
    event.preventDefault();

//validação do input

if (inputText.value === undefined || inputText.value === null || inputText.value === `` || inputText.value === ` `) {
    alert ("Escreva uma tarefa")
    inputText.focus();
    return false  
}   

    const div = document.createElement("div")
    div.className = "div__task"
    
    const newTask = document.createElement("div")
    newTask.innerHTML = `<div class="tasklist__div">
    <p class="tasklist__p-none"> ${inputText.value} </p>
    <button class="btn btn__delete">x</button></div>`

    div.appendChild(newTask)
    tasklist.insertBefore(div, tasklist.childNodes[0]);

    inputText.value = "";
    
    //constante do botão DELETAR
    
    const deleteButton = document.querySelector(".btn__delete")
    
    //evento de 'clique' 
    deleteButton.addEventListener("click", function(event){
        event.preventDefault();
        div.remove();
    })


    const paragTask = document.querySelector(`.tasklist__p-none`) 
    paragTask.onclick = function click_p(event){
        event.preventDefault()

        if (paragTask.classList.contains(`tasklist__p-none`)) {
            paragTask.classList.remove(`tasklist__p-none`)
            paragTask.classList.add(`tasklist__p-checked`)

            paragTask.style.fontStyle = `italic`
            paragTask.style.textDecoration = `line-through`
            paragTask.style.color = `lightgray`
            
        } else {
            paragTask.classList.remove(`tasklist__p-checked`)
            paragTask.classList.add(`tasklist__p-none`)

            paragTask.style.fontStyle = `normal`
            paragTask.style.textDecoration = `none`
            paragTask.style.color = `black`
        }
    }
  
    

})





