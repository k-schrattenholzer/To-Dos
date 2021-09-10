import { setUser, getUser, createUser } from '../local-storage-utils.js';

const newUserForm = document.getElementById('new-user-form');
// const allUsers = getAllUsers();


newUserForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // create form data object
    const formData = new FormData(newUserForm);
    const userName = formData.get('un');
    const userKey = formData.get('pass');

    createUser(userName, userKey);

    // set user in local storage
    // allUsers.push(newUser);

    // take user to choose adventure page
    window.location = `../to-do/index.html?username=${userName}`;
  
});
