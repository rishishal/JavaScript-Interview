"use strict";

//(i)this in globle space
console.log(this);
//(ii) this inside a function
function x() {
  //but the value depends on strict or non-strict mode
  console.log(this); // this will undefined
}
// why this is happen in the javaScript have a(iii)(this substition) in this, the value of "this" will replaced if the
//"this" is undefined/null into globle object in non-strict mode

//(iv) this keyword depends on how the function is called
x(); // undefined "stcict"
window.x(); // window object "strict"

//(v) this inside a object's method
const obj = {
  a: 10,
  x: function () {
    console.log(this); // this will print object
    console.log(this.a); // this will print object property a because "this" is pointing the obj property
  },
};

obj.x(); // the function is callig with the referen of object

//(vi) this inside arrow function

const object = {
  a: 10,
  y: () => {
    console.log(this); // print window object
  },
};

object.y();

// why?. Because arrow function don't have there own this binding it retain the "this" value of
//the enclosing lexical context

//Q Gusses the output

const object2 = {
  a: 10,
  x: function () {
    //enclosing lexical context
    const y = () => {
      console.log(this);
    };
    y();
  },
};

object2.x();

//(vii) this inside DOM

//check index.html
// then you write the this inside the DOM this will be printed the [object dom lement]
// in case button this will print [object HTML<Button Element>]

//(viii) this keyword inside a class, constructor
