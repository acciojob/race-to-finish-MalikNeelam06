window.promises = [];
let output=document.getElementById("output");
// Do not change the code above this
// add your promises to the array `promises`

let promises = [
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 resolved"), Math.random() * 5000);
  }),
  // Add four more promises here
	new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 resolved"), Math.random() * 4000);
  }),
	new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 3 resolved"), Math.random() * 2000);
  }),
	new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 4 resolved"), Math.random() * 1000);
  }),
	new Promise((resolve, reject) =>
    setTimeout(() => resolve("Promise 5 resolved"), Math.random() * 3000);
  }),
];

Promise.any(promises).then((value) => {
  // Update the text of the output div here
	output.innerText=value;
});