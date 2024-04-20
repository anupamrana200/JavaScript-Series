 //const tinderuser = new Object() //its a singleton object
 //const tinderuser1 = {} //its a non singleton object
 //otherwise no difference in the two object

 const tinderuser = {}

 tinderuser.id = "123abc"
 tinderuser.name = "Sammy"
 tinderuser.isLoggedIn = false

//  console.log(tinderuser);

//nested Object -->
const regularUser = {
    email:"abc@gmail.com",
    fullName:{
        userFullName:{
            firstName: "Anupam",
            lastName: "Rana"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser);

//Merge Two or more objects --> 
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e", 6:"f"}

// const obj3 = {obj1, obj2} //it create nested objects
//const obj3 = Object.assign({},obj1, obj2, obj4)
//here the empty object is the target object

//we canc use spread method, it's the easyest method
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

//object in array -->

// const arrryOfObject = [
//     {name:"anupam", roll:"32"},
//     {name:"anu", roll:"31"}
// ]
// console.log(arrryOfObject[0].name);

// console.log(Object.keys(tinderuser)); //it return array of keys
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));//it return nested array of keys and value pair

//checking a pproparty exists or not
// console.log(tinderuser.hasOwnProperty("isLogged")); //return boolean value



const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Anupam"
}

//Object De-structuring 1
/*
const {courseInstructor} = course
console.log(courseInstructor)
*/

//Object De-structuring 2
/*
const {courseInstructor:instructor} = course
console.log(instructor);
*/