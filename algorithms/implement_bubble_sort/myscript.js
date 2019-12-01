
function pairwise(arr, arg) {
  let pairs = [];
  let alreadyUsed = [];

  for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);

    for (let i2 = 0; i2 < arr.length; i2++) {
      if (i == i2){
//        console.log(i + " and " + i2 + " are compared against themselves. Disallowed.  ");
      } else if (alreadyUsed.includes(i) || alreadyUsed.includes(i2) ){
//        console.log("already have a matched pair");
      } else {
//        console.log("using: " + arr[i] + " and: " + arr[i2] );
        if (arr[i] + arr[i2] == arg) {
//          console.log("match found!")
//          console.log(i + " + " + i2 + " = " + arg);
          alreadyUsed.push(i, i2);
        }
      }
    }


  }

  console.log(alreadyUsed);
  let totalSum = 0;

  for (let i = 0; i < alreadyUsed.length; i++) {
    totalSum += alreadyUsed[i];
  }

  //  console.log("answer is: " + totalSum);

  return totalSum;

}

pairwise([1,4,2,3,0,5], 7); // 11
pairwise([1, 3, 2, 4], 4); // 1
pairwise([1, 1, 1], 2);  // should return 1. Returns 3...
pairwise([0, 0, 0, 0, 1, 1], 1) // should return 10
pairwise([], 100) // return 0

// Take each element and add it to other elements in the array to see if it adds  to target value.
// Mark those indexes as not available for use anymore if they did create target value.
// add index to a new array. Add them together.
