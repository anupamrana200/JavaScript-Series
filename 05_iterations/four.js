const myobject = {
    js:"javaScript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myobject) {
    // console.log(`shortcut for ${myobject[key]} is ${key}`);
}

//lets check, is for in loop is work for Array? 
let programming = ["c","c++","Java","Python","javascript"]

for (const key in programming) {
    // console.log(key); 
    //here we learn that for in loop invoke the key but for of loop invoke the value
}
for (const key in programming) {
   console.log(programming[key])
}