import { getUser, setUser, getTodos, setTodos, addTodos, completeTodo } from "../local-storage-utils.js";

const test = QUnit.test;

test('setUser should put a user into localStorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = JSON.parse(localstorage.getItem('USER'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});