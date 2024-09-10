// Primitive

// 7 types : string,  numbers, Boolean, null, undefined, symbole, Bigint

// const score = 100//numbers
// const scoreValue = 100.3//numbers

// const isLoggedIn = false//Boolean
// const outsideTemp = null//null
// let userEmail;//undefined

// const id = Symbol('123')//symbole
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 26438843007375153n//Bigint



// Reference (Non primitive)

// Array, objects, functions

// const heros = ["shaktimaan", "Nagraaj", "doga"]// Arrays
// let myobj={
//     name: "Harsh",
//     age: 22,
// }// Object

// const myfunction = function(){
//     console.log("Hello world!");
// }// Functions

// console.log(typeof bigNumber)




//***********************************STACK AND HEAP MEMORY******************************************************** */
// Stack(primitive), Heap(Non-primitive)

let myYoutubename = "Hiteshchaudharidotcom"

let anotherName = myYoutubename
anotherName = "ChaiaurCode"


console.log(myYoutubename);
console.log(anotherName);

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userone

userTwo.email = "harsh@google.com"

console.log(userone.email);
console.log(userTwo.email);





