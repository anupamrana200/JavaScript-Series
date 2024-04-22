/* IIFE -> Immediately Invoked Functions Expressions */

(function chai(){
    console.log("DB Connected");
    //it is the named IIFE
})();


//()()
//here first parenthesis is for the function definition and the second for the execution

/* Now What is IIFE? 
   --> Which function is immediately invoked and which function is safe form global polutuion this is the IIFE*/

//IIFE with arrow function
( () => {
    console.log("DB connected two");
})();

//IIFE with arrow function and veriable
( (name1) => {
    console.log(`DB connected two ${name1}`);
})('Anupam')


//So, if we write two or more IIFE together then must give the semicolon at the last of the IIFE.