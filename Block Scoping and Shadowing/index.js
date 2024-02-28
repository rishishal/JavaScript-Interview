// // Q What is a Block
// //Ans = Block is a used to Group a code together of multiple statements and create a single statement were
// //JavaScript is use. We denote Block with "{}"
// //Ex :- if statement

// var a = 10;
// console.log(a);
// if (true) console.log("working"); // here if just wanted only one statement real syntax of if

// if (true) {
//   //compound statements
//   var a = 20;
//   console.log(a);
// }

// //Here we want to write multimple statement so we using Block for Group multiple statement into single statement.

// // Q what is Block Scope

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// //Q Shadowing in variable

// var a = 100;
// {
//   var a = 10;
//   console.log(a); //it's print 10
// }
// console.log(a); //it's also prints 10

// //Why, because var is a global variable after the code run in line no 36
// // var update his value and both console.log point a same memory space that is Globle space.

// //Q Why it's not woking with let or const
// //Ans

// let b = 100;
// const c = 200; // store in Script Memory
// {
//   let b = 10; // store in block Scope
//   console.log(b); //it's print 10
//   console.log(c);
// }
// console.log(b);
// console.log(c); // it's print 100

// // why it's happen because let or const is store in other memory space called script and let & const is also in block scope variable

// //Q illegal Shadowing

// let a = 10;
// {
//   var a = 100; // why this happen because var exiding the boundries of block scope
// }

// //Q why we call var is a Funcinal scope

// let x = 10;
// function abc() {
//   var x = 20; // here var is a function scope. it not exiding the boundries
// }

// //Q block scope also following lexical scope

// const a = 20;
// {
//   const a = 100;
//   {
//     const a = 200;
//     console.log(a);
//   }
//   console.log(a);
// }
// console.log(a);

//Here console.log print the nearest variable

function outer(x) {
  var a = 10;
  var z = 20; // smart
  return function inner() {
    console.log(a);
    console.log(x);
  };
}

const result = outer("hello");
result();

// function left() {
//   console.log("left");
// }

// function right() {
//   console.log("right");
// }

// left() || right();
