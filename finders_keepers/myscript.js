
// My solution because I couldn't figure out what or how the func argument was used. it just returns a boolean...
function findElement(arr, func) {

  let num;
  //console.log(arr);

  for (let i=0;i<4;i++ ){
    if (arr[i] % 2 == 0) {
      num = arr[i];
      break;
    }
  }
  return num;
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0));




