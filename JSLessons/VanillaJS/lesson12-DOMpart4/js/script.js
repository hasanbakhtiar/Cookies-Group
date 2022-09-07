// const text = document.querySelector('h1');
// text.innerHTML = document.querySelector('.wrapper').childNodes[2].firstChild.firstChild.nodeValue;
// text.innerHTML = document.querySelector('.wrapper').lastChild.firstChild.firstChild.nodeValue;
// text.innerHTML = document.querySelector('p').nodeType;
// text.innerHTML = document.querySelector('.wrapper').firstChild.nodeName;




const input = document.querySelector('input');
const todoList = document.querySelector('.todo-list');
const addBtn = document.querySelector('button');
addBtn.onclick = () =>{
    const li  = document.createElement('li');
    li.innerHTML = input.value;
    todoList.appendChild(li);
    input.value = "";
    localStorage.setItem('todo',todoList.innerHTML);
    li.onclick = ()=>{
        li.style.textDecoration = 'line-through'
    }
    li.ondblclick = () =>{
        li.remove();
    }
}
todoList.innerHTML = localStorage.getItem('todo');

addBtn.accessKey = 'w';