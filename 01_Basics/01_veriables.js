const accountId = 15542
let accountEmail = "anupam@gmail.com"
var accountPassword = "8896532"
accountCity = "Jaipur"
let accountState

// accountId = 2 //(this is not allowed, we can't modify a constant veraiable)
accountEmail = "anu@gmail.com"
accountPassword = "653231";
accountCity = "Kolkata"
// console.log(accountId)

/* 
Prefer not to use ver
because issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])