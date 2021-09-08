## Making a plan

## /signup

## HTML setup
need a form for username and password

## event
on submit:
//create a new user object with that username and password, and an empty array of To Do items
//inject that into localStorage
//redirect the user to the /todos page
if someone tries to sign up and there's already a user in localStorage, just overwrite it and call it good.

## /login

## HTML setup
need a form for uN and pW

##event
get the user from localStorage
check that the password is correct
if so send the user to todos, if not error out

## /todos

## HTML setup
a form to add new todos and a div to inject todos into

## event
on loading the page
    todos get rendered

on submitting a new todo
    update state
        get the todo data from the form
        make a new todo object (with an id, completed, and todo properties)
        push the new todo object into the todos array
    update DOM
        render todos

completing or clicking on a todo
    update the state
        find the todo that we clicked on
        change it's completed property to true
    update the DOM
        render ToDos

## functions
    renderToDos
        we need to clear out the old todos from the DOM (ul.textContent = '')
        get todos from local storage
        loop over todos and for each todo create an li and append it to our UL
        when we loop, render completed items differently than the completed ones

### local storage functions
    getUser()
    
    setUser()

    getTodos() (will ned to take in username as an argument if multiple users are being accommodated)
        simply return an array of todos (not the whole user object)
    
    setTodos(todos) (will ned to take in username as an argument if multiple users are being accommodated)
        put the todos in the right place in local storage

    addTodo()
        takes in a message, and creates a todo item and puts that into local storage
    
    completeTodo(id)
        find the correct todo in your array
        set that todo to 'completed: true '