// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16. 12-16 is the choice or if else statement. basically saying if we choose door 1 this wiil happen and anyother door this will happen
// 2. What variable has a new value assigned to it after the first if statement executes? doorChoice
// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be? the scarf because its anything other than 1
// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33. If you either choose options 1 2 3 or any other number different scenarios will happen
// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be? You can run as fast as you can into the next room. Its full o snakes
// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be? you see a bear put a hat on and the bear shows you a secret passage out
// 7. What is your favorite ending? the third one because the full of snakes caught me off guard and i laughed
