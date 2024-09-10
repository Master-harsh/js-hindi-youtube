// Primitive

// 7 types : string,  numbers, Boolean, null, undefined, symbole, Bigint

const score = 100//numbers
const scoreValue = 100.3//numbers

const isLoggedIn = false//Boolean
const outsideTemp = null//null
let userEmail;//undefined

const id = Symbol('123')//symbole
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 26438843007375153n//Bigint



// Reference (Non primitive)

// Array, objects, functions

const heros = ["shaktimaan", "Nagraaj", "doga"]// Arrays
let myobj={
    name: "Harsh",
    age: 22,
}// Object

const myfunction = function(){
    console.log("Hello world!");
}// Functions

console.log(typeof bigNumber)

