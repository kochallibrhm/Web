const filterInput = document.querySelector("#filter");

filterInput.onfocus = function () {
    console.log("Input");
};

// Events

// First way
// filterInput.focus = (function () {
//     console.log("Input clicked...");
// });

// Second way
// filterInput.addEventListener("focus", function (e) {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.className);
//     console.log(e.target.placeholder);
//     console.log(e.target.value);
// });

const todoForm = document.querySelector("#todo-form");
console.log(todoForm);

todoForm.addEventListener("submit", submitForm);
function submitForm(e) {
    console.log("Submit Event...");

    // Blocks refreshing
    e.preventDefault();
}

// Keypress events
// filterInput.addEventListener("keydown", run);

// function run(e) {
//     console.log(e.key);
// }

// filterInput.addEventListener("keyup", run);

// function run(e) {
//     console.log(e.key);
// }

// filterInput.addEventListener("keypress", run);
// function run(e) {
//     console.log(e.target.value);
// }

const title = document.querySelector(".card-header");

const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e) {
    title.textContent = e.target.value;
}

// Mouse Events
/*..
.
.
.
.
.
.
.
...*/

//input events
const todoEnter = document.querySelector("#todo");
const filter = document.querySelector("#filter");

todoEnter.addEventListener("focus", run);

function run(e) {
    console.log(e.target.id);
}

// Copy
filter.addEventListener("copy", run);
function run(e) {
    console.log("Kopyalama işlemi yaptınız");
}

// Past
filter.addEventListener("paste", run);
function run(e) {
    console.log("Yapıştırma işlemi yaptınız");
}

// Cut
filter.addEventListener("cut", run);
function run(e) {
    console.log("Kesme işlemi yaptınız");
}

// Select
filter.addEventListener("select", run);
function run(e) {
    console.log("Seçme işlemi yaptınız");
}
