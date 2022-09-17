var input = document.querySelector('input');
var btn = document.querySelector('button');
// selector end

var taskList;
var localdata = localStorage.getItem('localItem');
var localItems = JSON.parse(localdata);
btn.onclick =()=>{
    if (localItems === null) {
        taskList = [];
    }else{
        taskList = localItems;
    }
    taskList.push(input.value);
    input.value = "";
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showList();
}

var showList =()=>{
    let outPut="";
    let todoList = document.querySelector('.todo');
    if (localItems === null) {
        taskList = [];
    }else{
        taskList = localItems;
    }
    taskList.forEach((fd)=>{
        outPut += `<li class="list">${fd}</li>`
    })
    todoList.innerHTML = outPut;
}
showList();
