let counter = 0;
const getData = () => {
  //calls an Api and get Data
  console.log("Fetching Data...", counter++);
};

const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);

// document.querySelector("input").addEventListener("keyup", betterFunction);

// This is the normal Function without Debouncing
//Check the console for the difference between the calls of Normal Function and the Debouncing Function
document.querySelector("input").addEventListener("keyup", getData);
