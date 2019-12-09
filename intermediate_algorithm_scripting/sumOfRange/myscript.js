/*function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
*/
// for loop

function sumAllFor(arr){
  let highNum;
  let lowNum;
  let total = 0;

  if (arr[0] > arr[1]) {
    highNum = arr[0];
    lowNum = arr[1];
  } else if (arr[1] > arr[0]) {
    highNum = arr[1];
    lowNum = arr[0];
  } else {
    return arr[0];
  }

  for (let i = lowNum; i <= highNum; i++) {
//    console.log(i);
    total += i;
  }

  console.log("total is: " + total);

}


//sumAllFor([1, 4]);
//sumAllFor([5, 10]);
//sumAllFor([10, 5]);

// recursion

function sumAllRec(arr){
  let highNum;
  let lowNum;
  let total = 0;

  if (arr[0] < arr[1]) {
    lowNum = arr[0];
    highNum = arr[1];
  } else if (arr[0] > arr[1]) {
    highNum = arr[0];
    lowNum = arr[1];
  } else {
    return arr[0];
  }
//  console.log("lowNum: " + lowNum + " highNum: " + highNum);
  if (lowNum <= highNum) {
//    console.log([lowNum + 6,highNum]);
    return sumAllRec([lowNum + 1, highNum]) + lowNum;
  } else {
    console.log("out now");
    return lowNum;
  }

}

console.log(sumAllRec([1,4]));
console.log(sumAllRec([4,1]));
console.log(sumAllRec([5,10]));
// return [2,4] + 1
// return [3,4] + 2 + 1
// return [4,4] + 3 + 2 + 1
// return [5,4] + 4 + 3 + 2 + 1;
// return 1 + 
