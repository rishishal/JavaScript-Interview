//what is async & await?
//Ans :  async is a keyword provid by JavaScript if we used async before any function its become Asynchrons function.

//and await keyword only used inside in async function.

//*** async function always return promise.
//Example
// async function getData() {
//   return "Namaste JavaScript"; // returning promise
// }

// const response = getData(); // store promise into variable data
// console.log(response);

//How to extract data from promise both method

// function getData() {
//   return new Promise((resolve, reject) => {
//     resolve("Promise Resolved value!");
//   });
// }

// const data = getData();

// // Traditional methord
// data.then(function (res) {
//   console.log(res);
// });

// //async & await
// async function handleData() {
//   const res = await data;
//   console.log(res);
// }
// handleData();

// what if we pass promies into async function

// const p = new Promise((resolve, reject) => {
//   resolve("Promies Resolved Value!");
// });

// async function getData() {
//   const data = await p;
//   console.log(data);
// }
// getData();

//****Diffrence between .then Vs async & await?

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promies Resolved Value!");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promies Resolved Value!");
  }, 5000);
});

// function getData() {
//   p.then((res) => {
//     console.log(res); // js engine will not wait to fullfil the promise
//   });
//   console.log("Namaste JavaScript"); // first print this and rhen after print promise value
// }
// getData();
// console.log("Start");

// async function handleData() {
//   const data1 = await p1; //suspend the handleData function when js engin encoter await
//   console.log("Namaste JavaScript");
//   console.log(data1);

//   const data2 = await p2;
//   console.log("Namaste JavaScript");
//   console.log(data2);
// }
// handleData();

// console.log("End"); //and print this,
