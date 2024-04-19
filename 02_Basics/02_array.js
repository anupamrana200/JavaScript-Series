const marvel_heroes = ['thor','ironman','spiderman']
const dc_heroes = ['superman','flash','batman']

//push -->
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
//push method pushes the selected array into a target array

//concat -->
// const allHeores = marvel_heroes.concat(dc_heroes)
// console.log(allHeores)
//concat is used to merge two array properly

//spread -->
// const allNewHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(allNewHeroes);
//spread is also use to marge two array

//in concat we can use only two arrays but in spread we can use more than two arrays, so everyone is prefer to use the spread


//flat -->
// const anotherArray = [1,2,3,[5,6,7],5,6,[56,12,[5,68,9,3,10]]]
// const usableAnotherArray = anotherArray.flat(Infinity)
//flat(depth) //but we are lazy so we use infinity, no need to count the depth
// console.log(usableAnotherArray);


//convert to array -->
console.log(Array.isArray("Anupam"))//return boolean value

console.log(Array.from("Anupam"))//convert a string to array

console.log(Array.from({name: "Anupam"}))
//unable to convert a key value pair object to an array
//so returns a empty array

//convert multiple veriable to an array -->
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))


