let student1 = {
  firstname: "Rishi",
  lastname: "kumar",
};
let student2 = {
  firstname: "Drishti",
  lastname: "Rana",
};

let printName = function (hometown, state, country) {
  console.log(
    `${this.firstname} ${this.lastname} from ${hometown} ${state} ${country}`
  );
};

const printMyName = printName.bind(student1, "Bihar", "Delhi");
console.log(printMyName);
printMyName("India"); //invoke it later in code

//*************** PolyFill of Bind **************//

Function.prototype.mybind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const printMyName1 = printName.mybind(student2, "mathura", "Delhi");
console.log(printMyName1);
printMyName1("India");
