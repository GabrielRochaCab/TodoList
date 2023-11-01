const input = document.querySelector('.input-task');
const buttonEvent = document.querySelector('.button-task');
const completeList = document.querySelector('.list-tasks');

buttonEvent.addEventListener('click', addNewIntens)

let listItens = [] 

function addNewIntens(){
    listItens.push({
      task: input.value,
      checked: false  
    });
    input.value = ''
    showTasks()
} 

function showTasks(){
    let newLi = ''
    
    listItens.forEach((tasks, index) =>{
        newLi = newLi + ` 
        <li class="task ${tasks.checked && "done"}">
        <img  src="./img/checked.png" alt="checked" onclick="checkedTask(${index})">
        <p>${tasks.task}</p>
        <img src="/img/trash.png" alt="trash" onclick="deleteTask(${index})">
        </li>`
    })
    
    
    completeList.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(listItens))

}
    
function deleteTask(index){
    listItens.splice(index, 1)
    console.log(index)

    showTasks()

}

function checkedTask(index){
    listItens[index].checked = !listItens[index].checked

    showTasks()

}

function reloadTasks(){
    const tasksLocalStorage = localStorage.getItem('list')

    if(tasksLocalStorage){
        listItens = JSON.parse(tasksLocalStorage)
    }
    

    showTasks()
}
reloadTasks()
