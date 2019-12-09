function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line


  for (let i=0; i < collection.length; i++) {
    console.log("testing each item " + i);
    for (const property in source) {
      let currentStatus = true;
      //      console.log(`${property}: ${source[property]}`);
      //      if (collection[i][property] == )
      console.log("cur prop: " + property)

    }
//    console.log("testing collection: " + collection[i] + " against: ...");

  }





//  console.log(collection.);
  for (let i=0; i < collection.length; i++) {
//    console.log(collection[i]);
  }

  // Only change code above this line
  return arr;
}

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
