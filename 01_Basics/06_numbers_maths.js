const score = 400
// console.log(score)
//javascript automatically detect a number, we can also exclusively define number

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 223.8947
// console.log(otherNumber.toPrecision(4));
/*
otherNumber = 223.8947 and toPrecision(3) => 224
toPrecision(2) => 2.2e+2
toPrecision(4) => 223.9
 */

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //according to US standards
// console.log(hundreds.toLocaleString('en-IN'));//according to Indian standards

//---------------------Maths-------------------

//console.log(Math.abs(-4)) //absolute only convert -ve to positive value
//console.log(Math.round(4.5))
//round(4.2) => 4
//round(4.5) => 5
//round(4.6) => 5

//if we control the round, we can use floor and ceil
//console.log(Math.ceil(4.2)) //always consider the ceiling value
//console.log(Math.floor(4.9)); //always consider the floor value

//console.log(Math.min(20,56,8,96,7))
//console.log(Math.max(45,89,253,5))

//Generate random number between a range
let num = Math.random()
const min = 10
const max = 20
console.log(num)
console.log((num * 10) + 1)
console.log(Math.floor((num*10)+1))

console.log(Math.floor(num*(max-min+1))+min)