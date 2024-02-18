//call

let student1 = {
  firstname: "Rishi",
  lastname: "kumar",
};

let printName = function (hometown, state) {
  console.log(`${this.firstname} ${this.lastname} from  ${hometown} ${state}`);
};

printName.call(student1, "Bihar", "Delhi");

let student2 = {
  firstname: "Drishti",
  lastname: "Rana",
};

//*************** PolyFill of call **************//

Function.prototype.mycall = function (obj = {}, ...args) {
  console.log(this);
  if (typeof this !== "function") {
    throw new Error("not a function");
  }
  obj.fn = this;
  console.log(obj);
  obj.fn(...args);
};

printName.mycall(student2, "Delhi", "Delhi");
