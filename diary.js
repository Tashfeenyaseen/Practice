// 3. Define a JavaScript object representing a car with properties like make, model, and year. Create a function that receives the car object and returns a new object with the same properties but with a "description" property that combines the make, model, and year.

const car = {
  make: "toyota",
  model: "xli",
  year: 2013,
};

function abc(obj) {
  obj.description = `${obj.make} ${obj.model} ${obj.year}`;

  return obj;
}

abc(car);
console.log(car);
