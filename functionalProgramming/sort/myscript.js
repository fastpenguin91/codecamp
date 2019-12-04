
function alphabeticalOrder(arr) {
  // Add your code below this line
  let result = arr.sort(function(a,b) {
    console.log(a);
    return a === b ? 0 : a > b ? 1 : -1;
  });

  return result;

  // Add your code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
