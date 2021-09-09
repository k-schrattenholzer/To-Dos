import { addToDoItem, getToDoList, itemCompleted } from '../local-storage-utils.js';

const addItemButton = document.getElementById('add-button');
const newToDoForm = document.getElementById('new-item-form');
const toDoList = getToDoList();
const listEl = document.getElementById('list-el');
const inputEl = document.getElementById('new-item-input');
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('username');


inputEl.placeholder = 'what do you gotta do?';
renderToDoList(toDoList);
renderHeader(userName);





addItemButton.addEventListener('click', (e) => {
    // create form data object
    e.preventDefault();
    const formData = new FormData(newToDoForm);

    addToDoItem(formData.get('new-to-do'));
    inputEl.placeholder = 'add another?';
    inputEl.value = '';

    const newList = getToDoList();
    renderToDoList(newList);
});


function renderHeader(username){
    const navHeader = document.getElementById('header');
    const infoDiv = document.createElement('div');
    const infoEl = document.createElement('p');

    infoDiv.classList.add('info-div');
    infoEl.classList.add('info-el');
    
    infoEl.textContent = `user:${ username } || total items:${ toDoList.length }`;

    navHeader.append(infoDiv, infoEl);
}

function renderToDoList(toDoList){
    listEl.innerHTML = '';

    for (let todo of toDoList) {
        
        const listItemEl = document.createElement('li');
        const toDoItem = document.createElement('p'); 
        
        listItemEl.classList.add('list-item');
        toDoItem.classList.add('to-do');
        

        toDoItem.textContent = todo.doThis;

        listEl.append(listItemEl, toDoItem);
        
        toDoItem.addEventListener('click', () => {
            itemCompleted(todo.id);
        });
    }
  
    
}