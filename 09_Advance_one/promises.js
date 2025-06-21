let promiseOne = new Promise(function(resolve, reject){
  setTimeout(function(){
    // resolve();
    console.log("Promise one created");
    resolve();
  },1000)
})

promiseOne.then(function(){
  console.log("Promise one resolved");
})

new Promise(function(resolve, reject){
  // setTimeout(function(){
  //   console.log("Async task two created");
  //   resolve();
  // },1000)
  resolve();
  console.log("Async task two created");
}).then(function(){
  console.log("Async two resolved");
});

const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({user:"Anupam", email:"anupam@chai.com"});
  },1000)
})
promiseThree.then(function(user){
  console.log(user);
})


const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise four created");
    let error = false;
    if(!error){
      resolve({userName: 'anupam', pass:'123'})
    } else {
      reject('Error: Something went wrong')
    }
  }, 1000);
})

promiseFour.then(function(user){
  console.log(user);
  return user.userName;
}).then(function(userName){
  console.log(userName);
}).catch(function(error){
  console.log(error);
}).finally(()=>{
  console.log("Promise resolved or rejected");
})



const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise five created");
    let error = true;
    if(!error){
      resolve({userName: 'Javascript', pass:'123'})
    } else {
      reject('Error: JS went wrong')
    }
  }, 1000);
})

//async await is similer to the upper .then, we can use any of them
async function consumePromiseFive(){
try {
  const response = await promiseFive;
  console.log(response);
} catch (error) {
  console.log(error);
}
}
consumePromiseFive();


// async function getAllUsers(){
//   try {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
}).catch((error)=>{
  console.log(error);
})