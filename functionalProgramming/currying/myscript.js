function add(x) {
  // Add your code below this line
  console.log("x up top is: " + x);
  return function(y) {
    console.log("x is stil: " + x + " and y is now: " + y);
    return function(z) {
      console.log("x is stil: " + x + " and y is now: " + y + " and z is: " + z);
      return x + y + z;
    }
  }

  // Add your code above this line
}
add(10)(20)(30);
