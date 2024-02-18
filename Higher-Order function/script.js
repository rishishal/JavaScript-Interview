// Q what is a callback?
// Ans : A callback function is a function passed into another function as an argument and call it later in code is called callback functions

function x() {
  console.log("callback");
}

function higher(x) {
  x();
  console.log("Higher Order function");
}

// Q calculate the Area or Circumfrence and Diameter of the circle
const radius = [3, 1, 2, 4];

// area = πr2
// circumfrence = 2πr
// diameter = r2

function area(radius) {
  return Math.PI * radius * radius;
}

function circumfrence(radius) {
  return 2 * Math.PI * radius;
}

function diameter(radius) {
  return 2 * radius;
}

const calculate = function (logic, arr) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};

console.log("Area", calculate(area, radius));
console.log("Circumfrence", calculate(circumfrence, radius));
console.log("Diameter", calculate(diameter, radius));

// using map for Area
// console.log("Map", radius.map(area));
