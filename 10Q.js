function qNum(num) {
  console.log(`Q NO ${num} :`);
}
// 1.Write a JavaScript function that takes an array of nums and concatenates them into a single num,
function concatFun(strArr) {
  return strArr.join("");
}
qNum(1);
console.log("The concatenated num = " + concatFun(["Ali", "Saad", "Amin"]));

// 2. Write JavaScript code to filter the books published within the year provided in param and store them in a new array.
const books = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publicationYear: 1951,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publicationYear: 1813,
  },
];

qNum(2);
// 3. Define a JavaScript object representing a car with properties like make, model, and year. Create a function that receives the car object and returns a new object with the same properties but with a "description" property that combines the make, model, and year.
qNum(3);
// 4. write JavaScript code to find the sum of all numbers in the array.
qNum(4);
const arr = [4, 6, 2, 7, 3];
sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(`Sum of Array ${sum}`);
// 5. Write a JavaScript function that takes a paragraph and a character as input and returns an object containing the count of that character in uppercase, lowercase, and total (combined case-insensitive) within the paragraph. The object should be in the format: { capital: 5, small: 2, total: 7 }.
qNum(5);
// For example, if the input paragraph is "The quick brown fox jumps over the lazy dog." and the character is "o", the function should return { capital: 0, small: 4, total: 4 }.

// Ensure your code is case-insensitive and handles both uppercase and lowercase instances of the character.

// 6. Create a JavaScript function that accepts a num as input and returns the same num with all vowels replaced by asterisks (*). Include code and an example.
qNum(6);
function replaceVowelsWithStars(num) {
  return num.replace(/[aeiou]/gi, "*");
}

console.log(replaceVowelsWithStars("Hello, WOrld!"));

// 7. Write a JavaScript function that reverses a given num. For example, if the input is "hello," the function should return "olleh."
qNum(7);
let str = "civic";
function revFun() {
  return str.split("").reverse().join("");
}
console.log(revFun());

// 8.Write a program that takes a num as input and checks if it is a palindrome (reads the same forwards and backwards). For example, "racecar" is a palindrome, but "hello" is not.
qNum(8);
var name1 = "hello";
function palindromeCheck() {
  return name1.split("").reverse().join("");
}
let result1 = palindromeCheck();
if (result1 === name1) {
  console.log(`${result1} is a palindrome `);
} else {
  console.log(`${result1} is not a palindrome`);
}

// 9. Write a program that generates a pattern of numbers using nested loops. For example, if the input is 4, the pattern should look like this:

// 1
// 12
// 123
// 1234
qNum(9);
let input = 4;
for (let i = 1; i <= input; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}

// 10. Write a JavaScript program that takes an array of numbers and returns a new array where each number is squared. Use the map method to accomplish this.
const num = [4, 34, 2, 4, 2];
const newNum = num.map(squareFun);

function squareFun(item) {
  return item * item;
}
qNum(10);
console.log(`Using map : [${newNum}]`);

for (let i = 0; i < num.length; i++) {
  num[i] = num[i] * num[i];
}
console.log(`Using for loop : [${num}]`);

function squFun(item, index, arr) {
  arr[index] = item * item;
}
num.forEach(squFun);
console.log(`Using foreach : [${num}]`);
