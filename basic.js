// 1. **Variables and Data Types**
//    - Declare a variable called 'name' and assign it the value "John Doe".
let name = "John Doe";
// 2. **Operators and Conditionals**
//    - Write a program that takes two numbers as input and prints whether the first number is greater, less than, or equal to the second number.
let a = 2;
let b = 4;
if (a > b) {
  console.log(`first number is greater`);
} else if (b > a) {
  console.log(` first number is lesser `);
} else if ((b = a)) {
  console.log(` first number is equal to the second number `);
}

// 3. **Loops**
//    - Write a program that prints the first 10 natural numbers.

for (let i = 1; i < 11; i++) {
  console.log(i);
}
// 4. **Functions**
//    - Write a function that takes a name as input and returns a greeting message, like "Hello, John!".
function fun(name) {
  return `"Hello, ${name}"`;
}
let x = fun("Jhon");
console.log(x);

// 5. **Arrays**
//    - Create an array containing the names of five different fruits.
const arr = ["orange", "apple", "peach", "mango", "banana"];
// 6. **Objects**
//    - Create an object representing a book with properties for title, author, and year published.
const obj = { title: "islam", author: "Ali", year: "2022" };

// 7. **Functions and Arrays**
//    - Write a function that takes an array of numbers and returns the sum of all the numbers in the array.
let arrNum1 = [1, 4, 6, 4, 3, 2, 87];
let sum = 0;
function sumNum() {
  for (let i = 0; i < arrNum1.length; i++) {
    sum += arrNum1[i];
  }
  return sum;
}
let res = sumNum();
console.log(res);
// 8. **Conditionals and Objects**
//    - Create an object representing a car with properties for make, model, and year. Write a program that checks if the car is a vintage car (older than 25 years) and prints an appropriate message.
const car = { make: "Honda", model: "city", year: 1909 };
if (car.year - 2023 >= 25) {
  console.log(`car is a vintage.`);
} else {
  console.log(`car is not a vintage`);
}
// 9. **Loops and Arrays**
//    - Write a program that finds the largest element in an array of numbers.

let arrNum = [1, 4, 6, 4, 3, 2, 87];
let item = arrNum[0]; // Corrected the variable name from 'arrr' to 'arrNum'

for (let i = 0; i < arrNum.length; i++) {
  if (arrNum[i] > item) {
    // Compare individual elements of the array
    item = arrNum[i];
  }
}

console.log(item);

// 10. **Functions and Objects**
//     - Create a function that takes an object representing a person with properties for name and age, and returns a message like "John is 25 years old".
function ageFun(obj) {
  return `"${person.name} is ${person.age} years old"`;
}
const person = { name: "Ali", age: 22 };
let ress = ageFun(person);
console.log(ress);
