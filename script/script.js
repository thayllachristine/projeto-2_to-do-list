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

if (inputText.value === undefined || inputText.value === null || inputText.value === `` || inputText.value === ` ` | !inputText.value.trim()) {
    console.log(inputText.value, "inputText.value")
    alert ("Escreva uma tarefa :) ")
    inputText.focus();
    return false  
} 

    const div = document.createElement("div")
    div.className = "div__task"
    
    const newTask = document.createElement("div")
    newTask.innerHTML = `<div class="tasklist__div" draggable="true">
    <p class="tasklist__p-none tasklist__p-all"> ${inputText.value} </p>
    <button class="btn btn__delete"><strong>x</strong></button></div>`

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

 //botão selecionar todas as tarefas 
    const selectButton = document.querySelector(".btn__selectall")
    
      selectButton.addEventListener("click", function(event){
      event.preventDefault();

      if (paragTask.classList.contains(`tasklist__p-none`)) {
        paragTask.classList.remove(`tasklist__p-none`)
        paragTask.classList.add(`tasklist__p-checked`)

        paragTask.style.fontStyle = `italic`
        paragTask.style.textDecoration = `line-through`
        paragTask.style.color = `lightgray`
        
    } else {
        return false
      }
      const deleteAllButton = document.querySelector(".btn__deleteall")
   
        //evento de 'clique' para deletar todas as divs 
        deleteAllButton.addEventListener("click", function(event){
        event.preventDefault();
        div.remove();
          
       })
     
   }) 

   

   //start : drag 
   let dragging

   function dragstart (dragstartevent) {
       dragging = dragstartevent.target
   }

   function allowdrop (allowdropevent) {
       allowdropevent.preventDefault()
   }

   function dragenter(dragenterevent) {
        const draggedOver = dragenterevent.target;
        
        if (this.nextElementSibling === null) {
            console.log(tasklist)
            document.querySelector(`.div__task`).appendChild(dragging);
        } else {
            document.querySelector(`.div__task`).insertBefore(dragging, this);
        }
    }

    function ondrop() {
        // console.log('ondrop')
        dragging = null;
    }

    document.querySelector(`.div__task`).addEventListener(`dragover`, allowdrop)
    document.querySelector(`.div__task`).addEventListener(`ondrop`, ondrop)
   


   document.querySelector(`.tasklist__div`).addEventListener(`dragstart`, dragstart)
   document.querySelector(`.tasklist__div`).addEventListener(`dragenter`, dragenter)


})