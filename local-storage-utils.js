export const USEROBJ = 'USER';

export function getUser(){
    return JSON.parse(localStorage.getItem(USEROBJ));
}
    
export function setUser(userInfo){
    return localStorage.setItem(USEROBJ, JSON.stringify(userInfo));
}

export function getToDoList() {
  // (will ned to take in username as an argument if multiple users are being accommodated)
//     simply return an array of todos (not the whole user object)  
}


export function setToDoList(todos) {
//   (will ned to take in username as an argument if multiple users are being accommodated)
//     put the todos in the right place in local storage  
} 

export function addToDoItem(){

}
    // takes in a message, and creates a todo item and puts that into local storage

export function itemCompleted(id){

}
    // find the correct todo in your array
    // set that todo to 'completed: true'