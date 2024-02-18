// The "false" value of useCapture is called bubbling. And the "true" value is Capturing/Trickling

// Grand Parent div
// document.querySelector("#grandParent").addEventListener(
//   "click",
//   () => {
//     console.log("Grand Clicked!");
//   },
//   true
// );

// //Parent div
// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent Clicked!");
//   },
//   false // this is "useCapture" this value will be ethire true or false but default is false
// );

// //Child div
// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child Clicked!");
//   },
//   false
// );

// ***********************  Event.stopPropagation()  ************************//

document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("Grand Clicked!");
  },
  false
);

//Parent div
document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked!"); // this will stop any prolpagation in dom like bubbling or capturing
  },
  false
);

//Child div
document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    e.stopPropagation(); // check Dom
    console.log("Child Clicked!");
  },
  false
);
