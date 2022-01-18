// Querying Buttons

const add = document.querySelector("#add");

const del = document.querySelector("#delete");

const clear = document.querySelector("#clear");

// Querying inputs

const addkey = document.querySelector("#addkey");

const addvalue = document.querySelector("addvalue");

const deletekey = document.querySelector("#deletekey");

// Event Listeners
// add.addEventListener("click", addItem);
// del.addEventListener("click", deleteItem);
// clear.addEventListener("click", clearItem);

// function addItem(e) {
//     sessionStorage.setItem(addkey.nodeValue, addvalue.value);
// }

// function deleteItem(e) {
//     sessionStorage.removeItem(deletekey.value);
// }

// function clearItem(e) {
//     sessionStorage.clear();
//}

localStorage.setItem("ex", "push up");
localStorage.setItem("repeat", 10);

const value = localStorage.getItem("repeat");

console.log(typeof value);

const todos = ["Todo 1", "Todo 2", "Todo 3"];

//localStorage.setItem("todos", todos);

// Local storage set as an array
localStorage.setItem("todos", JSON.stringify(todos));

const value2 = JSON.parse(localStorage.getItem("todos"));

console.log(value2);
