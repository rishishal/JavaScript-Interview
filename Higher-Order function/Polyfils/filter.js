//using filter find odd or even number  [5, 1, 3, 2, 6];

const arr = [5, 1, 3, 2, 6];

function odd(x) {
  return x % 2;
}

function even(x) {
  return x % 2 === 0;
}

// const output = arr.filter(odd); //change Fun logic

// console.log(output);

const users = [
  { firstname: "Rishi", lastname: "Kumar", age: 21 },
  { firstname: "Drishti", lastname: "Rana", age: 21 },
  { firstname: "Priyanshu", lastname: "Kumar", age: 50 },
  { firstname: "kshitij", lastname: "sharawat", age: 32 },
];

//first name of all the people age is less than 30

const printName = users
  .filter((user) => user.age > 30)
  .map((user) => `${user.firstname} ${user.lastname}`);

console.log(printName);

// ******************************* Polyfil of Filter **************************************//

Array.prototype.myFilter = function (cb) {
  // console.log(this);
  let res = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index])) {
      res.push(this[index]);
    }
  }
  return res;
};

const output2 = arr.myFilter(odd);
console.log(output2);
