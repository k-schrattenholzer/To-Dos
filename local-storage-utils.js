export const USEROBJ = 'USER';
export const ALLUSERS = 'ALL-USERS';

export function getUser(){
    const stringedUser = localStorage.getItem(USEROBJ);

    const parsedUser = JSON.parse(stringedUser);

    if (!stringedUser) { return [];}
    return parsedUser;
}
    
export function setUser(userInfo){
    const stringedUser = JSON.stringify(userInfo);
    localStorage.setItem(USEROBJ, stringedUser);
}

export function getAllUsers(){
    let stringedUserArray = localStorage.getItem(ALLUSERS);
    if (!stringedUserArray) { return [];}
    
    const parsedUserArray = JSON.parse(stringedUserArray);
   
    return parsedUserArray;
}

export function setAllUsers(usersArray){
    const stringedArray = JSON.stringify(usersArray);
    localStorage.setItem(ALLUSERS, stringedArray);
}

export function getToDoList() {

    const { itemsToDo } = getUser();

    return itemsToDo;
}


export function setToDoList(itemsToDo) {
    const user = getUser();

    user.itemsToDo = itemsToDo;

    setUser(user);
} 

export function addToDoItem(string){
    const toDoList = getToDoList();
    
    const newToDoObject = {
        id: Math.floor((Math.random() * 100000) / 10),
        doThis: string,
        completed: false,
    };

    toDoList.push(newToDoObject);

    setToDoList(toDoList);
}
    

export function itemCompleted(id){

    const toDoList = getToDoList();
    const selectedToDo = toDoList.find(doThis => doThis.id === id);

    selectedToDo.completed = 'true';
    
    setToDoList(toDoList);
}


export function findUser(uname, pw){
    let allUsersArray = getAllUsers();

    const matchingUser = allUsersArray.find(entry => (entry.user === uname && entry.password === pw));

    if (!matchingUser) { return 'no match found';}
    return 'match';
}

export function createUser(uname, pw){
    let usersArray = getAllUsers();

    const freshUser = {
        username: uname,
        password: pw,
        itemsToDo: []
    };

    const updatedArray = [...usersArray, freshUser];
    setUser(freshUser);
    setAllUsers(updatedArray);
}