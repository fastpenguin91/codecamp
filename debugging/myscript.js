const array1 = [1,2,3,4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));

console.log(array1.reduce(reducer, 5));


//let myArray = [1, 2, 3];
// let arraySum = myArray.reduce((previous, current =>  previous + current);
// console.log(`Sum of array values is: ${arraySum}`);


let myArray = [1, 2, 3];
let arraySum = myArray.reduce((accumulator, currentValue) =>  accumulator + currentValue);
console.log(myArray.reduce(arraySum));

console.log(`Sum of array values is: ${myArray.reduce(arraySum)}`);





//let myArray = [1, 2, 3];
//let arraySum = (accumulator, currentValue) =>  accumulator + currentValue;
//console.log(myArray.reduce(arraySum));

//console.log(`Sum of array values is: ${myArray.reduce(arraySum)}`);









/*
updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ]
) //should return an array with a length of 6.

//[Bowling ball, Dirty sock, hair pin, microphone, half-eaten apple, toothpaste]  */
