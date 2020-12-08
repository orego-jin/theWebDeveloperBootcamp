const buttons = document.querySelectorAll('.container .buttonContainer button')
const contents = document.querySelectorAll('.container .tabContent')

// Tab Control
function ShowContents (tabIndex){
    //clear
    buttons.forEach(button => 
        {button.style.backgroundColor="" 
         button.style.color="" })
    //set Colors
    buttons[tabIndex].style.backgroundColor='#495057'
    buttons[tabIndex].style.color='white'
    
    //Hide non-selected tabs & show selected tab
    contents.forEach(content => content.style.display = 'none'
        
        // function(content){content.style.display="none"}
    )
    contents[tabIndex].style.display='block'
    contents[tabIndex].style.backgroundColor='#495057'
}

//To-Do list
const projectInput = document.querySelector('.project-input')
const projectButton = document.querySelector('.project-button')
const projectContainer = document.querySelector('.project-container')
// const todoButton = document.querySelector('.todo-button')
// const todoInput = document.querySelector('.todo-input')
// const project = document.querySelector('.project')

// let projectLists = localStorage.getItem('itmes') ? JSON.parse(localStorage.getItem('items')) : []
// let selectedProject = ''

// function save(){
//     localStorage.setItem('items', JSON.stringify(projectLists))
// }

projectButton.addEventListener('click', e =>{
    e.preventDefault()
    // clearProject(e)
    // const projectName = projectInput.value
    // if (projectName == null || projectName === "") return
    // const project = createProjectList(projectName)
    // selectedProject = project.id
    // projectInput.value = null
    // projectLists.push(project)
    // save()  
    if (projectInput.value){      
    addProject()
    }
}) 


projectContainer.addEventListener('click', deleteItem);
projectContainer.addEventListener('click', toggleItem);

// function createProjectList (name) {
//     return {id: Date.now().toString(), name: name, todos: [], complete: false}
// }

// function createTask(name){
//     return {id: Date.now().toString(), name: name, complete: false}
// }


function addProject(){
    // clearProject(projectContainer)
    // projectLists.forEach(project => {    
    const newProject = document.createElement("div")
    newProject.classList.add("project")

    const projectHead = document.createElement("div")
    projectHead.classList.add("project-head")
    newProject.appendChild(projectHead)

    const projectName = document.createElement("div")
    projectName.classList.add("project-name")
    projectName.innerText = projectInput.value
    projectHead.appendChild(projectName)

    const completeButton = document.createElement("button")
    completeButton.innerHTML = '<i class="far fa-check-square"></i>'
    completeButton.classList.add("complete-btn")
    projectHead.appendChild(completeButton)

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>'
    deleteButton.classList.add("p-delete-btn")
    projectHead.appendChild(deleteButton)

    const todoInputContainer = document.createElement("div")
    todoInputContainer.classList.add("todo-input-container")
    newProject.appendChild(todoInputContainer)

    const todoInput = document.createElement("input")
    todoInput.classList.add("todo-input")
    todoInput.type = "text"
    todoInputContainer.appendChild(todoInput)

    const todoButton = document.createElement("button")
    todoButton.innerHTML = '<i class="far fa-plus-square"></i>'
    todoButton.classList.add("todo-button")
    todoInputContainer.appendChild(todoButton)
    
    projectContainer.appendChild(newProject)
    
    projectInput.value =""
    
    // todoButton.addEventListener('click', e =>{
    //     e.preventDefault()
    //     const todoName = todoInput.value
    //     if (todoName == null || todoName === "") return
    //     const todos = createTask(todoName)
    //     todoInput.value = null
    //     projectLists.todos.push(todos)
    //     // save()        
    // }) 
    
    

    todoButton.addEventListener('click', e =>{
        e.preventDefault()
        if (todoInput.value && !projectHead.classList.contains("completed")){

            addTodo(e)
        }
        else {
            todoInput.value = ""    
            }

    });
}

function addTodo(){


    const todoDiv = document.createElement("ul")
    todoDiv.classList.add("todo-div")

    const todoItem = document.createElement("li")
    todoItem.classList.add("todo-item")
    todoItem.innerText = todoInput.value;
    todoDiv.appendChild(todoItem)
    
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="far fa-check-square"></i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>'
    deleteButton.classList.add("delete-btn")
    todoDiv.appendChild(deleteButton)

    // newProject.appendChild(todoDiv)
    
    todoInput.value =""

   
}


function clearProject(e){
    while(e.firstChild){
        e.removeChild(e.firstChild)
    }
}

function deleteItem(e){
    const item = e.target;
    let todo;

    if (item.classList[0] === 'delete-btn') {
        todo = item.parentElement;
    } else if (item.classList[0] === 'p-delete-btn') {
        todo = item.parentElement.parentElement;
    }
    todo.remove();
}

function toggleItem(e) {
    const item = e.target;
    todo.classList.toggle('completed');
}
