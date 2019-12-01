// the global Array
var s = [23, 65, 98, 5];
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

//processUserInput(greeting);


function show(elem) {
  console.log("hello " + elem);
}

function processArr(callback) {
  var arr = ["susie", "joe", "jim", "Hailey"];

  for (let i=0; i < arr.length; i++) {
    callback(arr[i]);
  }

}

//processArr(show);




Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  let oldArray = [...this];
  for (let i=0; i<oldArray.length; i++) {
    newArray.push(callback(oldArray[i]));
  }
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});


console.log(new_s);



