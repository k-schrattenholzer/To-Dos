import { addToDoItem, setToDoList, getUser, getToDoList } from '../local-storage-utils.js';

const addItemButton = document.getElementById('add-button');
const newToDoForm = document.getElementById('new-item-form');
const toDoList = getToDoList();
const listEl = document.getElementById('list-el');
const inputEl = document.getElementById('new-item-input');

inputEl.placeholder = 'what do you gotta do?';
renderToDoList(toDoList);



function renderToDoList(toDoList){
    listEl.innerHTML = '';

    for (let todo of toDoList) {
        
        const listItemEl = document.createElement('li');
        const toDoItem = document.createElement('p'); 
        
        listItemEl.classList.add('list-item');
        toDoItem.classList.add('to-do');
        

        toDoItem.textContent = todo.doThis;

        listEl.append(listItemEl, toDoItem);
    } 
}

addItemButton.addEventListener('click', (e) => {
    // create form data object
    e.preventDefault();
    const formData = new FormData(newToDoForm);

    addToDoItem(formData.get('new-to-do'));
    inputEl.placeholder = 'add another?';

    const newList = getToDoList();
    renderToDoList(newList);
});