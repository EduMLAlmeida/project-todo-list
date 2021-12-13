let taskList = document.getElementById('lista-tarefas');
let listIten = document.createElement('li');
let addTaskButton = document.getElementById('criar-tarefa');

function addListIten () {
    let inputTask = document.getElementById('texto-tarefa');
    let task = inputTask.value;
    let listItenClone = listIten.cloneNode();
    listItenClone.innerText = task;
    taskList.appendChild(listItenClone);
    inputTask.value = '';
}

addTaskButton.addEventListener('click', addListIten);