const user1 = {
    userName: "Anupam",
    price: 999,
    wellcomeMessage: function(){
        //console.log(this) //it print the current object values
        console.log(`hello ${this.userName}, how are you?`);
    }
}

//user1.wellcomeMessage()
//user1.userName = 'Anushree'
//user1.wellcomeMessage()
//console.log(this) //it print a empty object because now we are in the node environment so this refer to a empty object
//**** But if we run in console of a browser then it print the window object */


// function chai(){
//     console.log(this);
// }
// chai()
/* Here we learn that, if we console this in a function then it print many values */

// function chai1(){
//     let username = "Anupam"
//     console.log(this.username) //it print undefined
//     //we learn that we can use this in a object, not in a function
// }
// chai1()


// const chai = function(){

//     let username = "Anupam"
//     console.log(this.username); //it also print undefined
// }

// chai()


/******************* Arrow Function ******************/
// const chai = () => {
//     let username = "Anupam"
//     console.log(this.username); //it print undefined
//     console.log(this); //it print a empty object
// }
// chai()

//so here we learn that, in arrow function if we print this then it print a empty object, but if we print this in a normal function then it print many values.

// const addTwo = (num1, num2) => {
//     return num1+num2
// } //it is a basic arrow funtion

// console.log(addTwo(3,4));


//arrow function with implicit return
// const addTwo = (num1, num2) => num1+num2

//implicit return in another way
// const addTwo = (num1, num2) => (num1+num2)

// console.log(addTwo(3,4));

//so here we learn is we use a curly braces then we have to write return keyword and if we use parenthesis the no need to write the return keyword and it called implicit return. This technique is hugely used in react.


//now if we want to return a object through implicit return then we have to wrap the object within parenthesis. otherwise the resutlt will be undefined

// const checkFunction = () => ({username:"Anupam"})
// console.log(checkFunction());