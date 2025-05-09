const taskinput = document.getElementById('taskinput');
const addtaskbtn = document.getElementById('addtaskbtn');
const tasklist = document.getElementById('tasklist');
const filterallbtn = document.getElementById('filterall');
const filtercompletebtn = document.getElementById('filtercompleted');
const filterpendingbtn = document.getElementById('filterpending');

let tasks =[];
function rendertasks(filteredtasks = tasks){
    tasklist.innerHTML = "";
    filteredtasks.forEach((task,index)=>{
        const li = document.createElement("li");
        li.classList.toggle("completed",task.completed);

        const tasktext = document.createElement("span");
        tasktext.textContent = task.name;
        li.appendChild(tasktext);

        const deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";
        deletebtn.onclick = () => deletetask(index);
        li.appendChild(deletebtn);

        li.onclick = () => toggletaskcomplete(index);

        tasklist.appendChild(li)
    });
}
function addtask() {
    const taskname = taskinput.value.trim();
    if(taskname !==""){
        let task ={
            name:taskname,
            completed:false
        }
        tasks.push(task);
        taskinput.value = "";
        rendertasks();
    }
}
function deletetask(index){
    tasks.splice(index,1);
    rendertasks();
}
function toggletaskcomplete(index){
    tasks[index].completed = ! tasks[index].completed;
    rendertasks();
}

addtaskbtn.addEventListener('click',addtask);

filterallbtn.addEventListener('click',() => rendertasks());
filtercompletebtn.addEventListener('click',()=>rendertasks(tasks.filter(tasks=>tasks.completed)));
filterpendingbtn.addEventListener('click',()=> rendertasks(tasks.filter( tasks=> !tasks.completed)));


rendertasks();