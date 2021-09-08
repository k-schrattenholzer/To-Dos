export const USEROBJ = 'USER';

export function getUser(){
    return JSON.parse(localStorage.getItem(USEROBJ));
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

    user.itemsToDo = itemsToDo;

    setUser(user);
} 
// takes in a message, and creates a todo item and puts that into local storage
export function addToDoItem(string){
    const toDoList = getToDoList();

    const newToDoItem = {
        id: Math.floor((Math.random() * 100000) / 10),
        doThis: string,
        completed: false,
    };
    toDoList.push(newToDoItem);

    setToDoList(toDoList);
}
    

export function itemCompleted(id){

}
    // find the correct todo in your array
    // set that todo to 'completed: true'