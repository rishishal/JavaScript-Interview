let student1 = {
  firstname: "Rishi",
  lastname: "kumar",
};

let student2 = {
  firstname: "Drishti",
  lastname: "Rana",
};

const detail1 = ["Bihar", "Delhi"];
const detail2 = ["mathura", "India"];

let printName = function (hometown, state) {
  console.log(`${this.firstname} ${this.lastname} from  ${hometown} ${state}`);
};

printName.apply(student1, detail1);

//*************** PolyFill of Appy **************//

Function.prototype.myAppy = function (obj = {}, ...args) {
  console.log(this);
  if (typeof this !== "function") {
    throw new Error("not a function");
  }
  if (!Array.isArray(...args)) {
    throw new Error("TypeError: CreateListFromArrayLike called on non-object");
  }
  obj.fn = this;
  console.log(obj);
  obj.fn(...args);
};

printName.myAppy(student2, detail2);
