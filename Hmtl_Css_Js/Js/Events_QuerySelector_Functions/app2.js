var text = "Hello world!";
console.log(text);

var Person = {
    name: "Ahmet",
    age: 15,
};

console.log(typeof Person);

//prompt

// let a = +prompt("İlk sayiyi giriniz", "");

//strings
var langs = "java, kotlin, python";
console.log(langs.includes("java"));

var hello = "hello";
console.log(hello[2]);

hell = hello.split("", 4);

console.log(hell);
console.log(hell.join());

console.log(hello.indexOf(4));

const numbers = [1, 2, 4, 5, 7];
console.log(numbers.length);

console.log(numbers[numbers.length - 1]);

// Adds element from end of array
numbers.push(25);
numbers.push(35);

// Removes element from end of array
numbers.pop();

// Adds element form strat of array
numbers.unshift(30);

// Removes element form strat of array
numbers.shift();

// Removes the element from given index on first parameter.
numbers.splice(0, 3);

// Reverse
numbers.reverse();

//Sorts element
numbers.sort();

console.log(numbers);

// Array
let arr = new Array(4);
let arr1 = new Array("apple", 5, "c");
console.log(arr.length);

const arr3 = ["melon", "orange"];
const arr4 = [1, 2, 3];

console.log(arr3.concat(arr4));

let value = 4 > 1;
// alert(value);

// let age = Number(prompt("Enter your age"));
// console.log(age);

let date = new Date();

console.log(date.toDateString());

let x = 5;
let y = "5";

// First compare
if (x == y) {
    console.log("Equal");
} else {
    console.log("Not equal");
}

// Second compare Type control.
if (x === y) {
    console.log("Equal");
} else {
    console.log("Not equal");
}

var name = "Jhon";
var department = "HR";
const val = `Name: ${name}\nDepartment: ${department}`;
console.log(val);

// let text = "";

// let sayi = Number(prompt("Please enter a positive number"));

// let condition = true;
// let control = 0;

// while (condition) {
//     if (sayi != "NaN" && sayi === 1) {
//         text = "Number is not prime number...";
//         alert(text);
//         condition = false;
//     } else if (sayi != "NaN" && sayi === 2) {
//         text = "Number is a prime number";
//         alert(text);
//         condition = false;
//     } else if ((sayi = !"NaN" && sayi > 2)) {
//         for (let i = 2; i < sayi; i++) {
//             if (sayi % i == 0) {
//                 control++;
//             }
//         }
//         if (control == 0) {
//             text = "Number is prime";
//             alert(text);
//         } else {
//             text = "Number is not prime";
//         }
//         condition = false;
//     }
// }

let sq = (a) => a * 2;
let sum = (a, b) => a + b;
