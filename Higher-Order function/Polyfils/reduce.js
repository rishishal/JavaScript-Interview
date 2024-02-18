// reduce find max value in of array [5,1,3,2,6]

const arr = [5, 1, 3, 2, 6];

const output = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(output);

const users = [
  { firstname: "Rishi", lastname: "Kumar", age: 21 },
  { firstname: "Drishti", lastname: "Rana", age: 21 },
  { firstname: "Priyanshu", lastname: "Kumar", age: 50 },
  { firstname: "kshitij", lastname: "sharawat", age: 32 },
];

const printUser = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(printUser);

// first name of all the people age is less than 30

const printName = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstname);
  }
  return acc;
}, []);

console.log(printName);

// ******************************* Polyfil of Reduce **************************************//

Array.prototype.myReduce = function (cb, initialVal) {
  let acc = initialVal;
  for (let index = 0; index < this.length; index++) {
    acc = acc ? cb(acc, this[index]) : this[index];
  }
  return acc;
};

const printUser1 = users.myReduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(printUser1);
