
function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) { // endNum was 1
    //    console.log("is this ever called?");
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
    //    numbers.push(startNum);
    //    return numbers;
  }
}




console.log(rangeOfNumbers(5, 10));




// Solution works in reverse...


/*function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) { // endNum was 1
//    console.log("is this ever called?");
    return [endNum];
  } else {
    var numbers = rangeOfNumbers(startNum + 1, endNum);
    numbers.push(startNum);
    return numbers;
//    numbers.push(startNum);
//    return numbers;
  }
}*/


//console.log(rangeOfNumbers(15, 15));

//console.log(count(5));

function count(n) {
  if (n === 1) {
    return [1];
  } else {
    var numbers = count(n - 1);
    console.log(numbers);
    numbers.push(n);
    return numbers;
  }
}
