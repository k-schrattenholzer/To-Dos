import { findUser } from './local-storage-utils.js';

const signUpButton = document.getElementById('sign-up');
const loginButton = document.getElementById('login'); 
const loginForm = document.getElementById('login-form');


signUpButton.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = '/sign-up/index.html';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(loginForm);
    const currentUserName = formData.get('username');
    const currentUserPW = formData.get('username');

    let previousUser = findUser(currentUserName, currentUserPW);

    if (!previousUser){
        window.location = `./to-do/index.html?username=${currentUserName}`;
    } else {
        alert('your account was not found, please click Create Account to begin');
    }
});
