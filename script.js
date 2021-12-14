let taskList = document.getElementById('lista-tarefas');
let listIten = document.createElement('li');
let addTaskButton = document.getElementById('criar-tarefa');
addTaskButton.addEventListener('click', addListIten);
let addClearButton = document.getElementById('apaga-tudo');
addClearButton.addEventListener('click', clear);
let removeButton = document.getElementById('remover-finalizados');
removeButton.addEventListener('click', removeDone);

function addListIten () {
    let inputTask = document.getElementById('texto-tarefa');
    let task = inputTask.value;
    let listItenClone = listIten.cloneNode();
    listItenClone.innerText = task;
    listItenClone.addEventListener('click', selectListIten);
    listItenClone.addEventListener('dblclick', lineThrough);
    taskList.appendChild(listItenClone);
    inputTask.value = '';
}

function selectListIten (origin) {
    let listItensArray = document.querySelectorAll('li');
    let selectedListIten = origin.target;
    
    for (let index = 0; index < listItensArray.length; index += 1) {
        listItensArray[index].style.backgroundColor = 'white';
    }

    selectedListIten.style.backgroundColor = 'rgb(128, 128, 128)';
}

function lineThrough (origin) {
    let selectedListIten = origin.target;

    if (selectedListIten.className === '') {
        selectedListIten.className = 'completed';
    } else {
        selectedListIten.className = '';
    }
}

function clear () {
    let listItensArray2 = document.querySelectorAll('li');
    for (let index2 = 0; index2 < listItensArray2.length; index2 += 1) {
        taskList.removeChild(taskList.lastElementChild);
    }
}

function removeDone () {
    let listItensArray3 = document.querySelectorAll('li');
    
    for (let index3 = 0; index3 < listItensArray3.length; index3 += 1) {
        if (listItensArray3[index3].className === 'completed') {
            listItensArray3[index3].remove();
        }
    }
}