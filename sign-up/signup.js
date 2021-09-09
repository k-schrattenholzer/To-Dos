import { setUser } from '../local-storage-utils.js';

const newUserForm = document.getElementById('new-user-form');


newUserForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // create form data object
    const formData = new FormData(newUserForm);
    const userName = formData.get('un');

    // userData creates user object
    const user = {
        name: formData.get('name'),
        username: userName,
        password: formData.get('pass'),
        itemsToDo: []
    };
    // set user in local storage
    setUser(user);
    // take user to choose adventure page
    window.location = `../to-do/index.html?username=${userName}`;
  
});
