// this is my first promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    // 
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

// This is my second promise

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
});

// This is my third promise

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "Chai",
            email: "Harsh@gmail.com"
        })

    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

// This is my fourth promise

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Harsh", password: "123"})
        }  else{
            reject('ERROR: Something went wrong')
        }      
    }, 2000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
    
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(() => console.log("The promise is either resolved or rejected")
);

// this is my fifth promise

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function ConsumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
}

ConsumePromiseFive()


// async function getAllusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
        
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
        
// }

// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);  
})
