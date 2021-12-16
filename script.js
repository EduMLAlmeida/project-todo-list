let taskList = document.getElementById('lista-tarefas');
let listIten = document.createElement('li');
let addTaskButton = document.getElementById('criar-tarefa');
// salvar tarefas no local storage quando criadas
// addTaskButton.addEventListener('click', storeListIten);
addTaskButton.addEventListener('click', addListIten);
let addClearButton = document.getElementById('apaga-tudo');
addClearButton.addEventListener('click', clear);
let removeButton = document.getElementById('remover-finalizados');
removeButton.addEventListener('click', removeDone);
let saveButton = document.getElementById('salvar-tarefas');
saveButton.addEventListener('click', storeListIten);
let moveUpButton = document.getElementById('mover-cima');
moveUpButton.addEventListener('click', moveUp);
let moveDownButton = document.getElementById('mover-baixo');
moveDownButton.addEventListener('click', moveDown);
let removeSelectedButton = document.getElementById('remover-selecionado');
removeSelectedButton.addEventListener('click', removeSelected);

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
        listItensArray[index].classList.remove('selected');
    }

    selectedListIten.classList.add('selected');
}

function lineThrough (origin) {
    let selectedListIten = origin.target;

    if (selectedListIten.matches('.completed')) {
        selectedListIten.classList.remove('completed');
    } else {
        selectedListIten.classList.add('completed');
    }
}

function clear () {
    let listItensArray2 = document.querySelectorAll('li');
    for (let index2 = 0; index2 < listItensArray2.length; index2 += 1) {
        taskList.removeChild(taskList.lastElementChild);
    }
}

//Comandos para utilizar local storage na função abaixo retirados de https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/b332393f-7548-4075-83e3-f632735efb95/conteudos/e90b472b-e79b-4b29-9979-8222daff0d70/local-e-session-storage/2ac29f5c-c36e-473d-8546-6fb18340e55e?use_case=next_button

function removeDone () {
    let listItensArray3 = document.querySelectorAll('li');

    // excluir tarefas do local storage quando excluidas da página
    // let listLength = listItensArray3.length
    // for (let index3 = 0; index3 < listLength; index3 += 1) {
    //     let invertedIndex = ((listLength - index3) - 1);
    //     console.log(invertedIndex);
    //     if (listItensArray3[invertedIndex].matches('.completed')) {
    //         let taskItensStorage = JSON.parse(localStorage.getItem('tasksStorage'));
    //         taskItensStorage.splice(invertedIndex, 1);
    //         localStorage.setItem('tasksStorage', JSON.stringify(taskItensStorage));
    //     }
    // }

    for (let index3 = 0; index3 < listItensArray3.length; index3 += 1) {
        if (listItensArray3[index3].matches('.completed')) {
            listItensArray3[index3].remove();
        }
    }
}

//Comandos para utilizar local storage na função abaixo retirados de https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/b332393f-7548-4075-83e3-f632735efb95/conteudos/e90b472b-e79b-4b29-9979-8222daff0d70/local-e-session-storage/2ac29f5c-c36e-473d-8546-6fb18340e55e?use_case=next_button

function initialRenderization() {
    if (localStorage.getItem('tasksStorage') === null) {
        localStorage.setItem('tasksStorage', JSON.stringify([]));
    } else {
        let taskListStorage2 = JSON.parse(localStorage.getItem('tasksStorage'));
        for (let index4 = 0; index4 < taskListStorage2.length; index4 += 1) {
            let listItenClone2 = listIten.cloneNode();
            listItenClone2.innerText = taskListStorage2[index4];
            listItenClone2.addEventListener('click', selectListIten);
            listItenClone2.addEventListener('dblclick', lineThrough);
            taskList.appendChild(listItenClone2);
        }
    }

    if (localStorage.getItem('classStorage') === null) {
        localStorage.setItem('classStorage', JSON.stringify([]));
    }
    else {
        let classListStorage = JSON.parse(localStorage.getItem('classStorage'));
        for (let indexClass = 0; indexClass < classListStorage.length; indexClass += 1) {
            let classTasks = JSON.parse(localStorage.getItem('tasksStorage'))
            for (let indexClass2 = 0; indexClass2 < classTasks.length; indexClass2 += 1) {
                if (classTasks[indexClass2] === classListStorage[indexClass]) {
                    // console.log(classTasks[indexClass]);
                    // console.log(classListStorage[indexClass2]);
                    let arrayLi = document.querySelectorAll('li');
                    arrayLi[indexClass2].classList.add('completed');
                }
            }
        }
    }
}

//Comandos para utilizar local storage na função abaixo retirados de https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/b332393f-7548-4075-83e3-f632735efb95/conteudos/e90b472b-e79b-4b29-9979-8222daff0d70/local-e-session-storage/2ac29f5c-c36e-473d-8546-6fb18340e55e?use_case=next_button

// salvar tarefas no local storage quando criadas
// function storeListIten() {
//     let inputTask2 = document.getElementById('texto-tarefa');
//     let task2 = inputTask2.value;
//     let taskItensStorage = JSON.parse(localStorage.getItem('tasksStorage'));  
//     taskItensStorage.push(task2);
//     localStorage.setItem('tasksStorage', JSON.stringify(taskItensStorage));
// }

function storeListIten() {
    let listItensArray4 = document.querySelectorAll('li');
    localStorage.removeItem('tasksStorage')
    localStorage.setItem('tasksStorage', JSON.stringify([]));
    for (let index5 = 0; index5 < listItensArray4.length; index5 += 1) {
        let taskItensStorage = JSON.parse(localStorage.getItem('tasksStorage'));
        taskItensStorage.push(listItensArray4[index5].innerText);
        localStorage.setItem('tasksStorage', JSON.stringify(taskItensStorage));
    }
    
    localStorage.removeItem('classStorage')
    localStorage.setItem('classStorage', JSON.stringify([]));
    for (let index5 = 0; index5 < listItensArray4.length; index5 += 1) {
        if (listItensArray4[index5].matches('.completed')) {
            let classItensStorage = JSON.parse(localStorage.getItem('classStorage'));
            classItensStorage.push(listItensArray4[index5].innerText);
            localStorage.setItem('classStorage', JSON.stringify(classItensStorage));
        }
    }
}

function moveUp() {
    let listItensArray4 = document.querySelectorAll('li');
    for (let index6 = 0; index6 < listItensArray4.length; index6 += 1) {
        if (listItensArray4[index6].matches('.selected') && index6 > 0) {
            let i = listItensArray4[index6];
            listItensArray4[index6].previousElementSibling.insertAdjacentElement('beforebegin', i);
        }
    }
}

function moveDown() {
    let listItensArray5 = document.querySelectorAll('li');
    for (let index7 = 0; index7 < listItensArray5.length; index7 += 1) {
        if (listItensArray5[index7].matches('.selected') && index7 < (listItensArray5.length - 1)) {
            let i = listItensArray5[index7];
            listItensArray5[index7].nextElementSibling.insertAdjacentElement('afterend', i);
        }
    }
}

function removeSelected() {
    let listItensArray6 = document.querySelectorAll('li');
    for (let index8 = 0; index8 < listItensArray6.length; index8 += 1) {
        if (listItensArray6[index8].matches('.selected')) {
            listItensArray6[index8].remove();
        }
    }
}

window.onload = initialRenderization();