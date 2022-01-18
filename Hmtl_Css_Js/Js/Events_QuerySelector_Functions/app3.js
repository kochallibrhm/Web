// let value = document;

// console.log(document);

// value = document.all;
// console.log(value);

// value = document.all.length;
// console.log(value);

// value = document.all[5];
// console.log(value);

// const elements = document.all;
// for (let i = 0; i < elements.length; i++) {
//     console.log(elements[i]);
// }

// const collections = Array.from(document.all);

// collections.forEach(function (collection) {
//     console.log(collection);
// });

let value;

value = document.body;

value = document.head;

value = document.location;

value = document.location.hostname;

// Links
value = document.links;

value = document.links[1];

value = document.links[document.links.length - 1].getAttribute("class");

value = document.links[document.links.length - 1].getAttribute("href");

// Forms
value = document.forms;

value = document.forms.length;

value = document.forms[0].id;

value = document.forms[0].getAttribute("id");

console.log(value);

// Get element by Id
let element;

element = document.getElementById("todo-form-1");

element = document.getElementById("tasks-title");

// Getting element by class
element = document.getElementsByClassName("card-header")[0];

element = document.getElementsByClassName("list-group-item");

// Getting element by tag

element = document.getElementsByTagName("div");

// Query Selector - Css selector

element = document.querySelector("#todo-form");

element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");

element = document.querySelectorAll(".list-group-item");

// element.forEach(function (item) {
//     console.log(item);
// });

// element = document.querySelectorAll("li");

// console.log(element);

const clearTodos = document.querySelector("#clear-todos");

// console.log(clearTodos.id);
// console.log(clearTodos.className);

// console.log(clearTodos.href);

// console.log(clearTodos.textContent);

// console.log(clearTodos.innerHTML);

// console.log(clearTodos.style);

clearTodos.className = "btn btn-primary";

clearTodos.style.color = "#000";

clearTodos.href = "https://www.google.com.tr";

clearTodos.target = "_blank";

clearTodos.textContent = "Temizle";

//clearTodos.style.marginLeft = "50px";

let element2 = document.querySelector("li:last-child");

element2 = document.querySelector("li:nth-child(2)");
//console.log(element2);

// Child
const toDoList = document.querySelector(".list-group");
const cardrow = document.querySelector(".card.row");

value = toDoList.children;

value = toDoList.children[2].textContent = "Changed";

value = cardrow.children[1].children[0].children;

value = toDoList.previousElementSibling;
value = toDoList.nextElementSibling;

//console.log(value);

// Creating element
const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

console.log(newLink);

// creating here
newLink.id = "clear-todo";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";
newLink.appendChild(document.createTextNode("Go to page"));

// adding here
cardbody.appendChild(newLink);

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

// Removing here
todos[1].remove();
todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todoList.firstElementChild);
todoList.firstChild;
console.log(todos);

const cardBody = document.querySelectorAll(".card-body")[1];
const newElement = document.createElement("h3");

newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "New todos";

const oldelement = document.querySelector("#tasks-title");

console.log(oldelement);

cardbody.replaceChild(newElement, oldelement);
