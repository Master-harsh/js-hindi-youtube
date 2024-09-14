const user = {
    username: "Harsh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`); // this actually refers the current context within scope
        console.log(this); // now what's the output it prints this whole msg write above same as
        
    }



}

// user.welcomeMessage // if you want to execute like this then it executes but don't gives any result becouse its a function not a obect element

//  user.welcomeMessage() // ok it results/output "Harsh, Welcome to website" but if someone changes the value before the function call then what's result see below code lines.
//  user.username = "sam"
//  user.welcomeMessage() // now it prints a result "sam, Welcome to website", so how becouse you can not set value hardcore you just say jo bhi current cntext hai us current context ke ander jo value hai use print kro

// suppose you want to print like this a simple console log and print {this}

// console.log(this);


// function chai(){
//     let username = "Harsh"
//     // console.log(this); // it prints many things what happend when i want to prints
//     console.log(this.username); // it prints undefined
    
    
// }

// chai()

// const chai = function () {
//     let username = "Harsh"
//     console.log(this.username) // so it also prints undefined

// }

// chai()


//***************** ARROW FUNCTION ************ Just put a arrow between the () and {} 

// const chai = () => {
//     let username = "Harsh"
//     console.log(this.username); // it also prints undefined
    
// }

// chai()
 
// there are some syntax of arrow()

// () => expression

// param => expression

// (param) => expression

// (param1, paramN) => expression

// () => {
//   statements
// }

// param => {
//   statements
// }

// (param1, paramN) => {
//   statements
// }

// const Addtwo = (num1, num2) => { // this is a explicit method
//     return num1 + num2 // first way of arrow function if curly breces used then you have to write return and if () then no need of return

// }

// these are called implicit method

// const Addtwo = (num1, num2) => num1 + num2 // second way of arrow function so it run exactly same above answer is 7

const Addtwo = (num1, num2) => (num1 + num2)
console.log(Addtwo(3, 4))


