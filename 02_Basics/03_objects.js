//singleton
//object.create

//object literals ---> 
const mySym = Symbol("key1") //declare a symbol, now we use the symbole in the objct as a key

const jsUser = {
    "full Name":"Anupam Rana",
    name: "Anupam",
    //mySym:"myKey1",//this is not the correct way to use symbol, it printed successfully but its datatype is converted to a string. its the problem.
    [mySym]:"myKey1",//its the correct way to use symbol
    age: 22,
    email:"anupam@google.com",
    location: "kolkata",
    isLoggedIn: false,
    loginDays: ["monday","tuesday","sunday"]
}

// console.log(jsUser.email) //we can ignore this method
// console.log(jsUser["email"]) //this is a good method to access object
//console.log(jsUser.full Name) //now we can't access the full name using the dot method
// console.log(jsUser["full Name"])

// console.log(jsUser[mySym])

//change of a key of a object -->
//jsUser.email = "anupam@microsoft.com"
// Object.freeze(jsUser) //using it we can freez a object


//using function in the object -->
jsUser.greetings = function(){
    console.log("Hello! JS user");
}

jsUser.greetingsTwo = function(){
    //when we reference the same object then we use this.
    console.log(`Hello! ${this.name}, How are you?`)
}

//console.log(jsUser.greetings)//function is not executed but return back
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo())