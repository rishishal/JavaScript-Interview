//Q *** Create a counter print itration with timer same value of timmer

function x() {
  for (var i = 1; i <= 5; i++) {
    function counter(a) {
      // every time getting new i value
      setTimeout(() => {
        console.log(a);
      }, a * 1000);
    }
    counter(i); //we calling a counter function with passing(i) value
  }
}
x();

// function x() {
//   var c = 30;
//   function outer(b) {
//     var a = 10;
//     function inner() {
//       console.log(a, b, c);
//     }
//     return inner;
//   }
//   return outer;
// }

// var close = x()("hello outer"); //x()() what this expresion means fist calling x() and other calling
// //outer() function in same line and save inner function in close variable
// close();

//Q Data Hiding and Encapsulation

// function counter() {
//   var count = 0;
//   return function incrementCount() {
//     count++;
//     console.log(count);
//   };
// }

// const result1 = counter();
// result1();
// result1();

// const result2 = counter(); // when we call a closure in a new scope it will give new value
// result2();

// Q smart Garbege Collecter

// function a() {
//   var x = 0,
//     z = 10;
//   return function b() {
//     console.log(x); // holde the debugger here and try console.log(z) in console z is no longer exist Collected by smart garbage
//   };
// }

// var y = a();
// y();

//Q count using event listners

function counterlistners() {
  var count = 0;
  document.getElementById("button").addEventListener("click", function () {
    console.log("click me", ++count);
  });
}

counterlistners();
