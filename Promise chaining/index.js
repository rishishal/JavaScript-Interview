// //Bignnier level
// //Ques 1 - what's the output

// console.log("start");

// const promies1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promies1.then((res) => {
//   console.log(res);
// });

// console.log("end");

// //Ques 2 - what's the output

// console.log("start");

// const promies2 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });

// promies1.then((res) => {
//   console.log(res);
// });

// console.log("end");

// // Ques 3- what's the output

// console.log("start");

// const fun = () => {
//   const promies3 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
//   });
// };
// const promies3 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// fun().then((res) => {
//   console.log(res);
// });

// console.log("end");

// Ques 4 - what's the output

// function job() {
//   return new Promise((resolve, reject) => {
//     reject();
//   });
// }

// let promise = job();

// promise
//   .then(function () {
//     console.log("success 1");
//   })
//   .then(function () {
//     console.log("success 2");
//   })
//   .then(function () {
//     console.log("success 2");
//   })
//   .catch(function () {
//     console.log("Error 1");
//   })
//   .then(function () {
//     console.log("success 4");
//   });

// Ques 5 - what's the output

// function job(state) {
//   return new Promise((resolve, reject) => {
//     if (state) {
//       resolve("Success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise
//   .then(function (data) {
//     console.log(data);
//     return job(false);
//   })
//   .catch(function (error) {
//     console.log(error);
//     return "Error caught";
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// Ques 6 - what's the output

function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("Success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise
  .then((data) => {
    console.log(data);

    return job(true);
  })
  .then((data) => {
    if (data !== "victory") {
      throw "Defeat";
    }
    return job(true);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
    return job(false);
  })
  .then((data) => {
    console.log(data);
    return job(true);
  })
  .catch(() => {
    console.log(data);
    return "Error caught";
  })
  .then((data) => {
    console.log(data);
    return new Error("test"); // not returning promise
  })
  .then((data) => {
    console.log("Success:", data.message);
  })
  .catch((data) => {
    console.log("Error:", data.message);
  });
