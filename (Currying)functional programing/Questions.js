// Infinite  sum(5)(6)(4)
function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
}

const result = sum(5)(6)(4)();
console.log(result);
// convert in one line
const add = (a) => (b) => b ? add(a + b) : a;

//Create a curried function named evaluate that take an argument as operation

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "subtract") return a - b;
      else return "No invalid Opration selected";
    };
  };
}

console.log(evaluate("multiply")(6)(5));

// Dom Manipulation with Currying

//check index.html

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHeader = updateElementText("head"); // passing id
updateHeader("hello ji😁"); // changing content
