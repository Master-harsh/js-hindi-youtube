// IF 

// if(condition == true){
//       // if you give condition value true then it executes 
//       // if you give condition value false then it not enter in the if scope
// }

// it check first these conditions like: "< > <= >= == != === !=="
// === it means check strictlly means not only values but also the type of the values must be same

// if(2 == "2"){
//     console.log("Executed");// it prints both the lines becouse it true
    
// }
// console.log("its true");

// if(2 === "2"){
//     console.log("Executed");// it prints "Its true" becouse this if check strictly
    
// }
// console.log("its true");

// const tempreture = 41

// if(tempreture < 50){
//     console.log("less than 50"); // it prints "less than 50" and "tempreture is greater than 50" becouse second console come outside the if scope
    
// }
// console.log("tempreture is greater than 50");

// in ths type of situation you need to deside which of the answer is correct we have a else keyword 

// 

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
    
// }
// console.log(`user power: ${power}`); // it throws an error becouse power used outside the scope 

// const balance = 1000

// if(balance > 500) console.log("test"); // it prints without { } becouse it automatically configure that when it see his first semicolon below the if condition

// Nested conditions:

// if(balance < 500){
//     console.log("less than");
    
// } else if(balance < 750){
//     console.log("less than 750");
    
// } else if(balance < 900){
//     console.log("less than 900");
    
// } else{
//     console.log("less than 1200");
    
// }

const userLoggedIN = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIN && debitCard && 2==3){
    console.log("Allow to buy course");
    
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
    
}