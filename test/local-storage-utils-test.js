import { getUser, setUser, getToDoList, setToDoList, addToDoItem, itemCompleted, USEROBJ } from "../local-storage-utils.js";

const test = QUnit.test;

const testUser = {
    username: 'un1',
    password: '1234',
    itemstodo: [
        {
            id: 1,
            todo: 'eat brekkie',
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