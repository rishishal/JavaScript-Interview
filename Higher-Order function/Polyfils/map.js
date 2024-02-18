// using map find double and binary of this array

const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}

function binary(x) {
  return x.toString(2);
}

const output = arr.map(binary); // change fun logic name

console.log(output);

const users = [
  { firstname: "Rishi", lastname: "Kumar", age: 21 },
  { firstname: "Drishti", lastname: "Rana", age: 21 },
  { firstname: "Priyanshu", lastname: "Kumar", age: 50 },
  { firstname: "kshitij", lastname: "sharawat", age: 32 },
];

// list the fullname

const printName = users.map((user) => {
  return `${user.firstname} ${user.lastname}`;
});

console.log(printName[1]);

// ******************************* Polyfil of Map **************************************//

Array.prototype.myMap = function (cb) {
  let res = [];
  for (let index = 0; index < this.length; index++) {
    res.push(cb(this[index], index, this));
  }
  return res;
};

const printName2 = users.myMap((user) => {
  return `${user.firstname} ${user.lastname}`;
});

console.log(printName2[0]);
