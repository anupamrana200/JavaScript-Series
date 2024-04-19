//Array of js is resizable
//mix of different datatypes
const myArray = [1,2,3,4,5,6,"Anupam","calcutta"]

console.log(myArray[1]);

//Array Methods
myArray.push(5)
myArray.push(100)
console.log(myArray)

myArray.pop()
console.log(myArray)

myArray.unshift(9)
console.log(myArray);

myArray.shift()
console.log(myArray)

console.log(myArray.includes('Anupam'));
//includes return boolean value

console.log(myArray.indexOf(5))
console.log(myArray.indexOf(200));
//if an element is not present in the array then the indexOf method return -1, otherwise return the index

const myNewArray = myArray.join()
//join method simply convert a array to a string
console.log(myArray)
console.log(myNewArray)
console.log(typeof myNewArray);

//slice and splice
console.log("Main Array: ",myArray);
console.log("use slice: ", myArray.slice(1,3))
console.log("After using slice the main array is: ", myArray)
//in slice method there is no change in the main array

console.log("Before splice main array: ",myArray)
console.log("use splice method: ",myArray.splice(1,5))
console.log("After splice main array: ",myArray);
//in splice method there is change in the main array

