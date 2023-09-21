// **Basic Problems:**

// 1. **Hello, World!**
//    - Write a function that prints "Hello, World!" to the console.
console.log("Hello, World!");
// 2. **Sum of Two Numbers**
//    - Write a function that takes two numbers as parameters and returns their sum.
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(2, 4));
// 3. **Find the Largest Number**
//    - Write a function that takes an array of numbers and returns the largest number.

function largestNum(arrNumbers) {
  let a = Math.max(...arrNumbers);
  return a;
}
let arr = [1, 3, 5, 6, 7, 8, 89, 112];
console.log(largestNum(arr));
// 4. **Factorial**
//    - Write a function that calculates the factorial of a given number.
function calFactorial(num) {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= num;
  }
  return factorial;
}
console.log(calFactorial(5));

// 5. **Reverse a String**
//    - Write a function that takes a string and returns it reversed.
function revStr(str) {
  return str.split("").reverse().join("");
}
console.log(revStr("str"));

// 6. **Check for Palindrome**
//    - Write a function that checks if a given word or phrase is a palindrome.
function revStrr(str) {
  if (str.split("").reverse().join("").toUpperCase() === str.toUpperCase()) {
    return `${str} is a palindrome`;
  } else {
    return `${str} is not a palindrome`;
  }
}
console.log(revStrr("Civic"));
// 7. **Fibonacci Sequence**
//    - Write a function that generates the Fibonacci sequence up to a specified number of terms.

function FibonacciCheck(num) {
  for (let i = 1; i <= num; i++) {}
}
FibonacciCheck(6);

let a = 5;
// 8. **Check for Prime Number**
//    - Write a function that checks if a given number is prime.

// 9. **Remove Duplicates**
//    - Write a function that removes duplicate elements from an array.

// 10. **Simple Calculator**
//     - Write a function that takes two numbers and an operator (+, -, *, /) and performs the operation.

// **Intermediate Problems:**

// 11. **Anagram Checker**
//     - Write a function that checks if two words are anagrams of each other.

// 12. **Find the Missing Number**
//     - Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the missing number.

// 13. **Merge Sorted Arrays**
//     - Write a function that merges two sorted arrays into one sorted array.

// 14. **Reverse a Linked List**
//     - Implement a function to reverse a singly linked list.

// 15. **Rotate an Array**
//     - Write a function that rotates an array by a given number of positions.

// 16. **Find the Longest Word**
//     - Write a function that finds the longest word in a sentence.

// 17. **Title Case a Sentence**
//     - Write a function that capitalizes the first letter of each word in a sentence.

// 18. **Binary Search**
//     - Implement a binary search algorithm.

// 19. **Count Occurrences**
//     - Write a function that counts the number of occurrences of a specific element in an array.

// 20. **Check for Balanced Parentheses**
//     - Write a function that checks if a given string of parentheses is balanced.

// **Advanced Problems:**

// 21. **Dijkstra's Algorithm**
//     - Implement Dijkstra's algorithm to find the shortest path in a graph.

// 22. **Implement a Hash Map**
//     - Write a class that implements a basic hash map.

// 23. **Memoization for Fibonacci**
//     - Implement a memoization technique to efficiently calculate Fibonacci numbers.

// 24. **Graph Traversal (DFS and BFS)**
//     - Write functions for depth-first search (DFS) and breadth-first search (BFS) in a graph.

// 25. **Find the First Non-Repeating Character**
//     - Write a function that finds the first non-repeating character in a string.

// 26. **Merge Sort**
//     - Implement the merge sort algorithm for sorting an array.

// 27. **Detect a Cycle in a Linked List**
//     - Write a function that detects if a linked list has a cycle.

// 28. **Largest Subarray Sum**
//     - Write a function that finds the contiguous subarray with the largest sum.

// 29. **Conway's Game of Life**
//     - Implement Conway's Game of Life simulation.

// 30. **Implement a Priority Queue**
//     - Write a class that implements a priority queue.
