/*f(a,b) implementation */

function f(a, b) {
  return "Works";
}
console.log(f());

/*f(a)(b) implementation */
function y(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

console.log(y(5)(6));

/// simple function

function add(a, b, c) {
  return a + b + c;
}
console.log(add(5, 6, 2)); //13

//****** Currying function ****//

function addCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(addCurry(5)(6)(2)); //13

//*****Currying Vs partial Application*****//

//Q what partial app transform a function into other function with small arguments

function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

console.log(sum(10)(2, 5)); //17
