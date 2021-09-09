import { addToDoItem, setToDoList, getUser } from '../local-storage-utils.js';

const addItemButton = document.getElementById('add-button');
const newToDoForm = document.getElementById('new-item-form');


addItemButton.addEventListener('click', (e) => {
    // create form data object
    e.preventDefault();

    const user = getUser();
    const formData = new FormData(newToDoForm);
  
    addToDoItem(formData.get('new-to-do'));
  
});

function renderToDoList(){
    
}