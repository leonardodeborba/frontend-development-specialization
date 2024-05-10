// My try
// document.getElementById("count-el").innerText = 1;

// function increase() {
//   let old = document.getElementById("count-el").innerText;
//   old = parseInt(old) + 1;
//   document.getElementById("count-el").innerText = old;
//   }


// Video
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el");

let count = 0;
function increment() {
  count+= 1;
  countEl.innerText = count;
  console.log(count);
}