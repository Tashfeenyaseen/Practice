const students = [
  { name: "Alice", age: 20, grades: [85, 90, 78] },
  { name: "Bob", age: 22, grades: [92, 88, 76] },
  { name: "Ali", age: 21, grades: [85, 60, 58] },
  { name: "Bob", age: 32, grades: [62, 48, 97] },
  { name: "lice", age: 10, grades: [15, 70, 78] },
  { name: "Bab", age: 23, grades: [97, 98, 96] },
];
// How can you calculate the average marks for a specific student based on their name using the provided students array in JavaScript?

function calAvg(name) {
  let sum = 0;
  let finalAvg = 0;
  students.forEach((value) => {
    if (value.name.toUpperCase() === name.toUpperCase()) {
      value.grades.map((innerValue) => {
        sum += innerValue;
        finalAvg = sum / value.grades.length;
      });
    }
  });
  return finalAvg;
}
let finalCal = calAvg("Bob");
console.log(finalCal);
