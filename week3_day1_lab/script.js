/*
Instructions Provided:

Challenge: addList

=======Difficulty: Basic

Prompt:

- Write a function called addList that accepts any quantity of numbers as arguments,
  adds them together and returns the resulting sum.
- Assume all parameters will be numbers. <=========
- If called with no arguments, return 0 (zero).

Examples:

addList(1) //=> 1
addList(1,50,1.23) //=> 52.23
addList(7,-12) //=> -5

*/

//using the rest parameter approach, and for...of

function addList(...numbers) {
  let sum = 0;
  for (num of numbers) {
    sum += num;
  }
  return sum;

}

//using the arguments object approach, and for...of

function addItems() {
  let sum = 0;
  for (argue of arguments) {
    sum += argue;
  }
  return sum;
}

console.log("**********************addList Results Below**************************");

console.log(addList(1));
console.log(addList(0));
console.log(addList(1, 50, 1.23));
console.log(addList(7, -12));

console.log("**********************AddItem Results Below***********************");

console.log(addItems(1));
console.log(addItems(0));
console.log(addItems(1, 50, 1.23));
console.log(addItems(7, -12));