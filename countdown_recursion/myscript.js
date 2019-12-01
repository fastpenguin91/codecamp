var theArray = [];

function addToArr(arr, n){
  if (n <= 0) {
    return;
  } else {
    arr.push(n);
    addToArr(arr, n - 1);
  }
}

addToArr(theArray, 3);
console.log(theArray);

