





/* Alter code below this line */
class Thermostat {
  constructor(fahrenheit){
    this._fahrenheit = fahrenheit;
    this.temperature = 5/9 * (this._fahrenheit - 32);
  }

  get celcius(){
    return 5/9 * (this._fahrenheit - 32) ;
  }

}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C


console.log(thermos.temperature);


/*const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};*/


//const {low: lowToday, high: highToday } = LOCAL_FORECAST.today;

//const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

//console.log(lowToday); // should be 64
//console.log(highToday); // should be 77










/*
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};


function makeList(arr) {
  "use strict";

  // change code below this line
//  let str;
//  const resultDisplayArray = arr.map(function(num){
//    console.log(num);
//    str += `<li class='text-warning'>${num}<li/>`;
//    return str;
  //  })

  let resultDisplayArray = [];

  arr.map(function(num){
    resultDisplayArray.push(`<li class='text-warning'>${num}<li/>`);
  })


//  return [];

  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
/* const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);
*/
