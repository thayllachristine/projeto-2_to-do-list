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

if (inputText.value === undefined || inputText.value === null || inputText.value === `` || inputText === ` `) {
    alert ("Escreva uma tarefa")
    inputText.focus();
    return false  
}   

    const div = document.createElement("div")
    div.className = "div__task"
    
    const newTask = document.createElement("div")
    newTask.innerHTML = `<div class="tasklist__div">
    <p> ${inputText.value} </p>
    <button class="btn btn__delete">x</button></div>`

    div.appendChild(newTask)
    tasklist.insertBefore(div, tasklist.childNodes[0]);

    inputText.value = "";

//constante do botão "deletar"



})




