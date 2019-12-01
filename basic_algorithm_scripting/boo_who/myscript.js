
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b){
    return a - b;
  });

  let correctIndex = 0;

  for (let i=0; i < arr.length; i++){
    if (num > arr[i]){
      console.log(num + " is higher than: " + arr[i]);
      correctIndex++;
    }
  }

  console.log(arr);
  console.log(correctIndex);
}

getIndexToIns([40, 8, 5, 75, 100, 18, 7, 60], 50);

// where do i belong?

// [10, 20, 30, 40, 50]





/*function frankenSplice(arr1, arr2, n) {
  let newArr = [];
  let beginning = arr2.splice(0,n);

  beginning.forEach(function(elem){
    newArr.push(elem);
  });

  arr1.forEach(function(elem){
    newArr.push(elem);
  });

  arr2.forEach(function(elem){
    newArr.push(elem);
  })

  // It's alive. It's alive!
  return newArr;
}

//frankenSplice([1, 2, 3], [4, 5, 6], 1);

//frankenSplice([1,2,3], [4,5], 1); // [4,1,2,3,5]

frankenSplice([1,2,3], [4,5], 1); // [4,1,2,3,5]
*/

/*
function booWho(bool) {

  var x = typeof bool;
  // What is the new fad diet for ghost developers? The Boolean.
  if (x == "boolean") {
    return true;
  } else {
    return false;
  }
}


*/



