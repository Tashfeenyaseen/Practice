const employees = [
  { name: "Alice", department: "HR" },
  { name: "Alice", department: "Engineering" },
  { name: "Charlie", department: "hr" },
  { name: "Ali", department: "HR" },
  { name: "Alice", department: "IT" },
  { name: "Asad", department: "HR" },
  { name: "Muneeb", department: "it" },
  { name: "Yaseen", department: "engineering" },
  { name: "Jhon", department: "it" },
  { name: "Asad", department: "HR" },
];
const newArr = [];
function filter(nam, dpt) {
  employees.map((value) => {
    if (
      value.name.toUpperCase() === nam.toUpperCase() &&
      value.department.toUpperCase() === dpt.toUpperCase()
    ) {
      newArr.push(value);
    }
  });
  return newArr;
}
console.log(filter("Alice", "it"));
