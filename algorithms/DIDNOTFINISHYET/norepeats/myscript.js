


/*

  1 * 2 * 3 * 4 * 5 * 6 * 7 = 5040 / 7 = 720  possibilities: 5040 / strLength.

  1 * 2 * 3 * 4 * 5 * 6  = 720 / 6 = 120   possibilities: 720

  1 * 2 * 3 * 4 * 5 = 120 / 5 = 24

  1 * 2 * 3 * 4 = 24 / 4 = 6

  1 * 2 * 3 = 6 / 3 = 2    //possibilities: 6

  1 * 2 = 2 / 2 = 1

  1 * 1 = 1 / 1 = 1

timesToExist = possibilities / string.length

numOfPossibilities = factorial(stringLength);

stringlength;

timesToExist = factorial(stringLength) / stringlength

  let strlength = 7;

  let timesToExist = factorial(7) / strlength = 720;


numOfPossibilities = 5040
stringLength = 7;
timesToExist = 5040 / 7 = 720

----

numOfPossibilities = timesToExist
stringLength = stringLength - 1 (6)
timesToExist = numOfPossibilities / stringLength


  */


function factorial(n){

  if (n == 1) {
    //    console.log(num);
    return 1;
  } else {
    return n * factorial(n - 1);
  }

}
//  console.log("each character will have: " + (factorial(n.length) / n.length) + " times to be in each row")

function allPoss(str){

  let numOfPossibilities = factorial(str.length);
  let timesToExist = numOfPossibilities / str.length;
  let strLength = str.length;
  let strList = [];

  for (let i = 0; i < numOfPossibilities; i++) {
    strList.push("");
  }


  for (let i = 0; i < str.length; i++ ) {
    let timesExisted = 0;
    let tmpInc = 0;
    //        console.log("entering first loop with: " + str[i]);
    console.log("outer loop");
    for (let i2 = 0; i2 < strList.length; i2++) {
      let testStr;

      // create the string that potentially replaces the previous string.

      if (timesExisted >= timesToExist && !strList[i2].includes(str[tmpInc])){
        console.log("fullStr: " + strList[i2] + " indexChar: " + str[tmpInc]);
        tmpInc < (str.length - 1) ? tmpInc++ : tmpInc = 0;
        timesExisted = 0;
        testStr = strList[i2].slice(0, i) + str[tmpInc];
        console.log("JUST CREATED STR: " + testStr);
      } else if (strList[i2].includes(str[tmpInc])){
        tmpInc < (str.length - 1) ? tmpInc++ : tmpInc = 0;
        testStr = strList[i2].slice(0, i) + str[tmpInc];
        //console.log("JUST CREATED STR: " + testStr);
      }
      else {
        testStr = strList[i2].slice(0, i) + str[tmpInc];
//        console.log("JUST CREATED STR: " + testStr);
      }




      //console.log("str about to add: " + testStr);
      strList.splice(i2,1, testStr);
      timesExisted++;




      //console.log("tmpInc: " + tmpInc + " nExisted: " + timesExisted + " tToExist: " + timesToExist);
      console.log(strList);
//      console.log(testStr);
    }

    numOfPossibilities = numOfPossibilities / strLength;
    strLength -= 1;
    timesToExist = numOfPossibilities / strLength;
  }

  console.log(strList);

}



allPoss("abc");




/*
// insert when... string does NOT exist || when it exists less than the times its allowed to exist.

exists more than allowed times?
  - increment tmpInc
  - reset exist Count.
  - DONT push

exists less than allowed times?
  - push
  - increase exist count

exists? -
  Check how many times.
  greater than or equal to allowed?
  - increment tmpInc
  - reset existCount


if (exists less than allowed times) {
insert into array
} else {
increase existscount.
}





  "abc"
  "acb"
  "bac"
  "bca"
  "cab"
  "cba"


 "string a, b, c need to be in twice. "
 -- Good --

  "abc"
  "acb"
  "bac"
  "bca"
  "cab"
  "cba"

"string ab only once. If al"




timesToExist: 2

  a
  a
  b
  b
  c
  c





  "abc"
  "acb"
  "bac"
  "bca"
  "cab"
  "cba"



 */



/*
function allPossibilities(final, n, working){


  if(n.length == 1){
    return n;
  } else if (n.length == 2 ) {
    final.push(n[1] + n[0]);
    final.push(n[0] + n[1]);
    return final;
  } else if (n.length == 3 ) {


  }

}*/

//console.log(noRepeats([], "a"));

//console.log(allPossibilities([], "ab"));
//console.log(allPossibilities([], "abc"));
//console.log(allPossibilities([], "abcd"));
















































// slice each element into its own separate string.

// abc = a b c

// Final array will have n.length ! elements.

// each element gets X times to be in each row.    X = n.length! / length


// "abc" example.

// "abc" = a b c
// 1 * 2 * 3 = 6 possibilities / 3 = each place gets the character twice












/*

  ba ->  cd, dc


  ab, ac, ad

  
  ca
  ca
  da
  da


  ba, bc, bd

  ab
  ab
  cb
  cb
  db
  db

  ca, cb, cd

  ac
  ac
  bc
  bc
  badc
  dc


  da, db, dc

  ad
  ad
  bd
  bd
  bacd
  cd





  // 1st and the 0th.


  ab, ac, ad

  ba
  ba
  ca
  ca
  da
  da


  ba, bc, bd

  ab
  ab
  cb
  cb
  db
  db

  ca, cb, cd

  ac
  ac
  bc
  bc
  dc
  dc


  da, db, dc

  ad
  ad
  bd
  bd
  cd
  cd









--------------------------




// abcd

Start with a

ab, ac, ad

ba
ba
ca
ca
da
da


ba, bc, bd

ab
ab
cb
cb
db
db

ca, cb, cd

ac
ac
bc
bc
dc
dc


da, db, dc

ad
ad
bd
bd
cd
cd

















-------- Working at least for getting all positions for the last two spots




  // abcd

  Start with a

  ab, ac, ad

  ba
  ba
  ca
  ca
  da
  da


ba, bc, bd

  ab
  ab
  cb
  cb
  db
  db

ca, cb, cd

  ac
  ac
  bc
  bc
  dc
  dc


da, db, dc

  ad
  ad
  bd
  bd
  cd
  cd






// abcd

start with a. combine it with all other characters at the end.
move to b
move to c


---- Endings ----


--- d ---
da, db, dc

da
ad
db
bd
dc
cd

--- c ---
ca, cb, cd

ca
ac
cb
bc
cd
dc


--- b ---
ba, bc, bd

ba
ab
bc
cb
bd
db



--- a ---
  ab, ac, ad

ab
ba
ac
ca
ad
da



















abc
acb

bac
bca

cab
cba





  ab
  ab
  b
  b
  c
  c

 */











// 1 2 3 = 1 * 2 * 3 = 6 possibilities / 3 = each # gets 2 times in front

// 1 2 3 4  = 1 * 2 * 3 * 4 = 24 possibilities    24 / 4 = 6 times in front

// 1 2 3 4 5 = 1 * 2 * 3 * 4 * 5 = 120 possibilities  = 120 / 5 = 24 times in front.
















// Get remove a off, then put it back on at the beginning when function is complete? 

// take 'ab' and split them.
// put a where b is and b where a is.









//Go through an array and print out all of the elements

/*function arrayElem(n){
  if (n.length == 1) {
    return n[0];
  } else {
    return n[0] + arrayElem(n.splice(1, n.length));
//    console.log(n[0] + arrayElem(n.splice(1, n.length)));
  }
} */

// ["a", "b"];

//console.log(arrayElem(['a', 'b','c']));



//Determine whether or not a string is a palindrome

/*function isPalindrome(n){
  if (n.length == 1) {
    return n;
  } else {
//    console.log("original: " + original);
    return isPalindrome(n.slice(1, n.length)) + n[0];
  }
}

if (isPalindrome("racecar") == "racecar") {
  console.log("yes");
} else {
  console.log("no");
}

console.log(isPalindrome("cotty"));
*/

/*function palin2(n){
  if (n.length == 1 || (n.length == 2 && n[0] == n[1]) ) {
    return "is a palindrome";
  } else {
    if (n[0] == n[n.length - 1]) {
      return palin2(n.slice(1, n.length - 1));
    } else {
      return "not a palindrome";
    }
  }
}*/

//console.log(palin2("poop"));

//console.log(palin2("racecar"));
//console.log(palin2("poop in my mouuth"));

//console.log(palin2("s"));


//Calculate a raised to the power of b


// a = 3 b = 3  == a^b... == 3^3  == 3 * 3 * 3

//2^4 = 16

// 2 * 2 * 2 * 2


/*
function power(base, exponent){
  let result;

  if (exponent == 1) {
    return base;
  } else {
    console.log("base: " + base);
    return base * power(base, exponent - 1);
  }
} */

// 2 ^ 5

// 2 * 2^4
// 2 * 2 * 2^3
// 2 * 2 * 2 * 2^2
// 2 * 2 * 2 * 2 * 2



// 2 * 2^2
// 2




//console.log(power(2, 5));

//console.log(power(3, 3));


//Extra credit: Try implementing the map function (the one that transforms arrays) without using loops






/*
function reverse(str){
  if (str.length == 1) {
    console.log("length is 1");
    console.log(str);
    return str;
  } else {
    console.log(str);
    return reverse(str.slice(1, str.length)) + str[0];
    // return Tring + s
    // return ring + t + s
    // return ing + r + t + s
    // return ng + i + r + t + s
    // return g + n + i + r + t + s
    // return g + n + ...
  }
}
*/

// "string"....
// s = s
// st = ts
// str = rts
// stri = irts
// strin = nirts
// string = gnirts

//console.log(reverse("STring"));


/*function combinations(n){
  if
}*/













/*
function fac2(n) {
  // Base case
  if (n === 0 || n === 1) return 1;

  // Recursive case
  return n * factorial(n - 1);

} */

//console.log(fac2(3));


/*
  function factorial(n){

  if (n == 1) {
//    console.log(num);
    return 1;
  } else {
    return n * factorial(n - 1);
  }

}
*/


//console.log(factorial(4));








/*
var arr = ["a","b","c","d"];

for (let i=0; i < arr.length; i++ ) {

  console.log(arr[i]);

}
*/



/*

123 = 1 * 2 * 3 = 6 possibilities

1 23
1 32

2 13
2 31

3 12
3 21






1234 = 1 * 2 * 3 * 4 = 24 possibilities.  24 / 4 = 6 

Front = 6x
2nd row = 6x
3rd row = 6x
4th row = 6x





1234
1243
1342
1324
1423
1432



2134
2143
2314
2341
2413
2431


3124
3142
3214
3241
3412
3421

4123
4132
4213
4231
4312
4321










abcd
abdc
acdb
acbd
adbc
adcb



bacd
badc
bcad
bcda
bdac
bdca


cabd
cadb
cbad
c2da
cdab
cdba

dabc
dacb
dbac
dbca
dcab
dcba




1st row: 6 times:  1 * 2 * 3 * 4 = 24 / 4 = 6

2nd row: 2 times: 1 * 2 * 3 = 6 / 3 = 2 times













--- d ---
da, db, dc

da
ad
db
bd
dc
cd

--- c ---
ca, cb, cd

ca
ac
cb
bc
cd
dc


--- b ---
ba, bc, bd

ba
ab
bc
cb
bd
db



--- a ---
ab, ac, ad

ab
ba
ac
ca
ad
da







































12 34
12 43

13 42
13 24

14 23
14 32



2134
2143

2314
2341

2413
2431


3124
3142

3214
3241

3412
3421

4123
4132

4213
4231

4312
4321



--- d ---
da, db, dc

da
ad
db
bd
dc
cd

--- c ---
ca, cb, cd

ca
ac
cb
bc
cd
dc


--- b ---
ba, bc, bd

ba
ab
bc
cb
bd
db



--- a ---
ab, ac, ad

ab
ba
ac
ca
ad
da




*/



