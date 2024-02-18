// Q what is a fetch()?
// Ans : firstly fetch is not a javaScript function its provided by the browser fetch() is a webApi for fetching a data

//Q How fetch() workes?
// Ans : we know fetch is a webApi. fetch() => Response.Json that is also a promsie when we handel the json promise we get object representing the response to your request.
// ex:- fetch() => Response.Json => result{}

//"user_url": "https://api.github.com/users/{user}",
const GITHUB_API = "https://api.github.com/users/rishishal";

async function getData() {
  try {
    const response = await fetch(GITHUB_API); // returning a Response.json promise
    const data = await response.json(); //that is also a promise
    console.log(data); // return json object
  } catch (error) {
    console.error(error);
  }
}
getData();

// // using .then method
// fetch(GITHUB_API).then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });
