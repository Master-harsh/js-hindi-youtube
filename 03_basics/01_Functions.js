// FIRST OF YOU HAVE TO UNDESTAND WHAT IS FUNCTION
// so, functions are basically known as if you to print your name in your code multiple of times then there is no need to write --- 
// ---console.log("harsh"); many times in the code you just create a function and call it again and again
// it means 10 line of code create once and use it multiple time in one line

// console.log("Harsh");
// console.log("Harsh");
// console.log("Harsh");
// console.log("Harsh");
// console.log("Harsh");
// console.log("Harsh");
// console.log("Harsh");
// console.log("Harsh");
// console.log("Harsh");

// so there is no need to this just create a function

function sayMyName(){
    console.log("Harsh");
console.log("Harsh");
console.log("Harsh");
console.log("Harsh");
console.log("Harsh");
console.log("Harsh");
console.log("Harsh");
console.log("Harsh");
console.log("Harsh");
} // this is a definition of a function

// now function call

//sayMyName()

// it just basics

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log("Harsh"); // but results your name
    // return result

    return number1 + number2 // when you write like this then you also save some spaces

    console.log("Harsh"); // nothing print 
    

    // Suppose if you want to add here below the return statement any thing nothig is executed becouse it function definition rule
    // but if you write something above the result statement it executed
}

// addTwoNumbers() // if you do not give any thing in parapeter section then it results any thing just print NaN means mujhe nhi pata ki krna kya hai

// addTwoNumbers(3, 4)

// suppose if i want to store that function in a variable and then print that variable in console log then what we have

//const result = addTwoNumbers(3, 5)
//console.log("Result:", result)


// function loginUserMessage(username = "sam"){
//     if(username === undefined){
//         console.log("Please enter a username"); // this if statement checks the value exists or not
//         return 
//     }

//     return `${username} just logged in`
// }

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username"); // this if statement checks the value exists or not
        return 
    }

    return `${username} just logged in`
}

// loginUserMessage("Harsh") // if you write like this then you have no any answer becouse it want to tell somthing to print

// console.log(loginUserMessage("HARSH"))

//console.log(loginUserMessage())

function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(mycar.make); // "Honda"
  myFunc(mycar);
  console.log(mycar.make); // "Toyota"
