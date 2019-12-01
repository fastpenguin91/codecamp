//[1, 4, 2, 3, 0, 5]
//    1  2  3,    5
//

// [1, 1, 1], 2) returns 1. only use the same # once.



https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-inventory-update/16019


function compareSecondColumn(a, b) {
  if (a[1] === b[1]) {
    return 0;
  }
  else {
    return (a[1] < b[1]) ? -1 : 1;
  }
}


function updateInventory(currentInv, newInv) {
  let matchObj = {
    match: [],
    nomatch: []
  };

  for (let i=0; i < newInv.length; i++){
    let matchBool = false;
    for (let ii=0; ii < currentInv.length; ii++) {

      if (currentInv[ii].includes(newInv[i][1])) {
        matchObj.match.push(newInv[i]);
        matchBool = true;
      }

    }

    if (!matchBool) {
      matchObj.nomatch.push(newInv[i]);
    }

  }


// Now take current inventory and update array by editing  the matched and adding the nomatches.


  for (let i=0; i < currentInv.length; i++){

    for (let ii=0; ii < matchObj.match.length; ii++) {

      if (currentInv[i].includes(matchObj.match[ii][1])) {
        currentInv[i][0] = matchObj.match[ii][0] + currentInv[i][0];

      }

    }
  }

  matchObj.nomatch.forEach(function(element){
    currentInv.push(element);
  });

  currentInv.sort(compareSecondColumn);

  return currentInv;

}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));








/* goal inv = [
  [67, "Bowling Ball"],
  [2, "Dirty Sock"],
  [2, "Hair Pin"],
  [5, "Microphone"]
  [3, "Half-Eaten Apple"],
  [7, "Toothpaste"]
  ]
*/


/*updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ]
) //should return
[
  [88, "Bowling Ball"],  // adds 21 & 67
  [2, "Dirty Sock"],
  [3, "Hair Pin"],       // adds 1 + 2
  [3, "Half-Eaten Apple"],
  [5, "Microphone"],
  [7, "Toothpaste"]
]*/






// webasto air top 2000
// webasto air top 2000 ST/STC
