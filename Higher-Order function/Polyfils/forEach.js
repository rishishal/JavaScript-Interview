const arr = [1, 2, 3, 4, 5, 6];

arr.forEach((val) => {
  //   console.log(val);
});

// ******************************* Polyfil of forEach **************************************//

Array.prototype.myforEach = function (cb) {
  //   console.log(this);
  for (let index = 0; index < this.length; index++) {
    cb(this[index], index, this);
  }
};

arr.myforEach(function (val) {
  console.log(val);
});
