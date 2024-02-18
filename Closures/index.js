//Q what is Closure?
//Ans A function along with its lexical scope(lexical envirment) bundeld together forms a closure

//what is the lexical envirment
//Ans : A lexical envirment a function local memory along with it lexical envirmet of parent forms closure

function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

var result = outer();
console.log(result);
result();

// Uses of Closures
//module Designe patten
//currying
//data Hiding and encapsulation
//mentaining state in async world
