
function sym(){

  let symDiff = [];

  var args = Array.prototype.slice.call(arguments);

  let numOfArrays = args.length;
//  console.log(numOfArrays);

  for (let i = 0; i < args.length; i++) {
    let symTmp = [];
    args[i].forEach(function(element){
      if (!symDiff.includes(element) && !symTmp.includes(element)) {
        symTmp.push(element);
      }
    });

    symDiff.forEach(function(element){
      if (!args[i].includes(element) && !symTmp.includes(element)) {
        symTmp.push(element);
      }
    })

    symDiff = symTmp;

//    console.log("end of loop. symTmp: " + symTmp);
//    console.log("end of loop. symDiff: " + symDiff.sort());

  }

  return symDiff.sort();

}


console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));// should return [2, 3, 4, 6, 7]
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5])); //should return [3, 4, 5].









