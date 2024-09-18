// FOR LOOP

// for (let index = 0; index < array.length; index++) { 
//     const element = array[index];

//     // if you wants to run this for loop then it throws an error becouse array is not defined 
    
// }

// for (let index = 0; index < 10; index++) {
//     const element = index;

//     //console.log(index);
//     //console.log(element);
    
    
    
// }

// for (let i = 0; i <= 10; i++) {
//     const table = 2 * i;
//     console.log(table);
    
    // this will print the table of 2
// }

// what if i want to run a conditional statement within a loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element === 5){
//         console.log("5 is best number");

//     }
//     console.log(element);
    
    
// }

// neasted loops

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop values ${j} and inner loop ${i}`);
        
//     }
//     console.log(`Outer loop values ${i}`);
    
    
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop values ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner loop values ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
    
// }

// if you remmember here when we define or declare a foor loop there the loop says that perform your work on array

// const myArray = ["Flash", "Batman", "Superman"]

// for (let index = 0; index < myArray.length; index++) {
//     console.log(myArray.length);
//     const element = myArray[index];
//     if(element === "Batman"){
//         console.log(`${element} is on ${index} index`);
        
//     }
//     console.log(element);
    
// }

// SOME KEYWORDS IN LOOP

// break and continue

// for (let index = 0; index <= 20; index++) {
//     if(index == 5){
//         console.log("Detected 5");
//         break;
        // this is for break statement
//     }
//     console.log(`Value of i is ${index}`);
    
// }

// for (let index = 0; index <= 20; index++) {
//     if(index == 5){
//         console.log("Detected 5");
//         continue;
//         // this is for continue statement
//     }
//     console.log(`Value of i is ${index}`);
    
// }

// can we declare objects in loop
for (let index = 0; index < Object.length; index++) {
    const element = {
        username: "Harsh",
        Email: "Ha@google.com"
    };

    console.log(element);
    
    
}


