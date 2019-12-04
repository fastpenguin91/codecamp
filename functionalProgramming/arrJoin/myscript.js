/*
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {

  let newTitle = title.split(/\s+/);

  let newerTitle = newTitle.filter(function(element){
    if(element.length >= 1) {
      return element;
    }

  });

  return newerTitle.join("-").toLowerCase();

}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
let w2 = urlSlug(" Winter Is  Coming")
*/




function checkPositive(arr) {
  // Add your code below this line

  const isPositive = (currentValue) => currentValue > 0;

  return arr.every(isPositive);

  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
