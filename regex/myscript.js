



// uhh...
// (?=\w{3,6})(?=\D*(\d\d))


// favou?rite   in a regex will make the u optional.


//let username = "JackOfAllTrades";

//let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;

// ^[a-z]  -- First character is a letter.
// ([0-9][0-9])


//let result = userCheck.test(username);



//let userCheck = /JACK/; // Should match JACK, NOT match J, SHOULD match Jo
//let userCheck = /[a-z]/ig; // Should match JACK, NOT match J, SHOULD match Jo
//let userCheck = /[a-z]/ig; // Should match JACK, NOT match J, SHOULD match Jo, SHOULD match Oceans11

//let userCheck = /[a-z]{2,}/ig; // Should match JACK, NOT match J, SHOULD match Jo, SHOULD match Oceans11 A1


/* This is the one closest to passing
  let userCheck = /^[a-z]{2,}/ig; // Should match JACK, NOT match J, SHOULD match Jo, SHOULD match Oceans11
*/




//let userCheck = /^[a-z+]\d+$/gi; // Change this line
//let userCheck = /\w+{2,}$/; // Change this line
//let userCheck = /^[\w]{2,}$/;


//let userCheck = /^[a-z]{2,}$/i;   //


/*
let jack = userCheck.test("JACK"); // Should match JACK, NOT match J, SHOULD match Jo

let j = userCheck.test("J");
let jo = userCheck.test("Jo");
let Oceans11 = userCheck.test("Oceans11");
let RegexGuru = userCheck.test("RegexGuru");

let doubleo7 = userCheck.test("007");
let nine = userCheck.test("9");
let A1 = userCheck.test("A1");
let Badusername = userCheck.test("BadUs3rnam3");


//console.log(result);
console.log("following should be true: ");
console.log(jack);
console.log(jo);
console.log(Oceans11);
console.log(RegexGuru);
console.log("following should be false: ");
console.log(j);
console.log(doubleo7);
console.log(nine);
console.log(A1);
console.log(Badusername);
*/


//let userCheck = /[0-3]/ig; // Should match JACK, NOT match J, SHOULD match Jo, SHOULD match Oceans11

//let zero = userCheck.test("j0"); // Should match JACK, NOT match J, SHOULD match Jo

//console.log(zero);

// /([a-z]){2,}/gi  - works until Badus3rname
// (^[a-z]+)([0-9]$) GOD FUCKiNG DAMMIT














/* // searches for NON-digits
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
*/



/* // searches for digits
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
*/



/* \W is the opposite of \w
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
*/


/* // \w is the shortcut for [a-zA-Z0-9_]
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
*/



/* // search for match at end of string with $ (anchor)
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
*/




/* // search for match at the beginning of a string using ^
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
*/


/*
// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
*/


/* // the ? after the * turns it into a lazy match. looks for the character that starts with < and ends with the first > found... 
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
*/


//let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
//let chewieRegex = /Aa*///these two slashes are comment. yikes; // Only change this line
//let result = chewieQuote.match(chewieRegex);




/*
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
*/


/*
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
*/


/*
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
*/



/*
let quoteSample = "The quick brown fox jumps over the lazy dog.";
//let alphabetRegex = /[A-z]/g; // Change this line
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result);
*/

/*
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result);
*/


/*
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

*/


/*
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; // Change this line
let result = twinkleStar.match(starRegex);// Change this line
*/


/*
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex);
*/

/*
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
*/



/*
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
*/

/*
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
*/












//////
//////

//// Screwing around ////////






let quit = "qu";
let quRegex= /q(?=u)/;

let noquit = "qt";
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex)); // returns ["q"]
console.log(noquit.match(qRegex)); // returns ["q"]

