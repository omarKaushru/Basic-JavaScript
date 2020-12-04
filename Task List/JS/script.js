// Define UI element
let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

// define event listener

form.addEventListener('submit',addTask);
taskList.addEventListener('click',removeTask);
clearBtn.addEventListener('click',clearTask);
// define functions

//Add Task
function addTask(e){
    if(taskInput.value===''){
        alert('Add a task!');
    }else{
        //create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value+ " "));
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value= '';

    }
    //stop default form loading
    e.preventDefault();
}

// Remove Task 

function removeTask(e){
    if(e.target.hasAttribute("href")){
        if(confirm("Are you sure?")){
            let ele = e.target.parentElement;
            ele.remove();
            // console.log(ele);
        }   
    }   
}

// Clear Tasks
function clearTask(e){

    // taskList.innerHTML = "";
    
    // faster way
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}