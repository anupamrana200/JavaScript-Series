let programming = ["c","c++","Java","Python","javascript"]

programming.forEach(function(val){
    // console.log(val);
})

//using arrow function
programming.forEach((val) => {
    // console.log(val);
})


function printme(val){
    // console.log(val);
}
programming.forEach(printme)
//we have only give the reference only not execute here, so here we give the function reference only


programming.forEach((val, index, arr) => {
    // console.log(val, index, arr);
})


const codeing = [
    {languageName: "java",
     languageFile: "Java"},
     {languageName: "javascript",
     languageFile: "js"},
     {languageName: "python",
     languageFile: "py"},
     {languageName: "ruby",
     languageFile: "rb"}
]

codeing.forEach((item) => {
    console.log(item.languageName);
})