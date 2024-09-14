// Immediately Invoked Function Expression (IIFE)


// function chai(){
//     console.log(`DB CONNECTED`);
    
// }()  // it throws an error ki bhai samajh nhi pa rha ki  which syntax you use

// if we put this function in a parentheses then it works

// (function chai(){
//     console.log(`DB CONNECTED`);
    
// })(); // THIS CONCEPT IS KNOWN AS IIFE WE USE IIFE TO PROTECT WITH GLOBAL SCOPE POLUTIONS

// // CAN YOU provide it as a arrow function yes if not clearify that with END the first function with ; 

// ( () => {
//     console.log(`DB CONNECTED TWO`); // IT THROWS AN ERROR IS NOT A FUNCTION
    
// }  )()  // so it prints both the function but if you want to print it with arrow function then you can becouse problem is not there problem is line separatop semicolon (;)

(function chai(){
    // actually this is a named iife
    console.log(`DB CONNECTED`);
    
})(); 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); // suppose you to expect a variable inside then simplly
    
}  )('Harsh')  // name pass in the second parentheses

// two iife together, named iife 1, unamed iife 2