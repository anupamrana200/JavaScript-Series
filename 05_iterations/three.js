//for of loop
const arr = [1,2,3,4,5]
 for(const num of arr){
    // console.log(num);
 }

const greetings = "Hello World"
for(const greet of greetings){
    if(greet == " ") continue;

    // console.log(`char is: ${greet}`);
}

//map contain unique value and retain the order of values
const country = new Map
country.set("IN","India")
country.set("FR","France")
country.set("USA","United States of America")
country.set("BN","Bangladesh")
// console.log(country);

for (const key of country) {
    // console.log(key); //it print the array of each key and value pair
}

for (const [key,val] of country) { //using this syntax we destructure the array of key value pair
    // console.log(`${key} => ${val}`);
}
//this destructuing is not used for normal object, 
//for in loop is used to iterate a object
