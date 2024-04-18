const name = "Anupa"
const roll = 32

console.log(`My name is ${name} my roll number is ${roll}`);
console.log(typeof name);

const myName = new String('Anupam') //Object
console.log(myName[0]);
console.log(myName.__proto__);

console.log(myName.length);
console.log(myName.toUpperCase())
console.log(myName.indexOf('m'))
console.log(myName.charAt(2));

const newString = myName.substring(0,3)
console.log(newString);
//substring not consider -ve value it just ignore it and start form beginning

const anotherString = myName.slice(-5,-1)
console.log(anotherString);
//slice is worked as substring extra feature is, it considers -ve value.

const testString = "    Anupam   "
console.log(testString);
console.log(testString.trim());
//trim() method is use to remove whitespace from a string
//trimStart() and trimEnd() is also used to remove whitespace of start and end respectively of a string

const testUrl = "https://anupam.com/java%20script"
console.log(testUrl.replace('%20','-'))

console.log(testUrl.includes('anupam'))
console.log(testUrl.includes('anushree'))
//includes used to find a string which is present in a target string or not, it's return a bollean value

const story = "a brown fox jumps over the lazy dog"
console.log(story.split(' '))
//split return a array

