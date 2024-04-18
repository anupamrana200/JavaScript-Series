let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString('en-IN'))
// console.log(myDate.toLocaleDateString())

//in javaScript month starts form index 0
let myCreatedDate = new Date(2023,1,28)
console.log(myCreatedDate.toDateString());

myCreatedDate = new Date(2023, 2, 5, 6,3)
console.log(myCreatedDate.toLocaleString())

myCreatedDate = new Date("01-04-2024") //DD-MM-YY format
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);//results in miliseconds
console.log(myCreatedDate.getTime());

console.log(Math.floor(myTimeStamp / 1000))
