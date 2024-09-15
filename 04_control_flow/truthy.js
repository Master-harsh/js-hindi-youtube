const userEmail = []

// if(userEmail){ // here we are not check wheather is true or false just check is there any value in the userEmail and go further
//     console.log("Got user email");
    
// } else {
//     console.log("Don't have user email");
    
// }

// there is some rules for truthy value and falsy values

// falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// turthy values: "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObject = {}

if (Object.keys(emptyObject).length === 0){
    // console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1  = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 10 // it basically prints as what ever value it found first it prints


// console.log(val1);

// REMEMBER ONE THING IS THAT NULLISH AND TERNERY OPERATOR NOT SAME

// TERNERY OPERATOR

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");






