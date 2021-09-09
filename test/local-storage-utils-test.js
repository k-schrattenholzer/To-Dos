import { getUser, setUser, getToDoList, setToDoList, addToDoItem, itemCompleted, USEROBJ } from "../local-storage-utils.js";

const test = QUnit.test;

const testUser = {
    username: 'un1',
    password: '1234',
    itemsToDo: [
        {
            id: 1214,
            doThis: 'eat brekkie',
            completed: false
        }
    ]
};

test('setUser should put a user into localStorage', (expect) => {
    localStorage.removeItem(USEROBJ);

    setUser(testUser);
    
    const actual = JSON.parse(localStorage.getItem(USEROBJ));

    expect.deepEqual(actual, testUser);
});

test('getUser should get the user object from localStorage', (expect) => {
    localStorage.setItem(USEROBJ, JSON.stringify(testUser));

    const actual = getUser();

    expect.deepEqual(actual, testUser);
});

test('getToDoList should get the to do items from localStorage', (expect) => {
    localStorage.setItem(USEROBJ, JSON.stringify(testUser));

    const actual = getToDoList();

    expect.deepEqual(actual, testUser.itemsToDo);
});

test('setToDoList should set the to do items in localStorage', (expect) => {
    localStorage.setItem(USEROBJ, JSON.stringify(testUser));

    const newTodoItems = [
        {
            id: 2341,
            doThis: 'plant bath',
            completed: false
        },
        {
            id: 2546,
            doThis: 'feed cats',
            completed: false
        },
        {
            id: 9857,
            doThis: 'go on walk',
            completed: false
        }
    ];

    setToDoList(newTodoItems);

    const updatedUserObj = JSON.parse(localStorage.getItem(USEROBJ));

    expect.deepEqual(updatedUserObj.itemsToDo, newTodoItems);
});

test('addToDoItem should add one list items to the Items to Do in localStorage', (expect) => {
    localStorage.setItem(USEROBJ, JSON.stringify(testUser));

    const newToDo = 'fold dinner';
    addToDoItem(newToDo);

    const updatedUserObj = JSON.parse(localStorage.getItem(USEROBJ));

    const secondToDoItem = updatedUserObj.itemsToDo[1];

    expect.equal(secondToDoItem.doThis, newToDo);
    expect.equal(secondToDoItem.completed, false);
    expect.equal(typeof secondToDoItem.id, 'number');

});

test('itemCompleted should change the completed property of the checked todo in localStorage to the Items to Do in localStorage', (expect) => {
    const testUserCopy = { ...testUser};

    localStorage.setItem(USEROBJ, JSON.stringify(testUserCopy));

    itemCompleted(2546);

    const updatedTodo = [
        {
            id: 2546,
            doThis: 'feed cats',
            completed: true
        }
    ]

    const updatedUserObj = JSON.parse(localStorage.getItem(USEROBJ));

    expect.deepEqual(updatedUserObj.doThis, updatedTodo);

});

