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
  
  // console.log(mycar.make); // "Honda"
  // myFunc(mycar);
  // console.log(mycar.make); // "Toyota"

// suppose you are making a website in website you have a section of add to cart and you don't know how many items added by user you just only sum the price of all the items and show it


// function calculatecartPrice(num1){
//     return num1
// }

// function calculatecartPrice(...num1){
//          return num1
//    }// it returns a array [ 200, 400, 600 ]
    
function calculatecartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculatecartPrice(2));  // ye to sahi hai but in the parameter section if we get more than one values then what happend

//console.log(calculatecartPrice(200, 400, 600, 5000));// so altimatlly it results 200 only

// so what is the problem how to fix it to solve this we have a rest operator or you can say Spred operator

const user = {
    username: "Harsh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    // it results Username is Harsh and price is 199 but i change any key name in object like price to prices then it result undefined
}

// handleObject(user) // here boject also allowed if you want like below line

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
     return getArray[1]
}


// here if  
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));







