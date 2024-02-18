const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P1 resolved");
    reject("P1 Rejected");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P2 resolved");
    reject("P2 Rejected");
  }, 5000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P2 resolved");
    reject("P3 Rejected");
  }, 5000);
});

// PROMISE.ALL

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

// PROMISE.ALLSETELED

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

// PROMISE.RACE

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

// PROMISE.ANY

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err.errors);
  });
