export const USEROBJ = 'USER';

export function getUser(){
    const stringedUser = localStorage.getItem(USEROBJ);

    const parsedUser = JSON.parse(stringedUser);

    if (!stringedUser) { return [];}
    return parsedUser;
}
    
export function setUser(userInfo){
    return localStorage.setItem(USEROBJ, JSON.stringify(userInfo));
}

//(will ned to take in username as an argument if multiple users are being accommodated)
//simply return an array of todos (not the whole user object) 
export function getToDoList() {

    const { itemsToDo } = getUser();

    return itemsToDo;
}

//(will ned to take in username as an argument if multiple users are being accommodated)
//put the todos in the right place in local storage  
export function setToDoList(itemsToDo) {
    const user = getUser();
    console.log(itemsToDo);
    user.itemsToDo = itemsToDo;

    setUser(user);
} 
// takes in a message, and creates a todo item and puts that into local storage
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
    // find the correct todo in your array
    // set that todo to 'completed: true'