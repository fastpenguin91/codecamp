function sum(arr, n) {

  // Only change code below this line
  if (n <= 0) {
    return arr[0];
  } else {
    //sum(arr, n - 1)
    return sum(arr, n - 1) + arr[n];
  }
  // Only change code above this line
}


console.log(sum([2, 3, 4], 1));


function multiply(arr, n) {
  if (n <= 0) {
    return arr[0];
  } else {
    return multiply(arr, n - 1) * arr[n];
  }
}

//console.log("multiplies...");
//console.log(multiply([1,2,3,4], 3));
