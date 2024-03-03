const obj = {
  name: "rishi",
  last: "kumar",
  city: "Delhi",
  arr: [1, 2, 3, 4],
  getintro: function () {
    console.log(`hello ${this.name} ${this.last} from ${this.city}`);
  },
};

const obj2 = {
  name: "Priyanshu",
};

//This is a bad way of prototype Inheritance Naver do this

obj2.__proto__ = obj; // Now obj2 has a value of obj Object

// we can print the value of obj2.city **Notice** we dont have city propety in obj2
console.log(obj2.city);
console.log(obj2.getintro());

//Good way of writing Prototype
Function.prototype.myBind = function () {
  console.log("Hello Bro");
};

function fun() {
  //check a Prototype of function now we are own Prototype myBind
}
