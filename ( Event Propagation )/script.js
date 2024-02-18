// Q What is event Delegation?

//Ans : Event Delegation is not possible without event Bubbling. through the e.bubbling we can achive outer parent
// and in a Event Delegation we apply a .addEventListener on parent elment and use that (functionality or logic)
// inside there all childrens

document.querySelector("#category").addEventListener(
  "click",
  (e) => {
    if (e.target.tagName == "LI") {
      console.log(e.target.id);
    }
  },
  false
);

document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
