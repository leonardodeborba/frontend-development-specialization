// Car race
function carRace() {
  let counter = 0;
  while (counter < 5) {
    counter+= 1;
    console.log(counter);
  } 

  console.log("The race has begun!");
  console.log("The winner was: Nobody! Nobody survived :O");
}

carRace();

// Count laps
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function sumLaps() {
  let totalLaps = lap1 + lap2 + lap3;
  console.log(totalLaps);
}
// Doesn't work because totalLaps was defined with let (block scope). You can't access it from outside the function;
// console.log(totalLaps);
sumLaps();

// Create a function that increments the lapsCompleted variable with one
// Run/Invoke it three times
let lapsCompleted = 0;

function incrementLaps() {
  // lapsCompleted = (lapsCompleted + 1) * 3;
  // lapsCompleted+= 1 * 3;
  lapsCompleted+= 1;
}

incrementLaps();
incrementLaps();
incrementLaps();

console.log(lapsCompleted);


